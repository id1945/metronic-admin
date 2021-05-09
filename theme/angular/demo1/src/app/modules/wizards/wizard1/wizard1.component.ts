import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import KTWizard from '../../../../assets/js/components/wizard';
import { KTUtil } from '../../../../assets/js/components/util';
@Component({
  selector: 'app-wizard1',
  templateUrl: './wizard1.component.html',
  styleUrls: ['./wizard1.component.scss']
})
export class Wizard1Component implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('wizard', { static: true }) el: ElementRef;
  model: any = {
    address1: 'Address Line 1',
    address2: 'Address Line 2',
    postcode: '3000',
    city: 'Melbourne',
    state: 'VIC',
    country: 'AU',
    package: 'Complete Workstation (Monitor, Computer, Keyboard & Mouse)',
    weight: '25',
    width: '110',
    height: '90',
    length: '150',
    delivery: 'overnight',
    packaging: 'regular',
    preferreddelivery: 'morning',
    locaddress1: 'Address Line 1',
    locaddress2: 'Address Line 2',
    locpostcode: '3072',
    loccity: 'Preston',
    locstate: 'VIC',
    loccountry: 'AU',
  };
  submitted = false;
  wizard: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    // Initialize form wizard
    this.wizard = new KTWizard(this.el.nativeElement, {
      startStep: 1
    });

    // Validation before going to next page
    this.wizard.on('beforeNext', (wizardObj) => {
      // https://angular.io/guide/forms
      // https://angular.io/guide/form-validation

      // validate the form and use below function to stop the wizard's step
      // wizardObj.stop();
    });

    // Change event
    this.wizard.on('change', () => {
      setTimeout(() => {
        KTUtil.scrollTop();
      }, 500);
    });
  }

  onSubmit() {
    this.submitted = true;
  }

  ngOnDestroy() {
    this.wizard = undefined;
  }
}
