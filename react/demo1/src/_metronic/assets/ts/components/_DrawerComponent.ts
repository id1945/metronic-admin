import {
  EventHandlerUtil,
  getUniqueIdWithPrefix,
  getObjectPropertyValueByKey,
  stringSnakeToCamel,
  getAttributeValueByBreakpoint,
  throttle,
  getCSS,
  DOMEventHandlerUtil,
  ElementStyleUtil,
} from '../_utils/index'

export class DrawerStore {
  static store: Map<string, DrawerComponent> = new Map()

  public static set(instanceId: string, drawerComponentObj: DrawerComponent): void {
    if (DrawerStore.has(instanceId)) {
      return
    }

    DrawerStore.store.set(instanceId, drawerComponentObj)
  }

  public static get(instanceId: string): DrawerComponent | undefined {
    if (!DrawerStore.has(instanceId)) {
      return
    }
    return DrawerStore.store.get(instanceId)
  }

  public static remove(instanceId: string): void {
    if (!DrawerStore.has(instanceId)) {
      return
    }

    DrawerStore.store.delete(instanceId)
  }

  public static has(instanceId: string): boolean {
    return DrawerStore.store.has(instanceId)
  }

  public static getAllInstances() {
    return DrawerStore.store
  }
}

export interface DrawerOptions {
  overlay: boolean
  baseClass: string
  overlayClass: string
  direction: string
}

const defaultDrawerOptions: DrawerOptions = {
  overlay: true,
  baseClass: 'drawer',
  overlayClass: 'drawer-overlay',
  direction: 'end',
}

class DrawerComponent {
  element: HTMLElement
  overlayElement: HTMLElement | null = null
  toggleElement: HTMLElement | null = null
  options: DrawerOptions
  instanceUid: string
  name: string = ''
  shown: boolean = false
  lastWidth: number = 0
  closeElement: HTMLElement | null = null

  constructor(_element: HTMLElement, options: DrawerOptions) {
    this.element = _element
    this.options = Object.assign(defaultDrawerOptions, options)
    this.instanceUid = getUniqueIdWithPrefix('drawer')
    this.overlayElement = null
    this.name = this.element.getAttribute('data-kt-drawer-name') || ''
    this.shown = false
    this.toggleElement = null
    // Event Handlers
    this._handlers()
    // Update Instance
    this._update()
    // Bind Instance
    DrawerStore.set(this.element.id, this)
  }

  private _handlers = () => {
    const togglers = this._getOption('toggle') as string
    const closers = this._getOption('close') as string

    if (togglers !== null && togglers.length > 0) {
      DOMEventHandlerUtil.on(document.body, togglers, 'click', (e: Event) => {
        e.preventDefault()
        this.toggleElement = document.getElementById(togglers)
        this._toggle()
      })
    }

    if (closers !== null && closers.length > 0) {
      DOMEventHandlerUtil.on(document.body, closers, 'click', (e: Event) => {
        e.preventDefault()
        this.closeElement = document.getElementById(closers)

        this._hide()
      })
    }
  }

  private _update = () => {
    const width = String(this._getOption('width'))
    const direction = String(this._getOption('direction'))

    // Reset state
    const hasBaseClass = this.element.classList.contains(`${this.options.baseClass}-on`)
    const bodyCanvasAttr = String(document.body.getAttribute(`data-kt-drawer-${this.name}-`))

    if (hasBaseClass === true && bodyCanvasAttr === 'on') {
      this.shown = true
    } else {
      this.shown = false
    }

    // Activate/deactivate
    if (this._getOption('activate') === true) {
      this.element.classList.add(this.options.baseClass)
      this.element.classList.add(`${this.options.baseClass}-${direction}`)
      ElementStyleUtil.set(this.element, 'width', width, true)

      this.lastWidth = parseInt(width)
    } else {
      ElementStyleUtil.set(this.element, 'width', '')
      this.element.classList.remove(this.options.baseClass)
      this.element.classList.remove(`${this.options.baseClass}-${direction}`)
      this._hide()
    }
  }

  private _getOption = (name: string) => {
    const attr = this.element.getAttribute(`data-kt-drawer-${name}`)
    if (attr) {
      let value = getAttributeValueByBreakpoint(attr)
      if (value !== null && String(value) === 'true') {
        return true
      } else {
        if (value !== null && String(value) === 'false') {
          return false
        }
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

  private _toggle = () => {
    if (EventHandlerUtil.trigger(this.element, 'kt.drawer.toggle') === false) {
      return
    }

    if (this.shown) {
      this._hide()
    } else {
      this._show()
    }

    EventHandlerUtil.trigger(this.element, 'kt.drawer.toggled')
  }

  private _hide = () => {
    if (EventHandlerUtil.trigger(this.element, 'kt.drawer.hide') === false) {
      return
    }

    this.shown = false
    this._deleteOverlay()
    document.body.removeAttribute(`data-kt-drawer-${this.name}`)
    document.body.removeAttribute(`data-kt-drawer`)
    this.element.classList.remove(`${this.options.baseClass}-on`)
    if (this.toggleElement != null) {
      this.toggleElement.classList.remove('active')
    }

    EventHandlerUtil.trigger(this.element, 'kt.drawer.after.hidden')
  }

  private _show = () => {
    if (EventHandlerUtil.trigger(this.element, 'kt.drawer.show') === false) {
      return
    }

    this.shown = true
    this._createOverlay()
    document.body.setAttribute(`data-kt-drawer-${this.name}`, 'on')
    document.body.setAttribute('data-kt-drawer', 'on')
    this.element.classList.add(`${this.options.baseClass}-on`)
    if (this.toggleElement !== null) {
      this.toggleElement.classList.add('active')
    }

    EventHandlerUtil.trigger(this.element, 'kt.drawer.shown')
  }

  private _createOverlay = () => {
    if (this._getOption('overlay') === true) {
      this.overlayElement = document.createElement('DIV')
      const elementZIndex = getCSS(this.element, 'z-index')
      if (elementZIndex) {
        const overlayZindex = parseInt(elementZIndex) - 1
        ElementStyleUtil.set(this.overlayElement, 'z-index', overlayZindex) // update
      }
      document.body.append(this.overlayElement)
      const overlayClassOption = this._getOption('overlay-class')
      if (overlayClassOption) {
        this.overlayElement.classList.add(overlayClassOption.toString())
      }
      this.overlayElement.addEventListener('click', (e) => {
        e.preventDefault()
        this._hide()
      })
    }
  }

  private _deleteOverlay = () => {
    if (this.overlayElement !== null && this.overlayElement.parentNode) {
      this.overlayElement.parentNode.removeChild(this.overlayElement)
    }
  }

  private _getDirection = () => {
    return String(this._getOption('direction')) === 'left' ? 'left' : 'right'
  }

  private _getWidth = () => {
    let width = this._getOption('width')
    if (width && width === 'auto') {
      width = getCSS(this.element, 'width')
    }

    return width
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public toggle = () => {
    this._toggle()
  }

  public show = () => {
    this._show()
  }

  public hide = () => {
    this._hide()
  }

  public isShown = () => {
    return this.shown
  }

  public update = () => {
    this._update()
  }

  public goElement = () => {
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
  public static hasInstace = (elementId: string): boolean => {
    return DrawerStore.has(elementId)
  }

  public static getInstance = (elementId: string) => {
    return DrawerStore.get(elementId)
  }

  public static hideAll = () => {
    const oldInstances = DrawerStore.getAllInstances()
    oldInstances.forEach((dr) => {
      dr.hide()
    })
  }

  public static updateAll = () => {
    const oldInstances = DrawerStore.getAllInstances()
    oldInstances.forEach((dr) => {
      dr.update()
    })
  }

  // Create Instances
  public static createInstances(selector: string): void {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((element) => {
      const item = element as HTMLElement
      let drawer = DrawerComponent.getInstance(item.id)
      if (!drawer) {
        drawer = new DrawerComponent(item, defaultDrawerOptions)
      }
      drawer.element = item
      drawer.hide()
    })
  }

  // Dismiss instances
  public static handleDismiss = () => {
    // External drawer toggle handler
    DOMEventHandlerUtil.on(document.body, '[data-kt-drawer-dismiss="true"]', 'click', () => {
      /* @ts-ignore */
      const element = this.closest('[data-kt-drawer="true"]')
      if (element) {
        const drawer = DrawerComponent.getInstance(element)
        if (drawer && drawer.isShown()) {
          drawer.hide()
        }
      }
    })
  }

  // Global Initialization
  public static initGlobalHandlers(): void {
    // Window Resize Handling
    window.addEventListener('resize', function () {
      let timer: number | undefined
      throttle(
        timer,
        () => {
          // Locate and update Drawer instances on window resize
          const elements = document.body.querySelectorAll('[data-kt-drawer="true"]')
          elements.forEach((el) => {
            const item = el as HTMLElement
            const instance = DrawerComponent.getInstance(item.id)
            if (instance) {
              instance.element = item
              instance.update()
            }
          })
        },
        200
      )
    })
  }

  public static bootstrap = () => {
    DrawerComponent.createInstances('[data-kt-drawer="true"]')
    DrawerComponent.initGlobalHandlers()
    DrawerComponent.handleDismiss()
  }

  public static reinitialization = () => {
    DrawerComponent.createInstances('[data-kt-drawer="true"]')
    DrawerComponent.hideAll()
    DrawerComponent.updateAll()
    DrawerComponent.handleDismiss()
  }
}

export {DrawerComponent, defaultDrawerOptions}
