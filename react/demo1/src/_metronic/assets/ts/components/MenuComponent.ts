import {createPopper, VirtualElement} from '@popperjs/core'
import {
  getElementChild,
  getElementParents,
  getAttributeValueByBreakpoint,
  getUniqueIdWithPrefix,
  DataUtil,
  ElementStyleUtil,
  EventHandlerUtil,
  insertAfterElement,
  slideUp,
  slideDown,
  DOMEventHandlerUtil,
  throttle,
  getHighestZindex,
} from '../_utils/index'

export interface MenuOptions {
  dropdown: {
    hoverTimeout: number
    zindex: number
  }
  accordion: {
    slideSpeed: number
    expand: boolean
  }
}

const defaultMenuOptions: MenuOptions = {
  dropdown: {
    hoverTimeout: 200,
    zindex: 105,
  },
  accordion: {
    slideSpeed: 250,
    expand: false,
  },
}

type PopperPlacement =
  | 'right'
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'right-start'
  | 'right-end'
  | 'left-start'
  | 'left-end'
  | undefined

class MenuComponent {
  element: HTMLElement
  options: MenuOptions
  instanceUid: string
  triggerElement: HTMLElement | null = null

  constructor(_element: HTMLElement, options: MenuOptions) {
    this.element = _element
    this.options = Object.assign(defaultMenuOptions, options)
    this.instanceUid = getUniqueIdWithPrefix('menu')
    // this.element.setAttribute('data-kt-menu', 'true')
    this._setTriggerElement()
    this._update()
    DataUtil.set(this.element, 'menu', this)
    return this
  }

  // Set external trigger element
  private _setTriggerElement = () => {
    const target = document.querySelector(
      `[data-kt-menu-target="#${this.element.getAttribute('id')}"`
    )

    if (target) {
      this.triggerElement = target as HTMLElement
    } else if (this.element.closest('[data-kt-menu-trigger]')) {
      this.triggerElement = this.element.closest('[data-kt-menu-trigger]') as HTMLElement
    } else if (
      this.element.parentNode &&
      getElementChild(this.element.parentNode as HTMLElement, '[data-kt-menu-trigger]')
    ) {
      const child = getElementChild(
        this.element.parentNode as HTMLElement,
        '[data-kt-menu-trigger]'
      )
      if (child) {
        this.triggerElement = child
      }
    }

    if (this.triggerElement) {
      DataUtil.set(this.triggerElement, 'menu', this)
    }
  }

  // Test if menu has external trigger element
  private _isTriggerElement = (item: HTMLElement) => {
    return this.triggerElement === item
  }

  // Get item option(through html attributes)
  private _getItemOption = (item: HTMLElement, name: string) => {
    let value: string | JSON | null | boolean = null
    if (item && item.hasAttribute('data-kt-menu-' + name)) {
      const attr = item.getAttribute('data-kt-menu-' + name) || ''
      value = getAttributeValueByBreakpoint(attr)
      if (value !== null && String(value) === 'true') {
        value = true
      } else if (value !== null && String(value) === 'false') {
        value = false
      }
    }
    return value
  }

  // Get item element
  private _getItemElement = (_element: HTMLElement) => {
    // Element is the external trigger element
    if (this._isTriggerElement(_element)) {
      return _element
    }

    // Element has item toggler attribute
    if (_element.hasAttribute('data-kt-menu-trigger')) {
      return _element
    }

    // Element has item DOM reference in it's data storage
    const itemElement = DataUtil.get(_element, 'item')
    if (itemElement) {
      return itemElement
    }

    // Item is parent of element
    const item = _element.closest('.menu-item[data-kt-menu-trigger]')
    if (item) {
      return item
    }

    // Element's parent has item DOM reference in it's data storage
    const sub = _element.closest('.menu-sub')
    if (sub) {
      const subItem = DataUtil.get(sub as HTMLElement, 'item')
      if (subItem) {
        return subItem
      }
    }
  }

  // Get item parent element
  private _getItemParentElement = (item: HTMLElement) => {
    const sub = item.closest('.menu-sub')
    if (!sub) {
      return null
    }

    const subItem = DataUtil.get(sub as HTMLElement, 'item')
    if (subItem) {
      return subItem
    }

    const parentItem = sub.closest('.menu-item[data-kt-menu-trigger]')
    if (sub && parentItem) {
      return parentItem
    }

    return null
  }

  // Get item parent elements
  private _getItemParentElements = (item: HTMLElement) => {
    const parents: Array<Element> = []
    let parent: Element
    let i = 0
    let buffer: HTMLElement = item

    do {
      parent = this._getItemParentElement(buffer)
      if (parent) {
        parents.push(parent)
        buffer = parent as HTMLElement
      }

      i++
    } while (parent !== null && i < 20)

    if (this.triggerElement) {
      parents.unshift(this.triggerElement)
    }

    return parents
  }

  // Prepare popper config for dropdown(see: https://popper.js.org/docs/v2/)
  private _getDropdownPopperConfig = (item: HTMLElement) => {
    // Placement
    const placementOption = this._getItemOption(item, 'placement')
    let placement: PopperPlacement = 'right'
    if (placementOption) {
      placement = placementOption as PopperPlacement
    }

    // Flip
    // const flipValue = this._getItemOption(item, 'flip')
    // const flip = flipValue ? flipValue.toString().split(',') : []

    // Offset
    const offsetValue = this._getItemOption(item, 'offset')
    const offset = offsetValue ? offsetValue.toString().split(',') : []

    // Strategy
    const strategy: 'absolute' | 'fixed' | undefined =
      this._getItemOption(item, 'overflow') === true ? 'absolute' : 'fixed'

    return {
      placement: placement,
      strategy: strategy,
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: offset,
          },
        },
        {
          name: 'preventOverflow',
        },
        {
          name: 'flip',
          options: {
            // altBoundary: true,
            // fallbackPlacements: flip,
            flipVariations: false,
          },
        },
      ],
    }
  }

  // Get item child element
  private _getItemChildElement = (item: HTMLElement) => {
    let selector = item

    const subItem = DataUtil.get(item, 'sub')
    if (subItem) {
      selector = subItem
    }

    if (selector) {
      //element = selector.querySelector('.show.menu-item[data-kt-menu-trigger]');
      const element = selector.querySelector('.menu-item[data-kt-menu-trigger]')
      if (element) {
        return element
      }
    }
    return null
  }

  // Get item child elements
  private _getItemChildElements = (item: HTMLElement) => {
    const children: Array<Element> = []
    let child: Element | null
    let i = 0
    let buffer = item
    do {
      child = this._getItemChildElement(buffer)
      if (child) {
        children.push(child)
        buffer = child as HTMLElement
      }

      i++
    } while (child !== null && i < 20)

    return children
  }

  // Get item sub element
  private _getItemSubElement = (item: HTMLElement) => {
    if (!item) {
      return null
    }

    if (this._isTriggerElement(item)) {
      return this.element
    }

    if (item.classList.contains('menu-sub')) {
      return item
    } else if (DataUtil.has(item, 'sub')) {
      return DataUtil.get(item, 'sub')
    } else {
      return getElementChild(item, '.menu-sub')
    }
  }

  private _getCss = (el: HTMLElement, styleProp: string) => {
    const defaultView = (el.ownerDocument || document).defaultView
    if (!defaultView) {
      return ''
    }

    // sanitize property name to css notation
    // (hyphen separated words eg. font-Size)
    styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase()

    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp)
  }

  // Get item sub type
  private _getItemSubType = (element: HTMLElement) => {
    const sub = this._getItemSubElement(element)
    if (sub && parseInt(this._getCss(sub, 'z-index')) > 0) {
      return 'dropdown'
    } else {
      return 'accordion'
    }
  }

  // Test if item's sub is shown
  private _isItemSubShown = (item: HTMLElement) => {
    let sub = this._getItemSubElement(item)
    if (sub) {
      if (this._getItemSubType(item) === 'dropdown') {
        return sub.classList.contains('show') && sub.hasAttribute('data-popper-placement')
      } else {
        return item.classList.contains('show')
      }
    }

    return false
  }

  // Test if item dropdown is permanent
  private _isItemDropdownPermanent = (item: HTMLElement) => {
    return this._getItemOption(item, 'permanent') === true
  }

  // Test if item's parent is shown
  private _isItemParentShown = (item: HTMLElement) => {
    return getElementParents(item, '.menu-item.show').length > 0
  }

  // Test of it is item sub element
  private _isItemSubElement = (item: HTMLElement) => {
    return item.classList.contains('menu-sub')
  }

  // Test if item has sub
  private _hasItemSub = (item: HTMLElement) => {
    return item.classList.contains('menu-item') && item.hasAttribute('data-kt-menu-trigger')
  }

  // Get link element
  private _getItemLinkElement = (item: HTMLElement) => {
    return getElementChild(item, '.menu-link')
  }

  // Get toggle element
  private _getItemToggleElement = (item: HTMLElement) => {
    if (this.triggerElement) {
      return this.triggerElement
    }

    return this._getItemLinkElement(item)
  }

  // Show item dropdown
  private _showDropdown = (item: HTMLElement) => {
    if (EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.show') === false) {
      return
    }

    // Hide all currently shown dropdowns except current one
    MenuComponent.hideDropdowns(item)

    // const toggle = this._isTriggerElement(item) ? item : this._getItemLinkElement(item);
    const sub = this._getItemSubElement(item)
    const width = this._getItemOption(item, 'width')
    const height = this._getItemOption(item, 'height')

    let zindex = this.options.dropdown.zindex
    const parentZindex = getHighestZindex(item) // update
    // Apply a new z-index if dropdown's toggle element or it's parent has greater z-index // update
    if (parentZindex !== null && parentZindex >= zindex) {
      zindex = parentZindex + 1
    }

    if (zindex) {
      ElementStyleUtil.set(sub, 'z-index', zindex)
    }

    if (width) {
      ElementStyleUtil.set(sub, 'width', width)
    }

    if (height) {
      ElementStyleUtil.set(sub, 'height', height)
    }

    this.initDropdownPopper(item, sub)

    item.classList.add('show')
    item.classList.add('menu-dropdown')
    sub.classList.add('show')

    // Append the sub the the root of the menu
    if (this._getItemOption(item, 'overflow') === true) {
      document.body.appendChild(sub)
      DataUtil.set(item, 'sub', sub)
      DataUtil.set(sub, 'item', item)
      DataUtil.set(sub, 'menu', this)
    } else {
      DataUtil.set(sub, 'item', item)
    }

    EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.shown')
  }

  // Init dropdown popper(new)
  private initDropdownPopper = (item: HTMLElement, sub: HTMLElement) => {
    // Setup popper instance
    let reference
    const attach = this._getItemOption(item, 'attach') as string

    if (attach) {
      if (attach === 'parent') {
        reference = item.parentNode
      } else {
        reference = document.querySelector(attach)
      }
    } else {
      reference = item
    }

    if (reference) {
      const popper = createPopper(
        reference as Element | VirtualElement,
        sub,
        this._getDropdownPopperConfig(item)
      )
      DataUtil.set(item, 'popper', popper)
    }
  }

  // Hide item dropdown
  private _hideDropdown = (item: HTMLElement) => {
    if (EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hide') === false) {
      return
    }

    const sub = this._getItemSubElement(item)
    ElementStyleUtil.set(sub, 'z-index', '')
    ElementStyleUtil.set(sub, 'width', '')
    ElementStyleUtil.set(sub, 'height', '')
    item.classList.remove('show')
    item.classList.remove('menu-dropdown')
    sub.classList.remove('show')

    // Append the sub back to it's parent
    if (this._getItemOption(item, 'overflow') === true) {
      if (item.classList.contains('menu-item')) {
        item.appendChild(sub)
      } else {
        insertAfterElement(this.element, item)
      }

      DataUtil.remove(item, 'sub')
      DataUtil.remove(sub, 'item')
      DataUtil.remove(sub, 'menu')
    }

    if (DataUtil.has(item, 'popper') === true) {
      DataUtil.get(item, 'popper').destroy()
      DataUtil.remove(item, 'popper')
    }

    // Destroy popper(new)
    this.destroyDropdownPopper(item)
    EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hidden')
  }

  // Destroy dropdown popper(new)
  private destroyDropdownPopper = (item: HTMLElement) => {
    if (DataUtil.has(item, 'popper') === true) {
      DataUtil.get(item, 'popper').destroy()
      DataUtil.remove(item, 'popper')
    }

    EventHandlerUtil.trigger(this.element, 'kt.menu.dropdown.hidden')
  }

  private _showAccordion = (item: HTMLElement) => {
    if (EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.show') === false) {
      return
    }

    if (this.options.accordion.expand === false) {
      this._hideAccordions(item)
    }

    if (DataUtil.has(item, 'popper') === true) {
      this._hideDropdown(item)
    }

    item.classList.add('hover') // updateWW
    item.classList.add('showing')

    const subElement = this._getItemSubElement(item)
    if (subElement) {
      const sub = subElement as HTMLElement
      slideDown(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove('showing')
        item.classList.add('show')
        sub.classList.add('show')
        EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.shown')
      })
    }
  }

  private _hideAccordion = (item: HTMLElement) => {
    if (EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.hide') === false) {
      return
    }

    const sub = this._getItemSubElement(item)
    item.classList.add('hiding')

    if (sub) {
      slideUp(sub, this.options.accordion.slideSpeed, () => {
        item.classList.remove('hiding')
        item.classList.remove('show')
        sub.classList.remove('show')
        item.classList.remove('hover') // update
        EventHandlerUtil.trigger(this.element, 'kt.menu.accordion.hidden')
      })
    }
  }

  // Hide all shown accordions of item
  private _hideAccordions = (item: HTMLElement) => {
    const itemsToHide = this.element.querySelectorAll('.show[data-kt-menu-trigger]')
    if (itemsToHide && itemsToHide.length > 0) {
      for (var i = 0, len = itemsToHide.length; i < len; i++) {
        const itemToHide = itemsToHide[i] as HTMLElement

        if (
          this._getItemSubType(itemToHide) === 'accordion' &&
          itemToHide !== item &&
          item.contains(itemToHide) === false &&
          itemToHide.contains(item) === false
        ) {
          this._hideAccordion(itemToHide)
        }
      }
    }
  }

  // Event Handlers
  // Reset item state classes if item sub type changed
  private _reset = (item: HTMLElement) => {
    if (this._hasItemSub(item) === false) {
      return
    }

    const sub = this._getItemSubElement(item)

    // Reset sub state if sub type is changed during the window resize
    if (DataUtil.has(item, 'type') && DataUtil.get(item, 'type') !== this._getItemSubType(item)) {
      // updated
      item.classList.remove('hover')
      item.classList.remove('show')
      item.classList.remove('show')
      if (sub && sub.removeClass) {
        sub.removeClass(sub, 'show')
      }
    } // updated
  }

  // TODO: not done
  private _destroy = () => {}

  // Update all item state classes if item sub type changed
  private _update = () => {
    const items = this.element.querySelectorAll('.menu-item[data-kt-menu-trigger]')
    items.forEach((el) => this._reset(el as HTMLElement))
  }

  // Hide item sub
  private _hide = (item: HTMLElement) => {
    if (!item) {
      return
    }

    if (this._isItemSubShown(item) === false) {
      return
    }

    if (this._getItemSubType(item) === 'dropdown') {
      this._hideDropdown(item)
    } else if (this._getItemSubType(item) === 'accordion') {
      this._hideAccordion(item)
    }
  }

  // Show item sub
  private _show = (item: HTMLElement) => {
    if (!item) {
      return
    }

    if (this._isItemSubShown(item) === true) {
      return
    }

    if (this._getItemSubType(item) === 'dropdown') {
      this._showDropdown(item) // // show current dropdown
    } else if (this._getItemSubType(item) === 'accordion') {
      this._showAccordion(item)
    }

    // Remember last submenu type

    DataUtil.set(item, 'type', this._getItemSubType(item)) // updated
  }

  // Toggle item sub
  private _toggle = (item: HTMLElement) => {
    if (!item) {
      return
    }

    if (this._isItemSubShown(item) === true) {
      this._hide(item)
    } else {
      this._show(item)
    }
  }

  // Mouseout handle
  private _mouseout = (element: HTMLElement, e: MouseEvent) => {
    const item = this._getItemElement(element)
    if (!item) {
      return
    }

    if (this._getItemOption(item, 'trigger') !== 'hover') {
      return
    }

    const timeout = setTimeout(() => {
      if (DataUtil.get(item, 'hover') === '1') {
        this._hide(item)
      }
    }, this.options.dropdown.hoverTimeout)

    DataUtil.set(item, 'hover', '1')
    DataUtil.set(item, 'timeout', timeout)
  }

  // Mouseover handle
  private _mouseover = (element: HTMLElement, e: MouseEvent) => {
    const item = this._getItemElement(element)
    if (!item) {
      return
    }

    if (this._getItemOption(item, 'trigger') !== 'hover') {
      return
    }

    if (DataUtil.get(item, 'hover') === '1') {
      clearTimeout(DataUtil.get(item, 'timeout'))
      DataUtil.remove(item, 'hover')
      DataUtil.remove(item, 'timeout')
    }

    this._show(item)
  }

  // Dismiss handler
  private _dismiss = (element: HTMLElement, e: Event) => {
    const item = this._getItemElement(element)
    const items = this._getItemChildElements(item)
    //if ( item !== null && _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
    const itemSubType = this._getItemSubType(item)
    if (item !== null && itemSubType === 'dropdown') {
      this._hide(item) // hide items dropdown

      // Hide all child elements as well
      if (items.length > 0) {
        for (let i = 0, len = items.length; i < len; i++) {
          //if ( _getItemOption(item, 'trigger') === 'click' &&  _getItemSubType(item) === 'dropdown' ) {
          if (items[i] !== null && this._getItemSubType(items[i] as HTMLElement) === 'dropdown') {
            this._hide(items[i] as HTMLElement)
          }
        }
      }
    }
  }

  // Link handler
  private _link = (element: HTMLElement, e: Event) => {
    if (EventHandlerUtil.trigger(this.element, 'kt.menu.link.click') === false) {
      return
    }

    // Dismiss all shown dropdowns
    MenuComponent.hideDropdowns(undefined)
    EventHandlerUtil.trigger(this.element, 'kt.menu.link.clicked')
  }

  private _click = (element: HTMLElement, e: Event) => {
    e.preventDefault()
    const item = this._getItemElement(element)
    if (this._getItemOption(item, 'trigger') !== 'click') {
      return
    }

    if (this._getItemOption(item, 'toggle') === false) {
      this._show(item)
    } else {
      this._toggle(item)
    }
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public click = (element: HTMLElement, e: Event) => {
    return this._click(element, e)
  }

  public link = (element: HTMLElement, e: Event) => {
    return this._link(element, e)
  }

  public dismiss = (element: HTMLElement, e: Event) => {
    return this._dismiss(element, e)
  }

  public mouseover = (element: HTMLElement, e: Event) => {
    return this._mouseover(element, e as MouseEvent)
  }

  public mouseout = (element: HTMLElement, e: Event) => {
    return this._mouseout(element, e as MouseEvent)
  }

  // General Methods
  public getItemTriggerType = (item: HTMLElement) => {
    return this._getItemOption(item, 'trigger')
  }

  public getItemSubType = (element: HTMLElement) => {
    return this._getItemSubType(element)
  }

  public show = (item: HTMLElement) => {
    return this._show(item)
  }

  public hide = (item: HTMLElement) => {
    return this._hide(item)
  }

  public reset = (item: HTMLElement) => {
    return this._reset(item)
  }

  public update = () => {
    return this._update()
  }

  public getElement = () => {
    return this.element
  }

  public getItemLinkElement = (item: HTMLElement) => {
    return this._getItemLinkElement(item)
  }

  public getItemToggleElement = (item: HTMLElement) => {
    return this._getItemToggleElement(item)
  }

  public getItemSubElement = (item: HTMLElement) => {
    return this._getItemSubElement(item)
  }

  public getItemParentElements = (item: HTMLElement) => {
    return this._getItemParentElements(item)
  }

  public isItemSubShown = (item: HTMLElement) => {
    return this._isItemSubShown(item)
  }

  public isItemParentShown = (item: HTMLElement) => {
    return this._isItemParentShown(item)
  }

  public getTriggerElement = () => {
    return this.triggerElement
  }

  public isItemDropdownPermanent = (item: HTMLElement) => {
    return this._isItemDropdownPermanent(item)
  }

  // Accordion Mode Methods
  public hideAccordions = (item: HTMLElement) => {
    return this._hideAccordions(item)
  }

  // Event API
  public on = (name: string, handler: any) => {
    return EventHandlerUtil.on(this.element, name, handler)
  }

  public one = (name: string, handler: any) => {
    return EventHandlerUtil.one(this.element, name, handler)
  }

  public off = (name: string) => {
    return EventHandlerUtil.off(this.element, name)
  }

  // public static methods
  // Get KTMenu instance by element
  public static getInstance = (element: HTMLElement) => {
    // Element has menu DOM reference in it's DATA storage
    const elementMenu = DataUtil.get(element, 'menu')
    if (elementMenu) {
      return elementMenu
    }

    // Element has .menu parent
    const menu = element.closest('.menu')
    if (menu) {
      const menuData = DataUtil.get(menu as HTMLElement, 'menu')
      if (menuData) {
        return menuData
      }
    }

    // Element has a parent with DOM reference to .menu in it's DATA storage
    if (element.classList.contains('menu-link')) {
      const sub = element.closest('.menu-sub')
      if (sub) {
        const subMenu = DataUtil.get(sub as HTMLElement, 'menu')
        if (subMenu) {
          return subMenu
        }
      }
    }

    return null
  }

  // Hide all dropdowns and skip one if provided
  public static hideDropdowns = (skip: HTMLElement | undefined) => {
    const items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]')

    if (items && items.length > 0) {
      for (let i = 0, len = items.length; i < len; i++) {
        const item = items[i]
        const menu = MenuComponent.getInstance(item as HTMLElement)

        if (menu && menu.getItemSubType(item) === 'dropdown') {
          if (skip) {
            if (
              menu.getItemSubElement(item).contains(skip) === false &&
              item.contains(skip) === false &&
              item !== skip
            ) {
              menu.hide(item)
            }
          } else {
            menu.hide(item)
          }
        }
      }
    }
  }

  public static updateDropdowns = () => {
    const items = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]')
    if (items && items.length > 0) {
      for (var i = 0, len = items.length; i < len; i++) {
        var item = items[i]

        if (DataUtil.has(item as HTMLElement, 'popper')) {
          DataUtil.get(item as HTMLElement, 'popper').forceUpdate()
        }
      }
    }
  }

  // Global handlers
  public static createInstances = (selector: string) => {
    // Initialize menus
    document.querySelectorAll(selector).forEach((el) => {
      const menuItem = el as HTMLElement
      let menuInstance = MenuComponent.getInstance(menuItem)
      if (!menuInstance) {
        menuInstance = new MenuComponent(el as HTMLElement, defaultMenuOptions)
      }
    })
  }

  public static initGlobalHandlers = () => {
    // Dropdown handler
    document.addEventListener('click', (e) => {
      const menuItems = document.querySelectorAll('.show.menu-dropdown[data-kt-menu-trigger]')
      if (menuItems && menuItems.length > 0) {
        for (let i = 0; i < menuItems.length; i++) {
          const item = menuItems[i] as HTMLElement
          const menuObj = MenuComponent.getInstance(item) as MenuComponent
          if (menuObj && menuObj.getItemSubType(item) === 'dropdown') {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const menu = menuObj.getElement()
            const sub = menuObj.getItemSubElement(item) as HTMLElement
            if (item === e.target || item.contains(e.target as HTMLElement)) {
              continue
            }

            if (sub && (sub === e.target || sub.contains(e.target as HTMLElement))) {
              continue
            }
            menuObj.hide(item)
          }
        }
      }
    })

    // Sub toggle handler
    DOMEventHandlerUtil.on(
      document.body,
      '.menu-item[data-kt-menu-trigger] > .menu-link, [data-kt-menu-trigger]:not(.menu-item):not([data-kt-menu-trigger="auto"])',
      'click',
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent
        if (menu) {
          return menu.click(this, e)
        }
      }
    )

    // // Link handler
    DOMEventHandlerUtil.on(
      document.body,
      '.menu-item:not([data-kt-menu-trigger]) > .menu-link',
      'click',
      function (this: HTMLElement, e: Event) {
        e.stopPropagation()
        const menu = MenuComponent.getInstance(this)
        if (menu && menu.link) {
          return menu.link(this, e)
        }
      }
    )

    // Dismiss handler
    DOMEventHandlerUtil.on(
      document.body,
      '[data-kt-menu-dismiss="true"]',
      'click',
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent
        if (menu) {
          return menu.dismiss(this, e)
        }
      }
    )

    // Mouseover handler
    DOMEventHandlerUtil.on(
      document.body,
      '[data-kt-menu-trigger], .menu-sub',
      'mouseover',
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent
        if (menu && menu.getItemSubType(this) === 'dropdown') {
          return menu.mouseover(this, e)
        }
      }
    )

    // Mouseout handler
    DOMEventHandlerUtil.on(
      document.body,
      '[data-kt-menu-trigger], .menu-sub',
      'mouseout',
      function (this: HTMLElement, e: Event) {
        const menu = MenuComponent.getInstance(this) as MenuComponent
        if (menu && menu.getItemSubType(this) === 'dropdown') {
          return menu.mouseout(this, e)
        }
      }
    )

    // Resize handler
    window.addEventListener('resize', () => {
      let timer
      throttle(
        timer,
        () => {
          // Locate and update Drawer instances on window resize
          const elements = document.querySelectorAll('[data-kt-menu="true"]')
          elements.forEach((el) => {
            const menu = MenuComponent.getInstance(el as HTMLElement)
            if (menu) {
              menu.update()
            }
          })
        },
        200
      )
    })
  }

  public static bootstrap = () => {
    MenuComponent.initGlobalHandlers()
    MenuComponent.createInstances('[data-kt-menu="true"]')
  }

  public static reinitialization = () => {
    MenuComponent.createInstances('[data-kt-menu="true"]')
  }

  public static createInsance = (
    selector: string,
    options: MenuOptions = defaultMenuOptions
  ): MenuComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let menu = MenuComponent.getInstance(item)
    if (!menu) {
      menu = new MenuComponent(item, options)
    }
    return menu
  }
}

export {MenuComponent, defaultMenuOptions}
