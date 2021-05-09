import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

const simpleAutocomplete = {
  beforeCodeTitle: 'Simple autocomplete',
  htmlCode: `<form class="example-full-width">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number"
      matInput [formControl]="myControl"
      [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of options" [value]="option">
          {{ option }}
        </mat-option>
       </mat-autocomplete>
  </mat-form-field>
</form>
`,
  tsCode: `
import {FormControl} from '@angular/forms';
import {Component} from '@angular/core';\n
/**
* @title Simple autocomplete
*/
@Component({
    selector: 'autocomplete-simple-example',
    templateUrl: 'autocomplete-simple-example.html',
    styleUrls: ['autocomplete-simple-example.css']
})
export class AutocompleteSimpleExample {
    myControl: FormControl = new FormControl();
    options = [
        'One',
        'Two',
        'Three'
    ];
}`,
  cssCode: `.example-form {
    min-width: 150px;
    max-width: 500px;
    width: 100%;
}
.example-full-width {
    width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const addingACustomFilter = {
  beforeCodeTitle: 'Adding a custom filter',
  htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
      <mat-autocomplete #auto="matAutocomplete">
        <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
          {{ option }}
        </mat-option>
      </mat-autocomplete>
  </mat-form-field>
</form>`,
  tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
/**
* @title Filter autocomplete
*/
@Component({
  selector: 'autocomplete-filter-example',
  templateUrl: 'autocomplete-filter-example.html',
  styleUrls: ['autocomplete-filter-example.css']
})
export class AutocompleteFilterExample {\n
  myControl: FormControl = new FormControl();\n
  options = [
    'One',
    'Two',
	'Three'
  ];\n
  filteredOptions: Observable<string[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
         map(val => this.filter(val))
      );
  }\n
  filter(val: string): string[] {
    return this.options.filter(option =>
		option.toLowerCase().includes(val.toLowerCase()));
  }
}`,
  cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const settingSeparateControlAndDisplayValues = {
  beforeCodeTitle: 'Setting separate control and display valuess',
  beforeCodeDescription: ``,
  htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Assignee" aria-label="Assignee" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete #auto="matAutocomplete" [displayWith]="displayFn">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{ option.name }}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>`,
  tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
export class User {
  constructor(public name: string) { }
}
/**
* @title Display value autocomplete
*/
@Component({
  selector: 'autocomplete-display-example',
  templateUrl: 'autocomplete-display-example.html',
  styleUrls: ['autocomplete-display-example.css']
})
export class AutocompleteDisplayExample {\n
  myControl = new FormControl();\n
  options = [
    new User('Mary'),
    new User('Shelley'),
    new User('Igor')
  ];\n
  filteredOptions: Observable<User[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith<string | User>(''),
        map(value => typeof value === 'string' ? value : value.name),
        map(name => name ? this.filter(name) : this.options.slice())
      );
  }\n
  filter(name: string): User[] {
    return this.options.filter(option =>
      option.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }\n
  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }\n
}`,
  cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const automaticallyHighlightingTheFirstOption = {
  beforeCodeTitle: 'Automatically highlighting the first option',
  htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input type="text" placeholder="Pick one" aria-label="Number" matInput [formControl]="myControl" [matAutocomplete]="auto">
    <mat-autocomplete autoActiveFirstOption #auto="matAutocomplete">
      <mat-option *ngFor="let option of filteredOptions | async" [value]="option">
        {{ option }}
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
</form>`,
  tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
/**
* @title Highlight the first autocomplete option
*/
@Component({
  selector: 'autocomplete-auto-active-first-option-example',
  templateUrl: 'autocomplete-auto-active-first-option-example.html',
  styleUrls: ['autocomplete-auto-active-first-option-example.css']
})
export class AutocompleteAutoActiveFirstOptionExample {
  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;\n
  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(val => this.filter(val))
    );\n
  filter(val: string): string[] {
    return this.options.filter(option => option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }\n
}`,
  cssCode: `.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}
.example-full-width {
  width: 100%;
}`,
  viewCode: ``,
  isCodeVisible: false,
};

const autocompleteOverview = {
  beforeCodeTitle: 'Autocomplete overview',
  htmlCode: `<form class="example-form">
  <mat-form-field class="example-full-width">
    <input matInput placeholder="State" aria-label="State" [matAutocomplete]="auto" [formControl]="stateCtrl">
    <mat-autocomplete #auto="matAutocomplete">
      <mat-option *ngFor="let state of filteredStates | async" [value]="state.name">
        <img style="vertical-align:middle;" aria-hidden src="{{state.flag}}" height="25" />
        <span>{{ state.name }}</span> |
        <small>Population: {{state.population}}</small>
      </mat-option>
    </mat-autocomplete>
  </mat-form-field>
  <br />
  <mat-slide-toggle
    [checked]="stateCtrl.disabled"
    (change)="stateCtrl.disabled ? stateCtrl.enable() : stateCtrl.disable()">
    Disable Input?
  </mat-slide-toggle>
</form>`,
  tsCode: `import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';\n
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';\n
export class State {
  constructor(public name: string, public population: string, public flag: string) { }
}\n
/**
 * @title Autocomplete overview
*/
@Component({
  selector: 'autocomplete-overview-example',
  templateUrl: 'autocomplete-overview-example.html',
  styleUrls: ['autocomplete-overview-example.css']
})
export class AutocompleteOverviewExample {
  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;
  states: State[] = [
  {
    name: 'Arkansas',
    population: '2.978M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg'
  },
  {
	name: 'California',
    population: '39.14M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg'
  },
  {
    name: 'Florida',
	population: '20.27M',
	// https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
	flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg'
  },
  {
    name: 'Texas',
    population: '27.47M',
    // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
    flag: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg'
  }
];
  constructor() {
    this.stateCtrl = new FormControl();
     this.filteredStates = this.stateCtrl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this.filterStates(state) : this.states.slice())
      );
}
  filterStates(name: string) {
    return this.states.filter(state =>
      state.name.toLowerCase().indexOf(name.toLowerCase()) === 0);
  }
}
`,
  viewCode: ``,
  isCodeVisible: false,
};

const optionGroupsAutocomplete = {
  beforeCodeTitle: 'Option groups autocomplete',
  htmlCode: `<form [formGroup]="stateForm">
  <mat-form-field>
    <input type="text" matInput placeholder="States Group" formControlName="stateGroup" required [matAutocomplete]="autoGroup"/>
      <mat-autocomplete #autoGroup="matAutocomplete">
        <mat-optgroup *ngFor="let group of stateGroupOptions | async" [label]="group.letter">
          <mat-option *ngFor="let name of group.names" [value]="name">
            {{ name }}
          </mat-option>
        </mat-optgroup>
      </mat-autocomplete>
  </mat-form-field>
</form>  `,
  tsCode: `import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder} from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';

export interface StateGroup {
  letter: string;
  names: string[];
}

/**
* @title Option groups autocomplete
*/
@Component({
  templateUrl: './autocomplete-optgroup-example.html',
  styleUrls: ['./autocomplete-optgroup-example.css'],
})

export class AutocompleteOptgroupExample implements OnInit {
  stateForm: FormGroup = this.fb.group({
  stateGroup: '',
});

stateGroups: StateGroup[] = [{
  letter: 'A',
  names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas']
}, {
  letter: 'C',
  names: ['California', 'Colorado', 'Connecticut']
}, {
  letter: 'D',
  names: ['Delaware']
}, {
  letter: 'F',
  names: ['Florida']
}, {
  letter: 'G',
  names: ['Georgia']
}, {
  letter: 'H',
  names: ['Hawaii']
}, {
  letter: 'I',
  names: ['Idaho', 'Illinois', 'Indiana', 'Iowa']
}, {
  letter: 'K',
  names: ['Kansas', 'Kentucky']
}, {
  letter: 'L',
  names: ['Louisiana']
}, {
  letter: 'M',
  names: ['Maine', 'Maryland', 'Massachusetts', 'Michigan',
  'Minnesota', 'Mississippi', 'Missouri', 'Montana']
}, {
  letter: 'N',
  names: ['Nebraska', 'Nevada', 'New Hampshire', 'New Jersey',
  'New Mexico', 'New York', 'North Carolina', 'North Dakota']
}, {
  letter: 'O',
  names: ['Ohio', 'Oklahoma', 'Oregon']
}, {
  letter: 'P',
  names: ['Pennsylvania']
}, {
  letter: 'R',
  names: ['Rhode Island']
}, {
  letter: 'S',
  names: ['South Carolina', 'South Dakota']
}, {
  letter: 'T',
  names: ['Tennessee', 'Texas']
}, {
  letter: 'U',
  names: ['Utah']
}, {
  letter: 'V',
  names: ['Vermont', 'Virginia']
}, {
  letter: 'W',
  names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming']
}];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.stateGroupOptions = this.stateForm.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
          map(val => this.filterGroup(val))
       );
  }

  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.stateGroups
      .map(group => ({ letter: group.letter, names: this._filter(group.names, val) }))
      .filter(group => group.names.length > 0);
    }

     return this.stateGroups;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
      return opt.filter(item => item.toLowerCase().startsWith(filterValue));
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
};

export class User {
  constructor(public name: string) {}
}

export class State {
  constructor(
    public name: string,
    public population: string,
    public flag: string
  ) {}
}

export interface StateGroup {
  letter: string;
  names: string[];
}

@Component({
  selector: 'app-material-autocomplete',
  templateUrl: './autocomplete.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      .example-form {
        min-width: 150px;
        max-width: 500px;
        width: 100%;
      }
      .example-full-width {
        width: 100%;
      }
    `,
  ],
})
export class AutocompleteComponent implements OnInit {
  exampleSimpleAutocomplete;
  exampleAddingACustomFilter;
  exampleSettingSeparateControlAndDisplayValues;
  exampleAutomaticallyHighlightingTheFirstOption;
  exampleAutocompleteOverview;
  exampleOptionGroupsAutocomplete;

  myControl: FormControl = new FormControl();
  options = ['One', 'Two', 'Three'];

  myControl2: FormControl = new FormControl();
  filteredOptions: Observable<string[]>;

  myControl33 = new FormControl();
  options33 = [new User('Mary'), new User('Shelley'), new User('Igor')];
  filteredOptions33: Observable<User[]>;

  myControl44: FormControl = new FormControl();
  options44 = ['One', 'Two', 'Three'];
  filteredOptions44: Observable<string[]>;

  stateCtrl: FormControl;
  filteredStates: Observable<any[]>;

  myControl3: FormControl = new FormControl();

  states: State[] = [
    {
      name: 'Arkansas',
      population: '2.978M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Arkansas.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Arkansas.svg',
    },
    {
      name: 'California',
      population: '39.14M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_California.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_California.svg',
    },
    {
      name: 'Florida',
      population: '20.27M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Florida.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Florida.svg',
    },
    {
      name: 'Texas',
      population: '27.47M',
      // https://commons.wikimedia.org/wiki/File:Flag_of_Texas.svg
      flag:
        'https://upload.wikimedia.org/wikipedia/commons/f/f7/Flag_of_Texas.svg',
    },
  ];

  stateForm: FormGroup = this.fb.group({
    stateGroup: '',
  });

  stateGroups: StateGroup[] = [
    {
      letter: 'A',
      names: ['Alabama', 'Alaska', 'Arizona', 'Arkansas'],
    },
    {
      letter: 'C',
      names: ['California', 'Colorado', 'Connecticut'],
    },
    {
      letter: 'D',
      names: ['Delaware'],
    },
    {
      letter: 'F',
      names: ['Florida'],
    },
    {
      letter: 'G',
      names: ['Georgia'],
    },
    {
      letter: 'H',
      names: ['Hawaii'],
    },
    {
      letter: 'I',
      names: ['Idaho', 'Illinois', 'Indiana', 'Iowa'],
    },
    {
      letter: 'K',
      names: ['Kansas', 'Kentucky'],
    },
    {
      letter: 'L',
      names: ['Louisiana'],
    },
    {
      letter: 'M',
      names: [
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
      ],
    },
    {
      letter: 'N',
      names: [
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
      ],
    },
    {
      letter: 'O',
      names: ['Ohio', 'Oklahoma', 'Oregon'],
    },
    {
      letter: 'P',
      names: ['Pennsylvania'],
    },
    {
      letter: 'R',
      names: ['Rhode Island'],
    },
    {
      letter: 'S',
      names: ['South Carolina', 'South Dakota'],
    },
    {
      letter: 'T',
      names: ['Tennessee', 'Texas'],
    },
    {
      letter: 'U',
      names: ['Utah'],
    },
    {
      letter: 'V',
      names: ['Vermont', 'Virginia'],
    },
    {
      letter: 'W',
      names: ['Washington', 'West Virginia', 'Wisconsin', 'Wyoming'],
    },
  ];

  stateGroupOptions: Observable<StateGroup[]>;

  constructor(private fb: FormBuilder) {
    this.stateCtrl = new FormControl();
    this.filteredStates = this.stateCtrl.valueChanges.pipe(
      startWith(''),
      map((state) => (state ? this.filterStates(state) : this.states.slice()))
    );
  }

  filterStates(name: string) {
    return this.states.filter(
      (state) => state.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  ngOnInit() {
    this.exampleSimpleAutocomplete = simpleAutocomplete;
    this.exampleAddingACustomFilter = addingACustomFilter;
    this.exampleSettingSeparateControlAndDisplayValues = settingSeparateControlAndDisplayValues;
    this.exampleAutomaticallyHighlightingTheFirstOption = automaticallyHighlightingTheFirstOption;
    this.exampleAutocompleteOverview = autocompleteOverview;
    this.exampleOptionGroupsAutocomplete = optionGroupsAutocomplete;

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter(val))
    );

    this.filteredOptions33 = this.myControl33.valueChanges.pipe(
      startWith<string | User>(''),
      map((value) => (typeof value === 'string' ? value : value.name)),
      map((name) => (name ? this.filter33(name) : this.options33.slice()))
    );

    this.filteredOptions44 = this.myControl44.valueChanges.pipe(
      startWith(''),
      map((val) => this.filter44(val))
    );

    // tslint:disable-next-line:no-non-null-assertion
    this.stateGroupOptions = this.stateForm
      .get('stateGroup')!
      .valueChanges.pipe(
        startWith(''),
        map((val) => this.filterGroup(val))
      );
  }

  filter33(name: string): User[] {
    return this.options33.filter(
      (option) => option.name.toLowerCase().indexOf(name.toLowerCase()) === 0
    );
  }

  filter44(val: string): string[] {
    return this.options44.filter(
      (option) => option.toLowerCase().indexOf(val.toLowerCase()) === 0
    );
  }

  displayFn(user?: User): string | undefined {
    return user ? user.name : undefined;
  }

  filter(val: string): string[] {
    return this.options.filter((option) =>
      option.toLowerCase().includes(val.toLowerCase())
    );
  }

  filterGroup(val: string): StateGroup[] {
    if (val) {
      return this.stateGroups
        .map((group) => ({
          letter: group.letter,
          names: this._filter(group.names, val),
        }))
        .filter((group) => group.names.length > 0);
    }

    return this.stateGroups;
  }

  private _filter(opt: string[], val: string) {
    const filterValue = val.toLowerCase();
    return opt.filter((item) => item.toLowerCase().startsWith(filterValue));
  }
}
