import {
  DataUtil,
  getAttributeValueByBreakpoint,
  stringSnakeToCamel,
  getObjectPropertyValueByKey,
  EventHandlerUtil,
  throttle,
} from '../_utils/index'

export interface IPlaceOptions {
  mode: string
}

export interface IPlaceQueries {
  componentName: string
  instanseQuery: string
  attrQuery: string
}

const defaultPlaceOptions: IPlaceOptions = {
  mode: 'append',
}

const defaultPlaceQueires: IPlaceQueries = {
  componentName: 'place',
  instanseQuery: '[data-kt-place="true"]',
  attrQuery: 'data-kt-place-',
}

class PlaceComponent {
  element: HTMLElement
  options: IPlaceOptions
  queries: IPlaceQueries

  constructor(_element: HTMLElement, _options: IPlaceOptions, _queries: IPlaceQueries) {
    this.element = _element
    this.options = Object.assign(defaultPlaceOptions, _options)
    this.queries = _queries

    // Initial update
    this.update()

    DataUtil.set(this.element, this.queries.componentName, this)
  }

  private getOption(name: string) {
    const attr = this.element.getAttribute(`${this.queries.attrQuery}${name}`)
    if (attr) {
      let value = getAttributeValueByBreakpoint(attr)
      if (attr != null && String(value) === 'true') {
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

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public update = () => {
    const parentSelector = this.getOption('parent')?.toString()
    const mode = this.getOption('mode')
    const parentElement = parentSelector ? document.querySelector(parentSelector) : null

    if (parentElement && this.element.parentNode !== parentElement) {
      if (mode === 'prepend') {
        parentElement.prepend(this.element)
      } else if (mode === 'append') {
        parentElement.append(this.element)
      }
    }
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
    componentName: string = defaultPlaceQueires.componentName
  ): PlaceComponent | null => {
    const place = DataUtil.get(el, componentName)
    if (place) {
      return place as PlaceComponent
    }

    return null
  }

  public static createInstances = (
    selector: string = defaultPlaceQueires.instanseQuery,
    options: IPlaceOptions = defaultPlaceOptions,
    queries: IPlaceQueries = defaultPlaceQueires
  ) => {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((el) => {
      const item = el as HTMLElement
      let place = PlaceComponent.getInstance(item)
      if (!place) {
        place = new PlaceComponent(item, options, queries)
      }
    })
  }

  public static createInsance = (
    selector: string = defaultPlaceQueires.instanseQuery,
    options: IPlaceOptions = defaultPlaceOptions,
    queries: IPlaceQueries = defaultPlaceQueires
  ): PlaceComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let place = PlaceComponent.getInstance(item)
    if (!place) {
      place = new PlaceComponent(item, options, queries)
    }
    return place
  }

  public static bootstrap = (selector: string = defaultPlaceQueires.instanseQuery) => {
    PlaceComponent.createInstances(selector)
  }

  public static reinitialization = (selector: string = defaultPlaceQueires.instanseQuery) => {
    PlaceComponent.createInstances(selector)
  }
}

// Window resize handler
window.addEventListener('resize', function () {
  let timer

  throttle(
    timer,
    () => {
      // Locate and update Offcanvas instances on window resize
      const elements = document.querySelectorAll(defaultPlaceQueires.instanseQuery)
      elements.forEach((el) => {
        const place = PlaceComponent.getInstance(el as HTMLElement)
        if (place) {
          place.update()
        }
      })
    },
    200
  )
})

export {PlaceComponent, defaultPlaceOptions, defaultPlaceQueires}
