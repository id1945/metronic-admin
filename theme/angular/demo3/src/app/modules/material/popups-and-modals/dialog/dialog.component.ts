import { Component, Inject, OnInit } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-modal3',
  template: ` <div class="col-xl-12">
    <div class="col-xl-12">
      <div class="modal3-container">
        <h1 mat-dialog-title>Favorite Animal</h1>
        <h2 mat-dialog-title>Install Angular</h2>
        <mat-dialog-content>
          <h3>DEVELOP ACROSS ALL PLATFORMS</h3>
          <p>
            Learn one way to build applications with Angular and reuse your code
            and abilities to build apps for any deployment target. For web,
            mobile web, native mobile and native desktop.
          </p>
          <h3>SPEED &amp; PERFORMANCE</h3>
          <p>
            Achieve the maximum speed possible on the Web Platform today, and
            take it further, via Web Workers and server-side rendering. Angular
            puts you in control over scalability. Meet huge data requirements by
            building data models on RxJS, Immutable.js or another push-model.
          </p>
          <h3>INCREDIBLE TOOLING</h3>
          <p>
            Build features quickly with simple, declarative templates. Extend
            the template language with your own components and use a wide array
            of existing components. Get immediate Angular-specific help and
            feedback with nearly every IDE and editor. All this comes together
            so you can focus on building amazing apps rather than trying to make
            the code work.
          </p>
          <h3>LOVED BY MILLIONS</h3>
          <p>
            From prototype through global deployment, Angular delivers the
            productivity and scalable infrastructure that supports Google's
            largest applications.
          </p>
        </mat-dialog-content>
        <mat-dialog-actions>
          <button mat-button mat-dialog-close>Cancel</button>
          <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
            Install
          </button>
        </mat-dialog-actions>
      </div>
    </div>
  </div>`,
})
export class Modal3Component {}

@Component({
  selector: 'app-modal2',
  template: `
    <div class="col-xl-12">
      <div class="col-xl-12">
        <div class="modal2-container">
          <h1 mat-dialog-title>Favorite Animal</h1>
          <div mat-dialog-content>
            My favorite animal is:
            <ul>
              <li>
                <span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
              </li>
              <li>
                <span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
              </li>
              <li><span *ngIf="data.animal === 'lion'">&#10003;</span> Lion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class Modal2Component {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}

@Component({
  selector: 'app-material-modal',
  template: ` <div class="col-xl-12">
    <div class="col-xl-12">
      <br />
      <h1 mat-dialog-title>Hi {{ data.name }}</h1>
      <div mat-dialog-content>
        <p>What's your favorite animal?</p>
        <mat-form-field>
          <input matInput [(ngModel)]="data.animal" />
        </mat-form-field>
      </div>
      <div mat-dialog-actions>
        <button mat-button (click)="onNoClick()">No Thanks</button>
        <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>
          Ok
        </button>
      </div>
      <br />
    </div>
  </div>`,
})
export class ModalComponent {
  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}

const basic = {
  beforeCodeTitle: 'Dialog Overview',
  htmlCode: `
		<h1 mat-dialog-title>Hi {{data.name}}</h1>
		<div mat-dialog-content>
		  <p>What's your favorite animal?</p>
		  <mat-form-field>
			<input matInput [(ngModel)]="data.animal">
		  </mat-form-field>
		</div>
		<div mat-dialog-actions>
		  <button mat-button (click)="onNoClick()">No Thanks</button>
		  <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
		</div>
`,
  tsCode: `
import {Component, Inject} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';\n
/**
* @title Dialog Overview
*/
@Component({
  selector: 'dialog-overview-example',
  templateUrl: 'dialog-overview-example.html',
  styleUrls: ['dialog-overview-example.css'],
})
export class DialogOverviewExample {\n
  animal: string;
  name: string;\n
  constructor(public dialog: MatDialog) {}\n
  openDialog(): void {
    let dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '250px',
      data: { name: this.name, animal: this.animal }
    });\n
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }
}\n
@Component({
  selector: 'dialog-overview-example-dialog',
  template: \`
    <h1 mat-dialog-title>Hi {{data.name}}</h1>
    <div mat-dialog-content>
      <p>What's your favorite animal?</p>
      <mat-form-field>
        <input matInput [(ngModel)]="data.animal">
      </mat-form-field>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="onNoClick()">No Thanks</button>
      <button mat-button [mat-dialog-close]="data.animal" cdkFocusInitial>Ok</button>
    </div>\`
})
export class DialogOverviewExampleDialog {\n
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }\n
  onNoClick(): void {
    this.dialogRef.close();
  }\n
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const injecting = {
  beforeCodeTitle: 'Injecting data when opening a dialog',
  htmlCode: '<button mat-button (click)="openDialog()">Open dialog</button>',
  tsCode: `
import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';\n
/**
* @title Injecting data when opening a dialog
*/
@Component({
  selector: 'dialog-data-example',
  templateUrl: 'dialog-data-example.html',
  styleUrls: ['dialog-data-example.css']
})
export class DialogDataExample {
  constructor(public dialog: MatDialog) {}\n
  openDialog() {
    this.dialog.open(DialogDataExampleDialog, {
      data: {
        animal: 'panda'
     }
    });
  }
}\n
@Component({
  selector: 'dialog-data-example-dialog',
  template: \`
    <h1 mat-dialog-title>Favorite Animal</h1>
    <div mat-dialog-content>
      My favorite animal is:
      <ul>
        <li>
          <span *ngIf="data.animal === 'panda'">&#10003;</span> Panda
        </li>
        <li>
          <span *ngIf="data.animal === 'unicorn'">&#10003;</span> Unicorn
        </li>
        <li>
          <span *ngIf="data.animal === 'lion'">&#10003;</span> Lion
        </li>
      </ul>
    </div>
	\`,
})
export class DialogDataExampleDialog {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const header = {
  beforeCodeTitle: 'Dialog with header, scrollable content and actions',
  htmlCode: `
<button mat-button (click)="openDialog()">Open dialog</button>
`,
  tsCode: `
import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';\n
/**
* @title Dialog with header, scrollable content and actions
*/
@Component({
  selector: 'dialog-content-example',
  templateUrl: 'dialog-content-example.html',
  styleUrls: ['dialog-content-example.css'],
})
export class DialogContentExample {
  constructor(public dialog: MatDialog) {}\n
  openDialog() {
    const dialogRef = this.dialog.open(DialogContentExampleDialog, {
      height: '350px'
    });\n
    dialogRef.afterClosed().subscribe(result => {
      console.log(\`Dialog result: \${result}\`);
    });
  }
}\n
@Component({
  selector: 'dialog-content-example-dialog',
  templateUrl: 'dialog-content-example-dialog.html',
})
export class DialogContentExampleDialog {}
`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-material-dialog',
  templateUrl: './dialog.component.html',
})
export class DialogComponent implements OnInit {
  animal2 = '';
  animalSubject = new BehaviorSubject<string>('');
  animal$: Observable<string>;
  animal: string;
  name: string;

  exampleBasic;
  exampleInjecting;
  examplHeader;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {
    this.animal$ = this.animalSubject.asObservable();
    this.animal$.subscribe((result) => {
      this.animal = result;
    });
    this.exampleBasic = basic;
    this.exampleInjecting = injecting;
    this.examplHeader = header;
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '280px',
      data: { name: this.name, animal: this.animal },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.animalSubject.next(result);
      }
    });
  }

  openDialog2() {
    this.dialog.open(Modal2Component, {
      data: {
        animal: 'panda',
      },
    });
  }

  openDialog3() {
    const dialogRef = this.dialog.open(Modal3Component, {
      height: '350px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
