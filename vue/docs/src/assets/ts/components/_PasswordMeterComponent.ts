/* eslint-disable array-callback-return */
/* eslint-disable no-useless-escape */
import {DataUtil} from '../_utils/index'

export interface IPasswordMeterOptions {
  minLength: number
  checkUppercase: boolean
  checkLowercase: boolean
  checkDigit: boolean
  checkChar: boolean
  scoreHighlightClass: string
}

export interface IPasswordMeterQueries {
  componentName: string
  instanseQuery: string
  inputQuery: string
  visibilityQuery: string
  highlightQuery: string
}

const defaultPasswordMeterOptions = {
  minLength: 8,
  checkUppercase: true,
  checkLowercase: true,
  checkDigit: true,
  checkChar: true,
  scoreHighlightClass: 'active',
}

const defaultPasswordMeterQueires: IPasswordMeterQueries = {
  componentName: 'password-meter',
  instanseQuery: '[data-kt-password-meter]',
  inputQuery: 'input[type]',
  visibilityQuery: '[data-kt-password-meter-control="visibility"]',
  highlightQuery: '[data-kt-password-meter-control="highlight"]',
}

class PasswordMeterComponent {
  element: HTMLElement
  inputElement: HTMLInputElement | null
  visibilityElement: HTMLElement | null
  highlightElement: HTMLElement | null
  options: IPasswordMeterOptions
  queries: IPasswordMeterQueries
  score: number
  checkSteps: number

  constructor(
    _element: HTMLElement,
    _options: IPasswordMeterOptions,
    _queries: IPasswordMeterQueries
  ) {
    this.element = _element
    this.options = Object.assign(defaultPasswordMeterOptions, _options)
    this.queries = _queries
    this.score = 0
    this.checkSteps = 5

    // Elements
    this.inputElement = this.element.querySelector(this.queries.inputQuery)
    this.visibilityElement = this.element.querySelector(this.queries.visibilityQuery)
    this.highlightElement = this.element.querySelector(this.queries.highlightQuery)

    // Event Handlers
    this.handlers()

    DataUtil.set(this.element, this.queries.componentName, this)
  }

  private handlers(): void {
    if (this.inputElement) {
      this.inputElement.addEventListener('input', () => {
        this.check()
      })
    }

    if (this.visibilityElement) {
      this.visibilityElement.addEventListener('click', () => {
        this.visitbility()
      })
    }
  }

  private visitbility() {
    if (this.visibilityElement && this.inputElement) {
      const visibleIcon = this.visibilityElement.querySelector(
        'i:not(.d-none), .svg-icon:not(.d-none)'
      )

      const hiddenIcon = this.visibilityElement.querySelector('i.d-none, .svg-icon.d-none')

      const typeAttr = this.inputElement.getAttribute('type') || ''

      if (typeAttr === 'password') {
        this.inputElement.setAttribute('type', 'text')
      } else {
        this.inputElement.setAttribute('type', 'password')
      }

      visibleIcon?.classList.add('d-none')
      hiddenIcon?.classList.remove('d-none')

      this.inputElement.focus()
    }
  }

  private checkScore(): number {
    return 0
  }

  private checkLength(): boolean {
    if (this.inputElement) {
      return this.inputElement.value.length >= this.options.minLength // 20 score
    }

    return false
  }

  private checkLowerCase(): boolean {
    const val = this.inputElement ? this.inputElement.value : ''
    return /[a-z]/.test(val) // 20 score
  }

  private checkUppercase(): boolean {
    const val = this.inputElement ? this.inputElement.value : ''
    return /[A-Z]/.test(val) // 20 score
  }

  private checkDigit(): boolean {
    const val = this.inputElement ? this.inputElement.value : ''
    return /[0-9]/.test(val) // 20 score
  }

  private checkChar(): boolean {
    const val = this.inputElement ? this.inputElement.value : ''
    return /[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/g.test(val) // 20 score
  }

  private getCheckScore(): number {
    let count = 1
    if (this.options.checkUppercase) {
      count++
    }

    if (this.options.checkLowercase) {
      count++
    }

    if (this.options.checkDigit) {
      count++
    }

    if (this.options.checkChar) {
      count++
    }

    this.checkSteps = count
    return 100 / this.checkSteps
  }

  private highlight() {
    const items = this.highlightElement
      ? [].slice.call(this.highlightElement.querySelectorAll('div'))
      : []
    const total = items.length
    let index = 0
    const checkScore = this.getCheckScore()
    const score = this.getScore()

    items.map((item: HTMLElement) => {
      index++
      if (checkScore * index * (this.checkSteps / total) <= score) {
        item.classList.add('active')
      } else {
        item.classList.remove('active')
      }
    })
  }

  ///////////////////////
  // ** Public API  ** //
  ///////////////////////
  public reset = () => {
    this.score = 0
    this.highlight()
  }

  public getScore() {
    return this.score
  }

  public check() {
    let score = 0
    const checkScore = this.checkScore()
    if (this.checkLength()) {
      score = score + checkScore
    }

    if (this.options.checkUppercase && this.checkLowerCase()) {
      score = score + checkScore
    }

    if (this.options.checkLowercase && this.checkUppercase()) {
      score = score + checkScore
    }

    if (this.options.checkDigit && this.checkDigit()) {
      score = score + checkScore
    }

    if (this.options.checkChar && this.checkChar()) {
      score = score + checkScore
    }

    this.score = score
    this.highlight()
  }

  // Static methods
  public static getInstance = (
    el: HTMLElement,
    componentName: string = defaultPasswordMeterQueires.componentName
  ) => {
    const passwordMeter = DataUtil.get(el, componentName)
    if (passwordMeter) {
      return passwordMeter
    }

    return null
  }

  public static createInstances = (
    selector: string = defaultPasswordMeterQueires.instanseQuery,
    options: IPasswordMeterOptions = defaultPasswordMeterOptions,
    queries: IPasswordMeterQueries = defaultPasswordMeterQueires
  ) => {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((el) => {
      const item = el as HTMLElement
      let passwordMeter = PasswordMeterComponent.getInstance(item)
      if (!passwordMeter) {
        passwordMeter = new PasswordMeterComponent(item, options, queries)
      }
    })
  }

  public static createInsance = (
    selector: string = defaultPasswordMeterQueires.instanseQuery,
    options: IPasswordMeterOptions = defaultPasswordMeterOptions,
    queries: IPasswordMeterQueries = defaultPasswordMeterQueires
  ): PasswordMeterComponent | undefined => {
    const element = document.body.querySelector(selector)
    if (!element) {
      return
    }
    const item = element as HTMLElement
    let passwordMeter = PasswordMeterComponent.getInstance(item)
    if (!passwordMeter) {
      passwordMeter = new PasswordMeterComponent(item, options, queries)
    }
    return passwordMeter
  }

  public static bootstrap = (selector: string = defaultPasswordMeterQueires.instanseQuery) => {
    PasswordMeterComponent.createInstances(selector)
  }

  public static reinitialization = (
    selector: string = defaultPasswordMeterQueires.instanseQuery
  ) => {
    PasswordMeterComponent.createInstances(selector)
  }
}
export {PasswordMeterComponent, defaultPasswordMeterOptions, defaultPasswordMeterQueires}
