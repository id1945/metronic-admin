import {
  getAttributeValueByBreakpoint,
  stringSnakeToCamel,
  getObjectPropertyValueByKey,
  EventHandlerUtil,
  throttle,
} from '../_utils/index'

export class SwapperStore {
  static store: Map<string, SwapperComponent> = new Map()

  public static set(instanceId: string, drawerComponentObj: SwapperComponent): void {
    if (SwapperStore.has(instanceId)) {
      return
    }

    SwapperStore.store.set(instanceId, drawerComponentObj)
  }

  public static get(instanceId: string): SwapperComponent | undefined {
    if (!SwapperStore.has(instanceId)) {
      return
    }
    return SwapperStore.store.get(instanceId)
  }

  public static remove(instanceId: string): void {
    if (!SwapperStore.has(instanceId)) {
      return
    }

    SwapperStore.store.delete(instanceId)
  }

  public static has(instanceId: string): boolean {
    return SwapperStore.store.has(instanceId)
  }

  public static getAllInstances() {
    return SwapperStore.store
  }
}

export interface ISwapperOptions {
  mode: string
}

export interface ISwapperQueries {
  componentName: string
  instanseQuery: string
  attrQuery: string
}

const defaultSwapperOptions: ISwapperOptions = {
  mode: 'append',
}

const defaultSwapperQueires: ISwapperQueries = {
  componentName: 'swapper',
  instanseQuery: '[data-kt-swapper="true"]',
  attrQuery: 'data-kt-swapper-',
}

class SwapperComponent {
  element: HTMLElement
  options: ISwapperOptions
  queries: ISwapperQueries

  constructor(_element: HTMLElement, _options: ISwapperOptions, _queries: ISwapperQueries) {
    this.element = _element
    this.options = Object.assign(defaultSwapperOptions, _options)
    this.queries = _queries

    // Initial update
    this.update()

    SwapperStore.set(this.element.id, this)
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
    componentName: string = defaultSwapperQueires.componentName
  ): SwapperComponent | null => {
    const place = SwapperStore.get(el.id)
    if (place) {
      return place as SwapperComponent
    }

    return null
  }

  public static createInstances = (
    selector: string = defaultSwapperQueires.instanseQuery,
    options: ISwapperOptions = defaultSwapperOptions,
    queries: ISwapperQueries = defaultSwapperQueires
  ) => {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((el) => {
      const item = el as HTMLElement
      let place = SwapperComponent.getInstance(item)
      if (!place) {
        place = new SwapperComponent(item, options, queries)
      }
    })
  }

  public static createInsance = (
    selector: string = defaultSwapperQueires.instanseQuery,
    options: ISwapperOptions = defaultSwapperOptions,
    queries: ISwapperQueries = defaultSwapperQueires
  ): SwapperComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let place = SwapperComponent.getInstance(item)
    if (!place) {
      place = new SwapperComponent(item, options, queries)
    }
    return place
  }

  public static bootstrap = (selector: string = defaultSwapperQueires.instanseQuery) => {
    SwapperComponent.createInstances(selector)
  }

  public static reinitialization = (selector: string = defaultSwapperQueires.instanseQuery) => {
    SwapperComponent.createInstances(selector)
  }
}

// Window resize handler
window.addEventListener('resize', function () {
  let timer
  throttle(
    timer,
    () => {
      // Locate and update Offcanvas instances on window resize
      const elements = document.querySelectorAll(defaultSwapperQueires.instanseQuery)
      elements.forEach((el) => {
        const place = SwapperComponent.getInstance(el as HTMLElement)
        if (place) {
          place.update()
        }
      })
    },
    200
  )
})

export {SwapperComponent, defaultSwapperOptions, defaultSwapperQueires}
