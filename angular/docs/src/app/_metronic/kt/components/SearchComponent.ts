import {
  EventHandlerUtil,
  DataUtil,
  getBreakpoint,
  getAttributeValueByBreakpoint,
  stringSnakeToCamel,
  getObjectPropertyValueByKey,
  getViewPort,
  isVisibleElement,
  throttle,
} from '../_utils/index'

import {MenuComponent, defaultMenuOptions} from './MenuComponent'

export interface ISearchOptions {
  minLength: number // Miniam text lenght to query search
  keypress: boolean // Enable search on keypress
  enter: boolean // Enable search on enter key press
  layout: 'menu' | 'inline' // Use 'menu' or 'inline' layout options to display search results
  responsive?: number // Pass integer value or bootstrap compatible breakpoint key(sm,md,lg,xl,xxl) to enable reponsive form mode for device width below the breakpoint value
  showOnFocus: boolean // Always show menu on input focus
}

export interface ISearchQueries {
  componentName: string
  instanseQuery: string
  attrQuery: string
}

const defaultSearchOptions: ISearchOptions = {
  minLength: 2, // Miniam text lenght to query search
  keypress: true, // Enable search on keypress
  enter: true, // Enable search on enter key press
  layout: 'menu', // Use 'menu' or 'inline' layout options to display search results
  showOnFocus: true, // Always show menu on input focus
}

const defaultSearchQueires: ISearchQueries = {
  componentName: 'search',
  instanseQuery: '[data-kt-search]',
  attrQuery: 'data-kt-search-',
}

class SearchComponent {
  element: HTMLElement
  contentElement: HTMLElement
  formElement: HTMLFormElement
  inputElement: HTMLInputElement
  spinnerElement: HTMLElement
  clearElement: HTMLElement
  toggleElement: HTMLElement
  submitElement: HTMLElement
  toolbarElement: HTMLElement
  resultsElement: HTMLElement
  suggestionElement: HTMLElement
  emptyElement: HTMLElement
  layout: any

  options: ISearchOptions
  queries: ISearchQueries

  processing: boolean = false
  menuObject: MenuComponent | undefined

  constructor(_element: HTMLElement, _options: ISearchOptions, _queries: ISearchQueries) {
    // Variables
    this.options = Object.assign(defaultSearchOptions, _options)
    this.queries = _queries

    // Elements
    this.element = _element
    this.contentElement = this._getElement('content') as HTMLElement
    this.formElement = this._getElement('form') as HTMLFormElement
    this.inputElement = this._getElement('input') as HTMLInputElement
    this.spinnerElement = this._getElement('spinner') as HTMLElement
    this.clearElement = this._getElement('clear') as HTMLElement
    this.toggleElement = this._getElement('toggle') as HTMLElement
    this.submitElement = this._getElement('submit') as HTMLElement
    this.toolbarElement = this._getElement('toolbar') as HTMLElement

    this.resultsElement = this._getElement('results') as HTMLElement
    this.suggestionElement = this._getElement('suggestion') as HTMLElement
    this.emptyElement = this._getElement('empty') as HTMLElement

    // Layout
    this.layout = this.getOption('layout')
    if (this.layout === 'menu') {
      this.menuObject = new MenuComponent(this.contentElement, defaultMenuOptions)
    }

    // Update
    this.update()

    // Event Handlers
    this.handlers()

    DataUtil.set(this.element, this.queries.componentName, this)
  }

  private _getElement = (name: string) => {
    return this.element.querySelector('[data-kt-search-element="' + name + '"]')
  }

  // Get option
  private getOption = (name: string) => {
    const attr = this.element.getAttribute(`${this.queries.attrQuery}${name}`)
    if (attr) {
      let value = getAttributeValueByBreakpoint(attr)

      if (value !== null && String(value) === 'true') {
        return true
      } else if (value !== null && String(value) === 'false') {
        return false
      }

      return value
    } else {
      const optionName = stringSnakeToCamel(name)

      const option = getObjectPropertyValueByKey(this.options, optionName)
      if (option) {
        return getAttributeValueByBreakpoint(option)
      } else {
        return null
      }
    }
  }

  // Check if responsive form mode is enabled
  private getResponsiveFormMode = () => {
    const responsive = this.getOption('responsive') as string
    const width = getViewPort().width

    if (!responsive) {
      return null
    }

    const breakpoint = getBreakpoint(responsive)
    let breakPointNum = -1
    if (!breakpoint) {
      breakPointNum = parseInt(responsive)
    } else {
      breakPointNum = +breakpoint
    }

    if (width < breakPointNum) {
      return 'on'
    } else {
      return 'off'
    }
  }

  // Focus
  private focus = () => {
    this.element.classList.add('focus')

    if (
      this.getOption('show-on-focus') === true ||
      this.inputElement.value.length >= this.options.minLength
    ) {
      this.show()
    }
  }

  // Blur
  private blur = () => {
    this.element.classList.remove('focus')
  }

  // Enter
  private enter = (e: KeyboardEvent) => {
    const key = e.charCode || e.keyCode || 0

    if (key === 13) {
      e.preventDefault()

      this.search()
    }
  }

  // Input
  private input = () => {
    if (this.getOption('min-length')) {
      const minLength = parseInt(this.getOption('min-length') as string)

      if (this.inputElement.value.length >= minLength) {
        this.search()
      } else if (this.inputElement.value.length === 0) {
        this.clear()
      }
    }
  }

  private handlers(): void {
    // Focus
    this.inputElement.addEventListener('focus', this.focus)

    // Blur
    this.inputElement.addEventListener('blur', this.blur)

    // Keypress
    if (this.getOption('keypress') === true) {
      this.inputElement.addEventListener('input', this.input)
    }

    // Submit
    if (this.submitElement) {
      this.submitElement.addEventListener('click', this.search)
    }

    // Enter
    if (this.getOption('enter') === true) {
      this.inputElement.addEventListener('keypress', this.enter)
    }

    // Clear
    if (this.clearElement) {
      this.clearElement.addEventListener('click', this.clear)
    }

    // Menu
    if (this.menuObject) {
      // Toggle menu
      if (this.toggleElement) {
        this.toggleElement.addEventListener('click', this.show)

        this.menuObject.on('kt.menu.dropdown.show', function () {
          // @ts-ignore
          if (isVisibleElement(this.toggleElement)) {
            // @ts-ignore
            this.toggleElement.classList.add('active')
            // @ts-ignore
            this.toggleElement.classList.add('show')
          }
        })

        this.menuObject.on('kt.menu.dropdown.hide', function () {
          // @ts-ignore
          if (isVisibleElement(this.toggleElement)) {
            // @ts-ignore
            this.toggleElement.classList.remove('active')
            // @ts-ignore
            this.toggleElement.classList.remove('show')
          }
        })
      }

      this.menuObject.on('kt.menu.dropdown.shown', function () {
        // @ts-ignore
        this.inputElement.focus()
      })
    }

    // Window resize handling
    window.addEventListener('resize', () => {
      let timer

      throttle(
        timer,
        () => {
          this.update()
        },
        200
      )
    })
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  // Update
  public update = () => {
    // Handle responsive form
    if (this.layout === 'menu') {
      let responsiveFormMode = this.getResponsiveFormMode()

      if (responsiveFormMode === 'on' && this.contentElement.contains(this.formElement) === false) {
        this.contentElement.prepend(this.formElement)
        this.formElement.classList.remove('d-none')
      } else if (
        responsiveFormMode === 'off' &&
        this.contentElement.contains(this.formElement) === true
      ) {
        this.element.prepend(this.formElement)
        this.formElement.classList.add('d-none')
      }
    }
  }

  // Show menu
  public show = () => {
    if (this.menuObject) {
      this.update()

      this.menuObject.show(this.element)
    }
  }

  // Hide menu
  public hide = () => {
    if (this.menuObject) {
      this.update()

      this.menuObject.hide(this.element)
    }
  }

  // Search
  public search = () => {
    if (this.processing === false) {
      // Show search spinner
      if (this.spinnerElement) {
        this.spinnerElement.classList.remove('d-none')
      }

      // Hide search clear button
      if (this.clearElement) {
        this.clearElement.classList.add('d-none')
      }

      // Hide search toolbar
      if (this.toolbarElement) {
        this.toolbarElement.classList.add('d-none')
      }

      // Focus input
      this.inputElement.focus()

      this.processing = true
      EventHandlerUtil.trigger(this.element, 'kt.search.process')
    }
  }

  // Complete
  public complete = () => {
    if (this.spinnerElement) {
      this.spinnerElement.classList.add('d-none')
    }

    // Show search toolbar
    if (this.clearElement) {
      this.clearElement.classList.remove('d-none')
    }

    if (this.inputElement.value.length === 0) {
      this.clear()
    }

    // Focus input
    this.inputElement.focus()

    this.show()

    this.processing = false
  }

  // Clear
  public clear = () => {
    if (EventHandlerUtil.trigger(this.element, 'kt.search.clear') === false) {
      return
    }

    // Clear and focus input
    this.inputElement.value = ''
    this.inputElement.focus()

    // Hide clear icon
    if (this.clearElement) {
      this.clearElement.classList.add('d-none')
    }

    // Show search toolbar
    if (this.toolbarElement) {
      this.toolbarElement.classList.remove('d-none')
    }

    // Hide menu
    if (this.getOption('show-on-focus') === false) {
      this.hide()
    }

    EventHandlerUtil.trigger(this.element, 'kt.search.cleared')
  }

  public isProcessing = () => {
    return this.processing
  }

  public getQuery = () => {
    return this.inputElement.value
  }

  public getMenu = () => {
    return this.menuObject
  }

  public getFormElement = () => {
    return this.formElement
  }

  public getInputElement(): HTMLInputElement {
    return this.inputElement
  }

  public getContentElement(): HTMLElement {
    return this.contentElement
  }

  public getElement(): HTMLElement {
    return this.element
  }

  // Event API
  public on = (name: string, handler: Function) => {
    return EventHandlerUtil.on(this.element, name, handler)
  }

  public one = (name: string, handler: Function) => {
    return EventHandlerUtil.one(this.element, name, handler)
  }

  public off = (name: string) => {
    return EventHandlerUtil.off(this.element, name)
  }

  // Static methods
  public static getInstance = (
    el: HTMLElement,
    componentName: string = defaultSearchQueires.componentName
  ) => {
    const Search = DataUtil.get(el, componentName)
    if (Search) {
      return Search
    }

    return null
  }

  public static createInstances = (
    selector: string = defaultSearchQueires.instanseQuery,
    options: ISearchOptions = defaultSearchOptions,
    queries: ISearchQueries = defaultSearchQueires
  ) => {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((el) => {
      const item = el as HTMLElement
      let Search = SearchComponent.getInstance(item)
      if (!Search) {
        Search = new SearchComponent(item, options, queries)
      }
    })
  }

  public static createInsance = (
    selector: string = defaultSearchQueires.instanseQuery,
    options: ISearchOptions = defaultSearchOptions,
    queries: ISearchQueries = defaultSearchQueires
  ): SearchComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let Search = SearchComponent.getInstance(item)
    if (!Search) {
      Search = new SearchComponent(item, options, queries)
    }
    return Search
  }

  public static bootstrap = (selector: string = defaultSearchQueires.instanseQuery) => {
    SearchComponent.createInstances(selector)
  }

  public static reinitialization = (selector: string = defaultSearchQueires.instanseQuery) => {
    SearchComponent.createInstances(selector)
  }
}
export {SearchComponent, defaultSearchOptions, defaultSearchQueires}
