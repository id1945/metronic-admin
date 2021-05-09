import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  NgbModal,
  NgbActiveModal,
  ModalDismissReasons,
  NgbModalOptions,
} from '@ng-bootstrap/ng-bootstrap';

const modalWithDefaultOptions = {
  beforeCodeTitle: 'Modal with default options',
  htmlCode: `
<div class="example-preview">
  <span *ngIf="closeResult">
    <pre>{{closeResult}}</pre>
  </span>
  <div>
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Basic demo</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
		<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
		  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
		  type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
		  essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
          passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-primary" (click)="open(content)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component} from '@angular/core';\n
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-basic',
    templateUrl: './modal-basic.html'
})
export class NgbdModalBasic {
    closeResult: string;\n
    constructor(private modalService: NgbModal) {}\n
    open(content) {
        this.modalService.open(content).result.then((result) => {
        this.closeResult = \`Closed with: $\{result\}\`;
        }, (reason) => {
            this.closeResult = \`Dismissed $\{this.getDismissReason(reason)\}\`;
        });
    }\n
    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  \`with: $\{reason}\`;
        }
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const componentsAsContent = {
  beforeCodeTitle: 'Components as content',
  htmlCode: `
<div class="example-preview">
  <div>
    <p>You can pass an existing component as content of the modal window. In this case remember to add content component as an
      <code>entryComponents</code> section of your
      <code>NgModule</code>.
    </p>
  </div>
  <div>
    <button class="btn btn-info" (click)="open2()">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, Input} from '@angular/core';\n
import {NgbModal, NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-content',
    template: \`
        <div class="modal-header">
            <h4 class="modal-title">Hi there!</h4>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">
            <p>Hello, {{name}}!</p>
        </div>
		<div class="modal-footer">
            <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('Close click')">Close</button>
        </div>
    \`
})
export class NgbdModalContent {
    @Input() name;
    constructor(public activeModal: NgbActiveModal) {}
    }\n
@Component({
    selector: 'ngbd-modal-component',
    templateUrl: './modal-component.html'
})
export class NgbdModalComponent {
    constructor(private modalService: NgbModal) {}\n
    open() {
        const modalRef = this.modalService.open(NgbdModalContent);
        modalRef.componentInstance.name = 'World';
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const modalWithCustomClass = {
  beforeCodeTitle: 'Modal with custom class',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>One fine body&hellip;</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
       </div>
    </ng-template>
    <button class="btn btn-focus" (click)="open(content)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';\n
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-customclass',
    templateUrl: './modal-customclass.html',
	encapsulation: ViewEncapsulation.None,
	styles: [\`
            .dark-modal .modal-content {
            background-color: #292b2c;
            color: white;
        }
            .dark-modal .close {
            color: white;
        }
   \`]
})
export class NgbdModalCustomclass {
    closeResult: string;\n
    constructor(private modalService: NgbModal) {}\n
    open(content) {
        this.modalService.open(content, { windowClass: 'dark-modal' });
    }\n
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const scrollableFixedContent = {
  beforeCodeTitle: 'Scrollable fixed content',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Scrollable fixed content</h4>
	    <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
	    </button>
      </div>
      <div class="modal-body">
        <perfect-scrollbar style="height: 250px;" [config]="config">
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
			remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
			Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
			standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining
			essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
		   dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
		   book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
           It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
           and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </perfect-scrollbar>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-metal" (click)="open(content)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-scrollablefixedcontent',
    templateUrl: './modal-scrollabledixedcontent.html',
})
export class NgbdModalScrollableFixedContent {
    constructor(private modalService: NgbModal) {}\n
    open(content) {
        this.modalService.open(content);
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const scrollingLongContent = {
  beforeCodeTitle: 'Scrolling long content',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content5 let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Scrollable fixed content</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
		  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum ateros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
		  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
		  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
		  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
		  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
		  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi
		  leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo
          odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-brand" (click)="open(content5)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-scrollingLongContent',
    templateUrl: './modal-scrollingLongContent.html',
})
export class NgbdModalScrollinglongcontent {
    constructor(private modalService: NgbModal) {}\n
    open(content) {
        this.modalService.open(content);
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const largeModal = {
  beforeCodeTitle: 'Large modal',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content6 let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
		  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-success" (click)="openLarge(content6)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-largemodal',
    templateUrl: './modal-largemodal.html',
})
export class NgbdModalLargeModal {
    constructor(private modalService: NgbModal) {}\n
    openLarge(content) {
        this.modalService.open(content, {
            size: 'lg'
        });
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const smallModal = {
  beforeCodeTitle: 'Small modal',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content7 let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
		  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-success" (click)="openSmall(content7)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-smallmodal',
    templateUrl: './modal-smallmodal.html',
})
export class NgbdModalSmallmodal {
    constructor(private modalService: NgbModal) {}\n
    openSmall(content) {
        this.modalService.open(content, {
            size: 'sm'
        });
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

const verticallyCentered = {
  beforeCodeTitle: 'Vertically centered',
  htmlCode: `
<div class="example-preview">
  <div>
    <ng-template #content8 let-c="close" let-d="dismiss">
      <div class="modal-header">
        <h4 class="modal-title">Modal title</h4>
        <button type="button" class="close" aria-label="Close" (click)="d('Cross click')">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>
		  Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.
		  Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum.
          Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
        </p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" (click)="c('Close click')">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </ng-template>
    <button class="btn btn-danger" (click)="openCentred(content7)">Launch demo modal</button>
  </div>
</div>
`,
  tsCode: `
import {Component, ViewEncapsulation} from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';\n
@Component({
    selector: 'ngbd-modal-verticallyсentered',
    templateUrl: './modal-verticallyсentered.html',
})
export class NgbdModalVerticallycentered {
    constructor(private modalService: NgbModal) {}\n
    openCentred(content) {
        this.modalService.open(content, { centered: true } );
    }
}
`,
  isCodeVisible: false,
  isExampleExpanded: true,
};

@Component({
  selector: 'app-ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Hi there!</h4>
      <button
        type="button"
        class="close"
        aria-label="Close"
        (click)="activeModal.dismiss('Cross click')"
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Hello, {{ name }}!</p>
    </div>
    <div class="modal-footer">
      <button
        type="button"
        class="btn btn-info"
        (click)="activeModal.close('Close click')"
      >
        Close
      </button>
    </div>
  `,
})
export class NgbdModalContentComponent {
  @Input() name;
  constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'app-ng-modal',
  templateUrl: './modal.component.html',
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #292b2c;
        color: white;
      }
      .dark-modal .close {
        color: white;
      }
    `,
  ],
})
export class ModalComponent implements OnInit {
  exampleModalWithDefaultOptions;
  exampleComponentsAsContent;
  exampleModalWithCustomClass;
  exampleScrollableFixedContent;
  exampleScrollingLongContent;
  exampleLargeModal;
  exampleSmallModal;
  exampleVerticallyCentered;

  closeResult: string;
  closeResult2: string;
  constructor(private modalService: NgbModal) {}

  open(content) {
    this.modalService.open(content).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      }
    );
  }

  open2() {
    const modalRef = this.modalService.open(NgbdModalContentComponent);
    modalRef.componentInstance.name = 'World';
  }

  open3(content) {
    this.modalService.open(content, { windowClass: 'dark-modal' });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  openLarge(content) {
    this.modalService.open(content, {
      size: 'lg',
    });
  }

  openSmall(content) {
    this.modalService.open(content, {
      size: 'sm',
    });
  }

  openCentred(content) {
    this.modalService.open(
      content
      // { centered: true }
    );
  }

  ngOnInit() {
    this.exampleModalWithDefaultOptions = modalWithDefaultOptions;
    this.exampleComponentsAsContent = componentsAsContent;
    this.exampleModalWithCustomClass = modalWithCustomClass;
    this.exampleScrollableFixedContent = scrollableFixedContent;
    this.exampleScrollingLongContent = scrollingLongContent;
    this.exampleLargeModal = largeModal;
    this.exampleSmallModal = smallModal;
    this.exampleVerticallyCentered = verticallyCentered;
  }
}
