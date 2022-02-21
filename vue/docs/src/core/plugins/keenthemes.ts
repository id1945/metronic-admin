import {
  MenuComponent,
  ScrollTopComponent,
  StickyComponent,
  ToggleComponent,
} from "@/assets/ts/components";

/**
 * Initialize KeenThemes custom components
 */
setTimeout(() => {
  ToggleComponent.bootstrap();
  ScrollTopComponent.bootstrap();
  StickyComponent.bootstrap();
  MenuComponent.bootstrap();
}, 200);
