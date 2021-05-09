import { Component, OnInit } from '@angular/core';
import {
  MatBottomSheetRef,
  MatBottomSheet,
} from '@angular/material/bottom-sheet';
import { BottomSheetExampleComponent } from './bottom-sheet-example/bottom-sheet-example.component';

const basic = {
  beforeCodeTitle: 'Bottom Sheet Overview',
  htmlCode: `
import {Component} from '@angular/core';
import {MatBottomSheet, MatBottomSheetRef} from '@angular/material';\n
/**
* @title Bottom Sheet Overview
@Component({
  selector: 'bottom-sheet-overview-example',
  templateUrl: 'bottom-sheet-overview-example.html',
  styleUrls: ['bottom-sheet-overview-example.css'],
})
export class BottomSheetOverviewExample {
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetOverviewExampleSheet);
  }
}\n

@Component({
  selector: 'bottom-sheet-overview-example-sheet',
  templateUrl: 'bottom-sheet-overview-example-sheet.html',
})
export class BottomSheetOverviewExampleSheet {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetOverviewExampleSheet>) {}

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}`,
  cssCode: ``,
  viewCode: ``,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-material-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
})
export class BottomSheetComponent implements OnInit {
  exampleBasic;
  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetExampleComponent);
  }

  ngOnInit() {
    this.exampleBasic = basic;
  }
}
