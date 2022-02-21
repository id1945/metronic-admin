import {
  getElementIndex,
  getUniqueIdWithPrefix,
  ElementAnimateUtil,
  EventHandlerUtil,
  DataUtil,
  DOMEventHandlerUtil,
  ElementStyleUtil,
} from '../_utils/index'

export interface IStepperOptions {
  startIndex: number
  animation: boolean
  animationSpeed: string
  animationNextClass: string
  animationPreviousClass: string
}

const defaultStepperOptions: IStepperOptions = {
  startIndex: 1,
  animation: false,
  animationSpeed: '0.3s',
  animationNextClass: 'animate__animated animate__slideInRight animate__fast',
  animationPreviousClass: 'animate__animated animate__slideInLeft animate__fast',
}

class StepperComponent {
  element: HTMLElement
  options: IStepperOptions
  instanceUid: string
  steps: NodeListOf<HTMLElement>
  btnNext: HTMLElement | null
  btnPrev: HTMLElement | null
  btnSubmit: HTMLElement | null
  totatStepsNumber: number = 0
  passedStepIndex: number = 0
  currentStepIndex: number = 1

  constructor(_element: HTMLElement, options: IStepperOptions) {
    this.element = _element
    this.options = Object.assign(defaultStepperOptions, options)
    this.instanceUid = getUniqueIdWithPrefix('stepper')

    // Elements
    this.steps = this.element.querySelectorAll('[data-kt-stepper-element="nav"]')
    this.btnNext = this.element.querySelector('[data-kt-stepper-action="next"]')
    this.btnPrev = this.element.querySelector('[data-kt-stepper-action="previous"]')
    this.btnSubmit = this.element.querySelector('[data-kt-stepper-action="submit"]')

    // Variables
    this.totatStepsNumber = this.steps?.length | 0
    this.passedStepIndex = 0
    this.currentStepIndex = 1

    // Set Current Step
    if (this.options.startIndex > 1) {
      this._goTo(this.options.startIndex)
    }

    // Event Handlers
    this.initHandlers()

    // Bind Instance
    DataUtil.set(this.element, 'stepper', this)
  }

  private _goTo = (index: number) => {
    EventHandlerUtil.trigger(this.element, 'kt.stepper.change')
    // Skip if this step is already shown
    if (index === this.currentStepIndex || index > this.totatStepsNumber || index < 0) {
      return
    }

    // Validate step number
    index = parseInt(index.toString())
    // Set current step
    this.passedStepIndex = this.currentStepIndex
    this.currentStepIndex = index

    // Refresh elements
    this.refreshUI()

    EventHandlerUtil.trigger(this.element, 'kt.stepper.changed')
  }

  private initHandlers = () => {
    this.btnNext?.addEventListener('click', (e: Event) => {
      e.preventDefault()

      EventHandlerUtil.trigger(this.element, 'kt.stepper.next', e)
    })

    this.btnPrev?.addEventListener('click', (e: Event) => {
      e.preventDefault()

      EventHandlerUtil.trigger(this.element, 'kt.stepper.previous', e)
    })

    DOMEventHandlerUtil.on(this.element, '[data-kt-stepper-action="step"]', 'click', (e: Event) => {
      e.preventDefault()

      if (this.steps && this.steps.length > 0) {
        for (let i = 0; i < this.steps.length; i++) {
          if ((this.steps[i] as HTMLElement) === this.element) {
            let index = i + 1

            const stepDirection = this._getStepDirection(index)
            EventHandlerUtil.trigger(this.element, `stepper.${stepDirection}`, e)
            return
          }
        }
      }
    })
  }

  private _getStepDirection = (index: number) => {
    return index > this.currentStepIndex ? 'next' : 'previous'
  }

  private getStepContent = (index: number) => {
    const content = this.element.querySelectorAll('[data-kt-stepper-element="content"]')
    if (!content) {
      return false
    }

    if (content[index - 1]) {
      return content[index - 1]
    }

    return false
  }

  private getLastStepIndex = () => {
    return this.totatStepsNumber
  }

  private getTotalStepsNumber = () => {
    return this.totatStepsNumber
  }

  private refreshUI = () => {
    let state = ''

    if (this.isLastStep()) {
      state = 'last'
    } else if (this.isFirstStep()) {
      state = 'first'
    } else {
      state = 'between'
    }

    // Set state class
    this.element.classList.remove('last')
    this.element.classList.remove('first')
    this.element.classList.remove('between')

    this.element.classList.add(state)

    // Step Items
    const elements = this.element.querySelectorAll(
      '[data-kt-stepper-element="nav"], [data-kt-stepper-element="content"], [data-kt-stepper-element="info"]'
    )

    if (!elements || elements.length <= 0) {
      return
    }

    for (var i = 0, len = elements.length; i < len; i++) {
      var element = elements[i] as HTMLElement
      var index = getElementIndex(element) + 1

      element.classList.remove('current')
      element.classList.remove('completed')
      element.classList.remove('pending')

      if (index === this.currentStepIndex) {
        element.classList.add('current')

        if (
          this.options.animation !== false &&
          element.getAttribute('data-kt-stepper-element') === 'content'
        ) {
          ElementStyleUtil.set(element, 'animationDuration', this.options.animationSpeed)

          const animation =
            this._getStepDirection(this.passedStepIndex) === 'previous'
              ? this.options.animationPreviousClass
              : this.options.animationNextClass
          ElementAnimateUtil.animateClass(element, animation)
        }
      } else {
        if (index < this.currentStepIndex) {
          element.classList.add('completed')
        } else {
          element.classList.add('pending')
        }
      }
    }
  }

  private isLastStep = () => {
    return this.currentStepIndex === this.totatStepsNumber
  }

  private isFirstStep = () => {
    return this.currentStepIndex === 1
  }

  private isBetweenStep = () => {
    return this.isLastStep() === false && this.isFirstStep() === false
  }

  //   ///////////////////////
  //   // ** Public API  ** //
  //   ///////////////////////

  //   // Plugin API
  public goto = (index: number) => {
    return this._goTo(index)
  }

  public goNext = () => {
    return this.goto(this.getNextStepIndex())
  }

  public goPrev = () => {
    return this.goto(this.getPrevStepIndex())
  }

  public goFirst = () => {
    return this.goto(1)
  }

  public goLast = () => {
    return this.goto(this.getLastStepIndex())
  }

  public getCurrentStepIndex = () => {
    return this.currentStepIndex
  }

  public getNextStepIndex = () => {
    if (this.totatStepsNumber >= this.currentStepIndex + 1) {
      return this.currentStepIndex + 1
    } else {
      return this.totatStepsNumber
    }
  }

  public getPassedStepIndex = () => {
    return this.passedStepIndex
  }

  public getPrevStepIndex = () => {
    if (this.currentStepIndex - 1 > 1) {
      return this.currentStepIndex - 1
    } else {
      return 1
    }
  }

  public getElement = (index: number) => {
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

  public destroy = () => {
    console.log('destroy stepper')
  }

  public trigger = (name: string, event: Event) => {
    return EventHandlerUtil.trigger(this.element, name, event)
  }

  // Static methods
  public static hasInstace(element: HTMLElement): boolean {
    return DataUtil.has(element, 'stepper')
  }

  public static getInstance(element: HTMLElement): StepperComponent | null {
    if (element !== null && StepperComponent.hasInstace(element)) {
      return DataUtil.get(element, 'stepper')
    }
    return null
  }

  // Create Instances
  public static createInstances(selector: string): void {
    const elements = document.body.querySelectorAll(selector)
    elements.forEach((element) => {
      const item = element as HTMLElement
      let stepper = StepperComponent.getInstance(item)
      if (!stepper) {
        stepper = new StepperComponent(item, defaultStepperOptions)
      }
    })
  }

  public static createInsance = (
    element: HTMLElement,
    options: IStepperOptions = defaultStepperOptions
  ): StepperComponent | null => {
    if (!element) {
      return null
    }
    let stepper = StepperComponent.getInstance(element)
    if (!stepper) {
      stepper = new StepperComponent(element, options)
    }
    return stepper
  }

  public static bootstrap(attr: string = '[data-kt-stepper]') {
    StepperComponent.createInstances(attr)
  }
}

export {StepperComponent, defaultStepperOptions}
