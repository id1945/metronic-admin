import {EventHandlerUtil, DataUtil, getUniqueIdWithPrefix, getCSS} from '../_utils/index'

export interface IImageInputOptions {}

export interface IImageInputQueries {
  componentName: string
  instanseQuery: string
  inputQuery: string
  wrapperQuery: string
  cancelQuery: string
  removeQuery: string
  hiddenQuery: string
}

const defaultImageInputOptions = {}

const defaultImageInputQueires: IImageInputQueries = {
  componentName: 'image-input',
  instanseQuery: '[data-kt-image-input]',
  inputQuery: 'input[type="file"]',
  wrapperQuery: '.image-input-wrapper',
  cancelQuery: '[data-kt-image-input-action="cancel"]',
  removeQuery: '[data-kt-image-input-action="remove"]',
  hiddenQuery: 'input[type="hidden"]',
}

class ImageInputComponent {
  element: HTMLElement
  inputElement: HTMLInputElement | null
  wrapperElement: HTMLElement | null
  cancelElement: HTMLElement | null
  removeElement: HTMLElement | null
  hiddenElement: HTMLInputElement | null
  src: string = ''
  options: IImageInputOptions
  queries: IImageInputQueries
  uid: string
  value: string = ''

  constructor(_element: HTMLElement, _options: IImageInputOptions, _queries: IImageInputQueries) {
    // Variables
    this.options = Object.assign(defaultImageInputOptions, _options)
    this.queries = _queries
    this.uid = getUniqueIdWithPrefix(this.queries.componentName)

    // Elements
    this.element = _element
    this.inputElement = this.element.querySelector(this.queries.inputQuery)
    this.wrapperElement = this.element.querySelector(this.queries.wrapperQuery)
    this.cancelElement = this.element.querySelector(this.queries.cancelQuery)
    this.removeElement = this.element.querySelector(this.queries.removeQuery)
    this.hiddenElement = this.element.querySelector(this.queries.hiddenQuery)
    if (this.wrapperElement) {
      this.src = getCSS(this.wrapperElement, 'backgroundImage')
    }

    // Event Handlers
    this.handlers()

    DataUtil.set(this.element, this.queries.componentName, this)
  }

  private handlers(): void {
    this.element.addEventListener('change', this._change)
    if (this.cancelElement) {
      this.cancelElement.addEventListener('click', this._cancel)
    }

    if (this.removeElement) {
      this.removeElement.addEventListener('click', this._cancel)
    }
  }

  // Event Handlers
  private _change = (e: Event) => {
    e.preventDefault()

    if (this.inputElement !== null && this.inputElement.files && this.inputElement.files[0]) {
      // Fire change event
      if (EventHandlerUtil.trigger(this.element, 'kt.imageinput.change', e) === false) {
        return
      }

      const reader = new FileReader()

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (this.wrapperElement && e.target) {
          this.wrapperElement.style.setProperty('background-image', `url('${e.target.result}')`)
        }
      }

      reader.readAsDataURL(this.inputElement.files[0])
      this.element.classList.add('image-input-changed')
      this.element.classList.remove('image-input-empty')

      // Fire removed event
      EventHandlerUtil.trigger(this.element, 'kt.imageinput.changed', e)
    }
  }

  private _cancel = (e: Event) => {
    e.preventDefault()

    // Fire cancel event
    if (EventHandlerUtil.trigger(this.element, 'kt.imageinput.cancel', e) === false) {
      return
    }

    this.element.classList.remove('image-input-changed')
    this.element.classList.remove('image-input-empty')
    this.element.style.setProperty('background-image', this.src)
    if (this.inputElement) {
      this.inputElement.value = ''
    }

    if (this.hiddenElement !== null) {
      this.hiddenElement.value = '0'
    }

    // Fire canceled event
    EventHandlerUtil.trigger(this.element, 'kt.imageinput.canceled', e)
  }

  private _remove = (e: Event) => {
    e.preventDefault()

    // Fire remove event
    if (EventHandlerUtil.trigger(this.element, 'kt.imageinput.remove', e) === false) {
      return
    }

    this.element.classList.remove('image-input-changed')
    this.element.classList.add('image-input-empty')
    if (this.wrapperElement) {
      this.wrapperElement.style.setProperty('background-image', 'none')
    }

    if (this.inputElement) {
      this.inputElement.value = ''
    }

    if (this.hiddenElement !== null) {
      this.hiddenElement.value = '1'
    }

    // Fire removed event
    EventHandlerUtil.trigger(this.element, 'kt.imageinput.removed', e)
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public getInputElement(): HTMLInputElement | null {
    return this.inputElement
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

  public trigger = (name: string, event: Event) => {
    return EventHandlerUtil.trigger(this.element, name, event)
  }

  // Static methods
  public static getInstance = (
    el: HTMLElement,
    componentName: string = defaultImageInputQueires.componentName
  ) => {
    const ImageInput = DataUtil.get(el, componentName)
    if (ImageInput) {
      return ImageInput
    }

    return null
  }

  public static createInstances = (
    selector: string = defaultImageInputQueires.instanseQuery,
    options: IImageInputOptions = defaultImageInputOptions,
    queries: IImageInputQueries = defaultImageInputQueires
  ) => {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((el) => {
      const item = el as HTMLElement
      let ImageInput = ImageInputComponent.getInstance(item)
      if (!ImageInput) {
        ImageInput = new ImageInputComponent(item, options, queries)
      }
    })
  }

  public static createInsance = (
    selector: string = defaultImageInputQueires.instanseQuery,
    options: IImageInputOptions = defaultImageInputOptions,
    queries: IImageInputQueries = defaultImageInputQueires
  ): ImageInputComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let ImageInput = ImageInputComponent.getInstance(item)
    if (!ImageInput) {
      ImageInput = new ImageInputComponent(item, options, queries)
    }
    return ImageInput
  }

  public static bootstrap = (selector: string = defaultImageInputQueires.instanseQuery) => {
    ImageInputComponent.createInstances(selector)
  }

  public static reinitialization = (selector: string = defaultImageInputQueires.instanseQuery) => {
    ImageInputComponent.createInstances(selector)
  }
}
export {ImageInputComponent, defaultImageInputOptions, defaultImageInputQueires}
