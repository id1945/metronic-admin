// import { EventHandlerUtil, DataUtil } from "../_utils/index";

// interface IDialerOptions {
//   min?: number;
//   max?: number;
//   step: number;
//   decimals: number;
//   prefix: string;
//   suffix: string;
// }

// interface IDialerQueries {
//   componentName: string;
//   instanseQuery: string;
//   attrQuery: string;
//   incQuery: string;
//   decQuery: string;
//   inputQuery: string;
// }

// const defaultDialerOptions = {
//   step: 1,
//   decimals: 0,
//   prefix: "",
//   suffix: "",
// };

// const defaultDialerQueires: IDialerQueries = {
//   componentName: "dialer",
//   instanseQuery: '[data-kt-dialer="true"]',
//   attrQuery: "data-kt-dialer-",
//   incQuery: '[data-kt-dialer-control="increase"]',
//   decQuery: '[data-kt-dialer-control="decrease"]',
//   inputQuery: "input[type]",
// };

// class DialerComponent {
//   element: HTMLElement;
//   incElement: HTMLElement | null;
//   decElement: HTMLElement | null;
//   inputElement: HTMLInputElement | null;
//   options: IDialerOptions;
//   queries: IDialerQueries;
//   value: number | unknown = 0;

//   constructor(
//     _element: HTMLElement,
//     _options: IDialerOptions,
//     _queries: IDialerQueries
//   ) {
//     this.element = _element;
//     this.options = Object.assign(defaultDialerOptions, _options);
//     this.queries = _queries;

//     // Elements
//     this.incElement = this.element.querySelector(this.queries.incQuery);
//     this.decElement = this.element.querySelector(this.queries.decQuery);
//     this.inputElement = this.element.querySelector(this.queries.inputQuery);

//     // Set values
//     const decimals = this.getOption("decimals");
//     if (decimals) {
//       this.options.decimals = parseInt(decimals);
//     }

//     const prefix = this.getOption("prefix");
//     if (prefix) {
//       this.options.prefix = prefix;
//     }

//     const suffix = this.getOption("suffix");
//     if (suffix) {
//       this.options.suffix = suffix;
//     }

//     const step = this.getOption("step");
//     if (step) {
//       this.options.step = parseFloat(step);
//     }

//     const min = this.getOption("min");
//     if (min) {
//       this.options.min = parseFloat(min);
//     }

//     const max = this.getOption("max");
//     if (max) {
//       this.options.max = parseFloat(max);
//     }

//     if (this.inputElement) {
//       this.value = parseFloat(this.inputElement.value.replace(/[^\d.]/g, ""));
//     }

//     this.setValue();

//     // Event Handlers
//     this.handlers();

//     DataUtil.set(this.element, this.queries.componentName, this);
//   }

//   private getOption(optionName: string): string | null {
//     return this.element.getAttribute(`${this.queries.attrQuery}${optionName}`);
//   }

//   private setValue(): void {
//     // Trigger "after.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.change");

//     if (this.inputElement) {
//       this.value = parseFloat(this.inputElement.value.replace(/[^\d.]/g, ""));
//     }
//     if (+this.value < this.options.min) {
//       this.value = this.options.min;
//     }

//     if (this.value > this.options.max) {
//       this.value = this.options.max;
//     }

//     this.inputElement.value = this.format(this.value);

//     // Event Handlers

//     // Trigger "after.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.changed");
//   }

//   private format(val: number | undefined): string {
//     const valueForFormation: string =
//       typeof val === "number" ? val.toString() : "";
//     const formattedValue: string = parseFloat(valueForFormation).toFixed(
//       this.options.decimals
//     );
//     return `${this.options.prefix}${formattedValue}${this.options.suffix}`;
//   }

//   private handlers(): void {
//     // el.addEventListener(type, handler);
//     this.incElement.addEventListener("click", (e) => {
//       e.preventDefault();
//       this.increase(e);
//     });

//     this.decElement.addEventListener("click", (e) => {
//       e.preventDefault();
//       this.decrease(e);
//     });

//     this.inputElement.addEventListener("change", (e) => {
//       e.preventDefault();
//       this.setValue();
//     });
//   }

//   ///////////////////////
//   // ** Public API  ** //
//   ///////////////////////
//   public increase(e: Event) {
//     // Trigger "after.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.increase", e);

//     this.inputElement.value = `${this.value + this.options.step}`;
//     this.setValue();

//     // Trigger "before.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.increased", e);

//     return this;
//   }

//   public decrease(e: Event) {
//     // Trigger "after.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.decrease", e);

//     this.inputElement.value = `${this.value - this.options.step}`;
//     this.setValue();

//     // Trigger "before.dialer" event
//     EventHandlerUtil.trigger(this.element, "kt.dialer.decreased", e);

//     return this;
//   }

//   public getElement(): HTMLElement {
//     return this.element;
//   }

//   // Event API
//   public on = (name: string, handler: Function) => {
//     return EventHandlerUtil.on(this.element, name, handler);
//   };

//   public one = (name: string, handler: Function) => {
//     return EventHandlerUtil.one(this.element, name, handler);
//   };

//   public off = (name: string) => {
//     return EventHandlerUtil.off(this.element, name);
//   };

//   public trigger = (name: string, event: Event) => {
//     return EventHandlerUtil.trigger(this.element, name, event);
//   };

//   // Static methods
//   public static getInstance = (
//     el: HTMLElement,
//     componentName: string = defaultDialerQueires.componentName
//   ) => {
//     const dialer = DataUtil.get(el, componentName);
//     if (dialer) {
//       return dialer;
//     }

//     return null;
//   };

//   public static createInstances = (
//     selector: string = defaultDialerQueires.instanseQuery,
//     options: IDialerOptions = defaultDialerOptions,
//     queries: IDialerQueries = defaultDialerQueires
//   ) => {
//     const elements = document.body.querySelectorAll(selector);
//     elements.forEach((el) => {
//       const item = el as HTMLElement;
//       let dialer = DialerComponent.getInstance(item);
//       if (!dialer) {
//         dialer = new DialerComponent(item, options, queries);
//       }
//     });
//   };

//   public static createInsance = (
//     selector: string = defaultDialerQueires.instanseQuery,
//     options: IDialerOptions = defaultDialerOptions,
//     queries: IDialerQueries = defaultDialerQueires
//   ): DialerComponent | undefined => {
//     const element = document.body.querySelector(selector);
//     if (!element) {
//       return;
//     }
//     const item = element as HTMLElement;
//     let dialer = DialerComponent.getInstance(item);
//     if (!dialer) {
//       dialer = new DialerComponent(item, options, queries);
//     }
//     return dialer;
//   };

//   public static bootstrap = (
//     selector: string = defaultDialerQueires.instanseQuery
//   ) => {
//     DialerComponent.createInstances(selector);
//   };

//   public static reinitialization = (
//     selector: string = defaultDialerQueires.instanseQuery
//   ) => {
//     DialerComponent.createInstances(selector);
//   };
// }
// export {
//   IDialerOptions,
//   IDialerQueries,
//   DialerComponent,
//   defaultDialerOptions,
//   defaultDialerQueires,
// };
