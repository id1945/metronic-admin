import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

const basicSelect = {
  beforeCodeTitle: 'Basic select',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Favorite food">
    <mat-option *ngFor="let food of foods" [value]="food.value">
      {{ food.viewValue }}
    </mat-option>
  </mat-select>
</mat-form-field>
		`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Basic select
*/
@Component({
  selector: 'select-overview-example',
  templateUrl: 'select-overview-example.html',
  styleUrls: ['select-overview-example.css'],
})
export class SelectOverviewExample {
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

const selectWith2WayValueBinding = {
  beforeCodeTitle: 'Select with 2-way value binding',
  htmlCode: `
<mat-form-field>
  <mat-select [(value)]="selected">
    <mat-option>None</mat-option>
    <mat-option value="option1">Option 1</mat-option>
    <mat-option value="option2">Option 2</mat-option>
    <mat-option value="option3">Option 3</mat-option>
  </mat-select>
</mat-form-field>
<p>You selected: {{selected}}</p>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with 2-way value binding */
@Component({
  selector: 'select-value-binding-example',
  templateUrl: 'select-value-binding-example.html',
  styleUrls: ['select-value-binding-example.css'],
})
export class SelectValueBindingExample {
  selected = 'option2';
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectInAForm = {
  beforeCodeTitle: 'Select in a form',
  htmlCode: `
<form>
  <mat-form-field>
    <mat-select placeholder="Favorite food" [(ngModel)]="selectedValue" name="food">
      <mat-option *ngFor="let food of foods" [value]="food.value">
        {{food.viewValue}}
      </mat-option>
    </mat-select>
  </mat-form-field>
	<p> Selected value: {{selectedValue}} </p>
</form>`,
  tsCode: `
import {Component} from '@angular/core';\n
/**
* @title Select in a form
*/
@Component({
  selector: 'select-form-example',
  templateUrl: 'select-form-example.html',
  styleUrls: ['select-form-example.css'],
})
export class SelectFormExample {
 selectedValue: string;
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithFormFieldFeature = {
  beforeCodeTitle: 'Select with form field features',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Favorite animal" [formControl]="animalControl" required>
    <mat-option>--</mat-option>
    <mat-option *ngFor="let animal of animals" [value]="animal">
      {{animal.name}}
	</mat-option>
  </mat-select>
  <mat-error *ngIf="animalControl.hasError('required')">Please choose an animal</mat-error>
  <mat-hint>{{animalControl.value?.sound}}</mat-hint>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';\n
/** @title Select with form field features */
@Component({
  selector: 'select-hint-error-example',
  templateUrl: 'select-hint-error-example.html',
  styleUrls: ['select-hint-error-example.css'],
})
export class SelectHintErrorExample {
  animalControl = new FormControl('', [Validators.required]);
  animals = [
    {name: 'Dog', sound: 'Woof!'},
    {name: 'Cat', sound: 'Meow!'},
    {name: 'Cow', sound: 'Moo!'},
    {name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!'},
  ];
}
`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithResetOption = {
  beforeCodeTitle: 'Select with reset option',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="State">
    <mat-option>None</mat-option>
    <mat-option *ngFor="let state of states" [value]="state">{{state}}</mat-option>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with reset option */
@Component({
  selector: 'select-reset-example',
  templateUrl: 'select-reset-example.html',
  styleUrls: ['select-reset-example.css'],
})
export class SelectResetExample {
  states = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ];
}
`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithOptionGroups = {
  beforeCodeTitle: 'Select with option groups',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Pokemon" [formControl]="pokemonControl">
    <mat-option>-- None --</mat-option>
    <mat-optgroup *ngFor="let group of pokemonGroups" [label]="group.name"
      [disabled]="group.disabled">
      <mat-option *ngFor="let pokemon of group.pokemon" [value]="pokemon.value">
         {{ pokemon.viewValue }}
        </mat-option>
    </mat-optgroup>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with option groups */
@Component({
  selector: 'select-optgroup-example',
  templateUrl: 'select-optgroup-example.html',
  styleUrls: ['select-optgroup-example.css'],
})
export class SelectOptgroupExample {
  pokemonControl = new FormControl();
  pokemonGroups = [
  {
    name: 'Grass',
    pokemon: [
    { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
    { value: 'oddish-1', viewValue: 'Oddish' },
    { value: 'bellsprout-2', viewValue: 'Bellsprout' }
  ]
  },
  {
    name: 'Water',
    pokemon: [
    { value: 'squirtle-3', viewValue: 'Squirtle' },
    { value: 'psyduck-4', viewValue: 'Psyduck' },
    { value: 'horsea-5', viewValue: 'Horsea' }
  ]
  },
  {
    name: 'Fire',
    disabled: true,
    pokemon: [
    { value: 'charmander-6', viewValue: 'Charmander' },
    { value: 'vulpix-7', viewValue: 'Vulpix' },
    { value: 'flareon-8', viewValue: 'Flareon' }
  ]
  },
  {
    name: 'Psychic',
    pokemon: [
    { value: 'mew-9', viewValue: 'Mew' },
    { value: 'mewtwo-10', viewValue: 'Mewtwo' },
  ]
  }
  ];
}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithMultipleSelection = {
  beforeCodeTitle: 'Select with multiple selection',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
		`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithCustomTriggerText = {
  beforeCodeTitle: 'Select with custom trigger text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Toppings" [formControl]="toppings" multiple>
    <mat-select-trigger>
      {{toppings.value ? toppings.value[0] : ''}}
      <span *ngIf="toppings.value?.length > 1" class="example-additional-selection">
        (+{{toppings.value.length - 1}} others)
       </span>
    </mat-select-trigger>
    <mat-option *ngFor="let topping of toppingList" [value]="topping">{{topping}}</mat-option>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/** @title Select with custom trigger text */
@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  toppings = new FormControl();
  toppingList = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}`,
  viewCode: ``,
  cssCode: `
.example-additional-selection {
  opacity: 0.75;
  font-size: 0.75em;
}`,
  isCodeVisible: false,
};

const selectWithNoOptionRipple = {
  beforeCodeTitle: 'Select with no option ripple',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Select an option" disableRipple>
    <mat-option value="1">Option 1</mat-option>
    <mat-option value="2">Option 2</mat-option>
    <mat-option value="3">Option 3</mat-option>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component} from '@angular/core';\n
/** @title Select with no option ripple */
@Component({
  selector: 'select-no-ripple-example',
  templateUrl: 'select-no-ripple-example.html',
  styleUrls: ['select-no-ripple-example.css'],
})
export class SelectNoRippleExample {}`,
  viewCode: ``,
  cssCode: ``,
  isCodeVisible: false,
};

const selectWithCustomPanelStyling = {
  beforeCodeTitle: 'Select with custom panel styling',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Panel color" [formControl]="panelColor"
    panelClass="example-panel-{{panelColor.value}}">
    <mat-option value="red">Red</mat-option>
    <mat-option value="green">Green</mat-option>
    <mat-option value="blue">Blue</mat-option>
  </mat-select>
</mat-form-field>`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {FormControl} from '@angular/forms';\n
/**
* @title Select with custom panel styling
*/
@Component({
  selector: 'select-panel-class-example',
  templateUrl: 'select-panel-class-example.html',
  styleUrls: ['select-panel-class-example.css'],
  encapsulation: ViewEncapsulation.None,
})
export class SelectPanelClassExample {
  panelColor = new FormControl('red');
}`,
  viewCode: ``,
  cssCode: `
.example-panel-red .mat-select-content {
  background: rgba(255, 0, 0, 0.5);
}
.example-panel-green .mat-select-content {
  background: rgba(0, 255, 0, 0.5);
}
.example-panel-blue .mat-select-content {
  background: rgba(0, 0, 255, 0.5);
}`,
  isCodeVisible: false,
};

const selectWithACustomErrorStateMatcher = {
  beforeCodeTitle: 'Select with a custom ErrorStateMatcher',
  htmlCode: `
<mat-form-field>
  <mat-select placeholder="Choose one" [formControl]="selected" [errorStateMatcher]="matcher">
    <mat-option>Clear</mat-option>
    <mat-option value="valid">Valid option</mat-option>
    <mat-option value="invalid">Invalid option</mat-option>
  </mat-select>
  <mat-hint>Errors appear instantly!</mat-hint>
  <mat-error *ngIf="selected.hasError('required')">You must make a selection</mat-error>
  <mat-error *ngIf="selected.hasError('pattern') && !selected.hasError('required')">
    Your selection is invalid
  </mat-error>
</mat-form-field>
	  	`,
  tsCode: `
import {Component} from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';\n
/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}\n
/** @title Select with a custom ErrorStateMatcher */
@Component({
  selector: 'select-error-state-matcher-example',
  templateUrl: 'select-error-state-matcher-example.html',
  styleUrls: ['select-error-state-matcher-example.css'],
})
export class SelectErrorStateMatcherExample {
  selected = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);\n
  matcher = new MyErrorStateMatcher();
}`,
  viewCode: ``,
  cssCode: `
		`,
  isCodeVisible: false,
};

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-material-select',
  templateUrl: './select.component.html',
  styles: [
    `
      .example-additional-selection {
        opacity: 0.75;
        font-size: 0.75em;
      }
      .example-panel-red .mat-select-content {
        background: rgba(255, 0, 0, 0.5);
      }
      .example-panel-green .mat-select-content {
        background: rgba(0, 255, 0, 0.5);
      }
      .example-panel-blue .mat-select-content {
        background: rgba(0, 0, 255, 0.5);
      }
    `,
  ],
})
export class SelectComponent implements OnInit {
  exampleBasicSelect;
  exampleSelectWith2WayValueBinding;
  exampleSelectInAForm;
  exampleSelectWithFormFieldFeature;
  exampleSelectWithResetOption;
  exampleSelectWithOptionGroups;
  exampleSelectWithMultipleSelection;
  exampleSelectWithCustomTriggerText;
  exampleSelectWithCustomPanelStyling;
  exampleSelectWithACustomErrorStateMatcher;

  toppings = new FormControl();
  toppings2 = new FormControl();
  panelColor = new FormControl('red');

  toppingList2 = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];
  toppingList = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  foods = [
    { value: 'steak-0', viewValue: 'Steak' },
    { value: 'pizza-1', viewValue: 'Pizza' },
    { value: 'tacos-2', viewValue: 'Tacos' },
  ];

  states = [
    'Alabama',
    'Alaska',
    'Arizona',
    'Arkansas',
    'California',
    'Colorado',
    'Connecticut',
    'Delaware',
    'Florida',
    'Georgia',
    'Hawaii',
    'Idaho',
    'Illinois',
    'Indiana',
    'Iowa',
    'Kansas',
    'Kentucky',
    'Louisiana',
    'Maine',
    'Maryland',
    'Massachusetts',
    'Michigan',
    'Minnesota',
    'Mississippi',
    'Missouri',
    'Montana',
    'Nebraska',
    'Nevada',
    'New Hampshire',
    'New Jersey',
    'New Mexico',
    'New York',
    'North Carolina',
    'North Dakota',
    'Ohio',
    'Oklahoma',
    'Oregon',
    'Pennsylvania',
    'Rhode Island',
    'South Carolina',
    'South Dakota',
    'Tennessee',
    'Texas',
    'Utah',
    'Vermont',
    'Virginia',
    'Washington',
    'West Virginia',
    'Wisconsin',
    'Wyoming',
  ];
  selected = 'option2';

  selectedValue: string;

  pokemonControl = new FormControl();

  pokemonGroups = [
    {
      name: 'Grass',
      pokemon: [
        { value: 'bulbasaur-0', viewValue: 'Bulbasaur' },
        { value: 'oddish-1', viewValue: 'Oddish' },
        { value: 'bellsprout-2', viewValue: 'Bellsprout' },
      ],
    },
    {
      name: 'Water',
      pokemon: [
        { value: 'squirtle-3', viewValue: 'Squirtle' },
        { value: 'psyduck-4', viewValue: 'Psyduck' },
        { value: 'horsea-5', viewValue: 'Horsea' },
      ],
    },
    {
      name: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander-6', viewValue: 'Charmander' },
        { value: 'vulpix-7', viewValue: 'Vulpix' },
        { value: 'flareon-8', viewValue: 'Flareon' },
      ],
    },
    {
      name: 'Psychic',
      pokemon: [
        { value: 'mew-9', viewValue: 'Mew' },
        { value: 'mewtwo-10', viewValue: 'Mewtwo' },
      ],
    },
  ];

  animalControl = new FormControl('', [Validators.required]);

  animals = [
    { name: 'Dog', sound: 'Woof!' },
    { name: 'Cat', sound: 'Meow!' },
    { name: 'Cow', sound: 'Moo!' },
    { name: 'Fox', sound: 'Wa-pa-pa-pa-pa-pa-pow!' },
  ];

  selected2 = new FormControl('valid', [
    Validators.required,
    Validators.pattern('valid'),
  ]);

  matcher = new MyErrorStateMatcher();

  constructor() {}

  ngOnInit() {
    this.exampleBasicSelect = basicSelect;
    this.exampleSelectWith2WayValueBinding = selectWith2WayValueBinding;
    this.exampleSelectInAForm = selectInAForm;
    this.exampleSelectWithFormFieldFeature = selectWithFormFieldFeature;
    this.exampleSelectWithResetOption = selectWithResetOption;
    this.exampleSelectWithOptionGroups = selectWithOptionGroups;
    this.exampleSelectWithMultipleSelection = selectWithMultipleSelection;
    this.exampleSelectWithCustomTriggerText = selectWithCustomTriggerText;
    this.exampleSelectWithCustomPanelStyling = selectWithCustomPanelStyling;
    this.exampleSelectWithACustomErrorStateMatcher = selectWithACustomErrorStateMatcher;
  }
}
