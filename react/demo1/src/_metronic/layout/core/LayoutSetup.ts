import {
  IAside,
  IContent,
  IFooter,
  IHeader,
  IToolbar,
  ILayout,
  ILayoutCSSClasses,
  ILayoutHTMLAttributes,
  ILayoutCSSVariables,
  IPageTitle,
} from './LayoutModels'
import {DefaultLayoutConfig} from './DefaultLayoutConfig'

const LAYOUT_CONFIG_KEY = process.env.REACT_APP_BASE_LAYOUT_CONFIG_KEY || 'LayoutConfig'

export function getLayout(): ILayout {
  const ls = localStorage.getItem(LAYOUT_CONFIG_KEY)
  if (ls) {
    try {
      return JSON.parse(ls) as ILayout
    } catch (er) {
      console.error(er)
    }
  }
  return DefaultLayoutConfig
}

function setLayout(config: ILayout): void {
  try {
    localStorage.setItem(LAYOUT_CONFIG_KEY, JSON.stringify(config))
  } catch (er) {
    console.error(er)
  }
}

export function getEmptyCssClasses() {
  return {
    header: [],
    headerContainer: [],
    headerMobile: [],
    headerMenu: [],
    aside: [],
    asideMenu: [],
    asideToggle: [],
    toolbar: [],
    toolbarContainer: [],
    content: [],
    contentContainer: [],
    footerContainer: [],
    sidebar: [],
    pageTitle: [],
  }
}

export function getEmptyHTMLAttributes() {
  return {
    asideMenu: new Map(),
    headerMobile: new Map(),
    headerMenu: new Map(),
    headerContainer: new Map(),
    pageTitle: new Map(),
  }
}

export function getEmptyCSSVariables() {
  return {
    body: new Map(),
  }
}

export class LayoutSetup {
  public static isLoaded: boolean = false
  public static config: ILayout = getLayout()
  public static classes: ILayoutCSSClasses = getEmptyCssClasses()
  public static attributes: ILayoutHTMLAttributes = getEmptyHTMLAttributes()
  public static cssVariables: ILayoutCSSVariables = getEmptyCSSVariables()

  private static initCSSClasses(): void {
    LayoutSetup.classes = getEmptyCssClasses()
  }

  private static initHTMLAttributes(): void {
    LayoutSetup.attributes = Object.assign({}, getEmptyHTMLAttributes())
  }

  private static initCSSVariables(): void {
    LayoutSetup.cssVariables = getEmptyCSSVariables()
  }

  private static initLayout(config: ILayout): void {
    Array.from(document.body.attributes).forEach((attr) => {
      document.body.removeAttribute(attr.name)
    })
    document.body.setAttribute('style', '')
    document.body.setAttribute('id', 'kt_body')
    if (config.main?.body?.backgroundImage) {
      document.body.style.backgroundImage = `url('${config.main.body.backgroundImage}')`
    }

    if (config.main?.body?.class) {
      document.body.classList.add(config.main.body.class)
    }

    // if (config.loader.display) {
    //   document.body.classList.add('page-loading')
    //   document.body.classList.add('page-loading-enabled')
    // }
  }

  private static initHeader(config: IHeader): void {
    LayoutSetup.classes.headerContainer.push(
      config.width === 'fluid' ? 'container-fluid' : 'container'
    )

    if (config.fixed.desktop) {
      document.body.classList.add('header-fixed')
    }

    if (config.fixed.tabletAndMobile) {
      document.body.classList.add('header-tablet-and-mobile-fixed')
    }
  }

  private static initToolbar(config: IToolbar): void {
    if (!config.display) {
      return
    }

    document.body.classList.add('toolbar-enabled')
    LayoutSetup.classes.toolbarContainer.push(
      config.width === 'fluid' ? 'container-fluid' : 'container'
    )

    if (config.fixed.desktop) {
      document.body.classList.add('toolbar-fixed')
    }

    if (config.fixed.tabletAndMobileMode) {
      document.body.classList.add('toolbar-tablet-and-mobile-fixed')
    }

    // Height setup
    const type = config.layout
    const typeOptions = config.layouts[type]
    if (typeOptions) {
      let bodyStyles: string = ''
      if (typeOptions.height) {
        bodyStyles += ` --kt-toolbar-height: ${typeOptions.height};`
      }

      if (typeOptions.heightAndTabletMobileMode) {
        bodyStyles += ` --kt-toolbar-height-tablet-and-mobile: ${typeOptions.heightAndTabletMobileMode};`
      }
      document.body.setAttribute('style', bodyStyles)
    }
  }

  private static initPageTitle(config: IPageTitle): void {
    if (!config.display) {
      return
    }

    if (config.direction === 'column') {
      this.classes.pageTitle.push('flex-column')
      this.classes.pageTitle.push('align-items-start')
    } else {
      this.classes.pageTitle.push('align-items-center')
      this.classes.pageTitle.push('flex-wrap')
    }
    this.classes.pageTitle.push('me-3')

    if (config.responsive) {
      this.classes.pageTitle.push('mb-5')
      this.classes.pageTitle.push('mb-lg-0')

      LayoutSetup.attributes.pageTitle.set('data-kt-swapper', true)
      LayoutSetup.attributes.pageTitle.set('data-kt-swapper-mode', 'prepend')
      LayoutSetup.attributes.pageTitle.set(
        'data-kt-swapper-parent',
        `{ default: '#kt_content_container', '${config.responsiveBreakpoint}': '${config.responsiveTarget}'}`
      )
    }
  }

  private static initContent(config: IContent): void {
    LayoutSetup.classes.contentContainer.push(
      config.width === 'fluid' ? 'container-fluid' : 'container'
    )
    // if (Theme::getOption('layout', 'content/container-class')) {
    // 	Theme::addHtmlClass('content-container', Theme::getOption('layout', 'content/container-class'));
    // }
  }

  private static initAside(config: IAside): void {
    // Check if aside is displayed
    if (!config.display) {
      return
    }

    // Enable Aside
    document.body.classList.add('aside-enabled')
    LayoutSetup.classes.aside.push(`aside-${config.theme}`)

    // Fixed Aside
    if (config.fixed) {
      document.body.classList.add('aside-fixed')
    }

    // Default minimized
    if (config.minimized) {
      document.body.setAttribute('data-kt-aside-minimize', 'on')
    }

    // Hoverable on minimize
    if (config.hoverable) {
      LayoutSetup.classes.aside.push('aside-hoverable')
    }
  }

  private static initAsideMenu(config: IAside): void {
    // if (Theme::getOption('layout', 'aside/menu') === 'documentation') {
    // 	self::$menu = new Menu( Theme::getOption('menu', 'documentation'), Theme::getPagePath() );
    // } else {
    // 	self::$menu = new Menu( Theme::getOption('menu', 'main'), Theme::getPagePath() );
    // }
    // if (Theme::getOption('layout', 'aside/menu-icons-display') === false) {
    // 	self::$menu->displayIcons(false);
    // }
    // self::$menu->setIconType(Theme::getOption('layout', 'aside/menu-icon'));
  }

  // private static initSidebar(sidebarConfig: ISidebarConfig): void {
  //   // / Set Sidebar enabled class
  //   if (sidebarConfig.display) {
  //     document.body.classList.add('sidebar-enabled')
  //   } else {
  //     return
  //   }

  //   // Set Sidebar shown status
  //   if (sidebarConfig.shown) {
  //     document.body.setAttribute('data-sidebar', 'on')
  //   }

  //   // Set Sidebar background color class
  //   ThemeSetup.classes.sidebar.push(sidebarConfig.bgColor)
  // }

  private static initFooter(config: IFooter): void {
    LayoutSetup.classes.footerContainer.push(`container${config.width === 'fluid' ? '-fluid' : ''}`)
  }

  private static initConfig(config: ILayout): void {
    if (config.main?.darkSkinEnabled) {
      document.body.classList.add('dark-skin')
    }

    // Init layout
    LayoutSetup.initLayout(config)
    if (config.main?.type !== 'default') {
      return
    }

    LayoutSetup.initHeader(config.header)
    LayoutSetup.initPageTitle(config.pageTitle as IPageTitle)
    LayoutSetup.initToolbar(config.toolbar)
    LayoutSetup.initContent(config.content)
    LayoutSetup.initAside(config.aside)
    LayoutSetup.initFooter(config.footer)
    LayoutSetup.initAsideMenu(config.aside)
  }

  public static updatePartialConfig(fieldsToUpdate: Partial<ILayout>): ILayout {
    const config = LayoutSetup.config
    const updatedConfig = {...config, ...fieldsToUpdate}
    LayoutSetup.initCSSClasses()
    LayoutSetup.initCSSVariables()
    LayoutSetup.initHTMLAttributes()
    LayoutSetup.isLoaded = false
    LayoutSetup.config = updatedConfig
    LayoutSetup.initConfig(Object.assign({}, updatedConfig))
    LayoutSetup.isLoaded = true // remove loading there
    return updatedConfig
  }

  public static setConfig(config: ILayout): void {
    setLayout(config)
  }

  public static bootstrap = (() => {
    LayoutSetup.updatePartialConfig(LayoutSetup.config)
  })()
}
