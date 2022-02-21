import {
  getElementOffset,
  getScrollTop,
  getAttributeValueByBreakpoint,
  getUniqueIdWithPrefix,
  getObjectPropertyValueByKey,
  stringSnakeToCamel,
  getCSS,
  DataUtil,
  ElementAnimateUtil,
  ElementStyleUtil,
  EventHandlerUtil,
} from '../_utils/index'

export interface StickyOptions {
  offset: number
  reverse: boolean
  animation: boolean
  animationSpeed: string
  animationClass: string
}

const defaultStickyOptions: StickyOptions = {
  offset: 200,
  reverse: false,
  animation: true,
  animationSpeed: '0.3s',
  animationClass: 'animation-slide-in-down',
}

class StickyComponent {
  element: HTMLElement
  options: StickyOptions
  instanceUid: string
  instanceName: string | null = ''
  attributeName: string
  eventTriggerState: boolean
  lastScrollTop: number

  constructor(_element: HTMLElement, options: StickyOptions) {
    this.element = _element
    this.options = Object.assign(defaultStickyOptions, options)
    this.instanceUid = getUniqueIdWithPrefix('sticky')
    this.instanceName = this.element.getAttribute('data-kt-sticky-name')
    this.attributeName = 'data-kt-sticky-' + this.instanceName
    this.eventTriggerState = true
    this.lastScrollTop = 0

    // Event Handlers
    window.addEventListener('scroll', this.scroll)

    // Initial Launch
    this.scroll()

    DataUtil.set(this.element, 'sticky', this)
  }

  private scroll = () => {
    let offset = this.getOption('offset')
    let reverse = this.getOption('reverse')

    // Exit if false
    if (offset === false) {
      return
    }

    let offsetNum = 0
    if (typeof offset === 'string') {
      offsetNum = parseInt(offset)
    }

    const st = getScrollTop()

    // Reverse scroll mode
    if (reverse === true) {
      // Release on reverse scroll mode
      if (st > offsetNum && this.lastScrollTop < st) {
        if (document.body.hasAttribute(this.attributeName) === false) {
          this.enable()
          document.body.setAttribute(this.attributeName, 'on')
        }

        if (this.eventTriggerState === true) {
          EventHandlerUtil.trigger(this.element, 'kt.sticky.on')
          EventHandlerUtil.trigger(this.element, 'kt.sticky.change')

          this.eventTriggerState = false
        }
      } else {
        // Back scroll mode
        if (document.body.hasAttribute(this.attributeName)) {
          this.disable()
          document.body.removeAttribute(this.attributeName)
        }

        if (this.eventTriggerState === false) {
          EventHandlerUtil.trigger(this.element, 'kt.sticky.off')
          EventHandlerUtil.trigger(this.element, 'kt.sticky.change')

          this.eventTriggerState = true
        }
      }

      this.lastScrollTop = st
      return
    }

    // Classic scroll mode
    if (st > offsetNum) {
      if (document.body.hasAttribute(this.attributeName) === false) {
        this.enable()
        document.body.setAttribute(this.attributeName, 'on')
      }

      if (this.eventTriggerState === true) {
        EventHandlerUtil.trigger(this.element, 'kt.sticky.on')
        EventHandlerUtil.trigger(this.element, 'kt.sticky.change')
        this.eventTriggerState = false
      }
    } else {
      // back scroll mode
      if (document.body.hasAttribute(this.attributeName) === true) {
        this.disable()
        document.body.removeAttribute(this.attributeName)
      }

      if (this.eventTriggerState === false) {
        EventHandlerUtil.trigger(this.element, 'kt.sticky.off')
        EventHandlerUtil.trigger(this.element, 'kt.sticky.change')
        this.eventTriggerState = true
      }
    }
  }

  private getOption = (name: string) => {
    const dataStickyAttr = 'data-kt-sticky-' + name
    if (this.element.hasAttribute(dataStickyAttr) === true) {
      const attrValueInStr = this.element.getAttribute(dataStickyAttr)
      const attrValue = getAttributeValueByBreakpoint(attrValueInStr || '')
      if (attrValue !== null && String(attrValue) === 'true') {
        return true
      } else if (attrValue !== null && String(attrValue) === 'false') {
        return false
      }

      return attrValue
    } else {
      const optionName = stringSnakeToCamel(name)
      const option = getObjectPropertyValueByKey(this.options, optionName)
      if (option) {
        return getAttributeValueByBreakpoint(option)
      }
    }
  }

  private disable = () => {
    ElementStyleUtil.remove(this.element, 'top')
    ElementStyleUtil.remove(this.element, 'width')
    ElementStyleUtil.remove(this.element, 'left')
    ElementStyleUtil.remove(this.element, 'right')
    ElementStyleUtil.remove(this.element, 'z-index')
    ElementStyleUtil.remove(this.element, 'position')
  }

  private enable = (update: boolean = false) => {
    const top = this.getOption('top')
    const left = this.getOption('left')
    // const right = this.getOption("right");
    let width = this.getOption('width')
    const zindex = this.getOption('zindex')

    if (update !== true && this.getOption('animation') === true) {
      ElementStyleUtil.set(this.element, 'animationDuration', this.getOption('animationSpeed'))
      ElementAnimateUtil.animateClass(this.element, 'animation ' + this.getOption('animationClass'))
    }

    if (zindex !== null) {
      ElementStyleUtil.set(this.element, 'z-index', zindex)
      ElementStyleUtil.set(this.element, 'position', 'fixed')
    }

    if (top !== null) {
      ElementStyleUtil.set(this.element, 'top', top)
    }

    if (width !== null && width !== undefined) {
      const widthTarget = getObjectPropertyValueByKey(width, 'target')
      if (widthTarget) {
        const targetElement = document.querySelector(widthTarget)
        if (targetElement) {
          width = getCSS(targetElement, 'width')
        }
      }
      ElementStyleUtil.set(this.element, 'width', width)
    }

    if (left !== null) {
      if (String(left).toLowerCase() === 'auto') {
        var offsetLeft = getElementOffset(this.element).left

        if (offsetLeft > 0) {
          ElementStyleUtil.set(this.element, 'left', String(offsetLeft) + 'px')
        }
      }
    }
  }

  public update = () => {
    if (document.body.hasAttribute(this.attributeName) === true) {
      this.disable()
      document.body.removeAttribute(this.attributeName)
      this.enable(true)
      document.body.setAttribute(this.attributeName, 'on')
    }
  }

  // Event API
  public on = (name: string, callBack: Function) => {
    return EventHandlerUtil.on(this.element, name, callBack)
  }

  public one = (name: string, callback: Function) => {
    return EventHandlerUtil.one(this.element, name, callback)
  }

  public off = (name: string) => {
    return EventHandlerUtil.off(this.element, name)
  }

  public trigger = (name: string) => {
    return EventHandlerUtil.trigger(this.element, name)
  }

  // Static methods
  public static hasInstace(element: HTMLElement) {
    return DataUtil.has(element, 'sticky')
  }

  public static getInstance(element: HTMLElement) {
    if (element !== null && StickyComponent.hasInstace(element)) {
      return DataUtil.get(element, 'sticky')
    }
  }

  // Create Instances
  public static createInstances(selector: string) {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((element) => {
      const item = element as HTMLElement
      let sticky = StickyComponent.getInstance(item)
      if (!sticky) {
        sticky = new StickyComponent(item, defaultStickyOptions)
      }
    })
  }

  public static createInsance = (
    selector: string,
    options: StickyOptions = defaultStickyOptions
  ): StickyComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let sticky = StickyComponent.getInstance(item)
    if (!sticky) {
      sticky = new StickyComponent(item, options)
    }
    return sticky
  }

  public static bootstrap(attr: string = '[data-kt-sticky="true"]') {
    StickyComponent.createInstances(attr)
  }

  public static reInitialization(attr: string = '[data-kt-sticky="true"]') {
    StickyComponent.createInstances(attr)
  }
}

export {StickyComponent, defaultStickyOptions}
