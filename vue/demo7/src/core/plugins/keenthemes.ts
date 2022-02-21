import {
  MenuComponent,
  ScrollComponent,
  StickyComponent,
  ToggleComponent,
  SwapperComponent,
} from "@/assets/ts/components";

/**
 * Initialize KeenThemes custom components
 */
setTimeout(() => {
  ToggleComponent.bootstrap();
  StickyComponent.bootstrap();
  MenuComponent.bootstrap();
  ScrollComponent.bootstrap();
  SwapperComponent.bootstrap();
}, 500);
