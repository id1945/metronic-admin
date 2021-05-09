import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InlineSVGModule } from 'ng-inline-svg';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { ECommerceComponent } from './e-commerce.component';
import { ECommerceRoutingModule } from './e-commerce-routing.module';
import { CRUDTableModule } from '../../_metronic/shared/crud-table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteCustomerModalComponent } from './customers/components/delete-customer-modal/delete-customer-modal.component';
import { DeleteCustomersModalComponent } from './customers/components/delete-customers-modal/delete-customers-modal.component';
import { FetchCustomersModalComponent } from './customers/components/fetch-customers-modal/fetch-customers-modal.component';
import { UpdateCustomersStatusModalComponent } from './customers/components/update-customers-status-modal/update-customers-status-modal.component';
import { EditCustomerModalComponent } from './customers/components/edit-customer-modal/edit-customer-modal.component';
import { NgbDatepickerModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteProductModalComponent } from './products/components/delete-product-modal/delete-product-modal.component';
import { DeleteProductsModalComponent } from './products/components/delete-products-modal/delete-products-modal.component';
import { UpdateProductsStatusModalComponent } from './products/components/update-products-status-modal/update-products-status-modal.component';
import { FetchProductsModalComponent } from './products/components/fetch-products-modal/fetch-products-modal.component';
import { ProductEditComponent } from './products/product-edit/product-edit.component';
import { RemarksComponent } from './products/product-edit/remarks/remarks.component';
import { SpecificationsComponent } from './products/product-edit/specifications/specifications.component';
import { DeleteRemarkModalComponent } from './products/product-edit/remarks/delete-remark-modal/delete-remark-modal.component';
import { DeleteRemarksModalComponent } from './products/product-edit/remarks/delete-remarks-modal/delete-remarks-modal.component';
import { FetchRemarksModalComponent } from './products/product-edit/remarks/fetch-remarks-modal/fetch-remarks-modal.component';
import { DeleteSpecModalComponent } from './products/product-edit/specifications/delete-spec-modal/delete-spec-modal.component';
import { DeleteSpecsModalComponent } from './products/product-edit/specifications/delete-specs-modal/delete-specs-modal.component';
import { FetchSpecsModalComponent } from './products/product-edit/specifications/fetch-specs-modal/fetch-specs-modal.component';
import { EditRemarkModalComponent } from './products/product-edit/remarks/edit-remark-modal/edit-remark-modal.component';
import { EditSpecModalComponent } from './products/product-edit/specifications/edit-spec-modal/edit-spec-modal.component';

@NgModule({
  declarations: [
    CustomersComponent,
    ProductsComponent,
    ECommerceComponent,
    DeleteCustomerModalComponent,
    DeleteCustomersModalComponent,
    FetchCustomersModalComponent,
    UpdateCustomersStatusModalComponent,
    EditCustomerModalComponent,
    DeleteProductModalComponent,
    DeleteProductsModalComponent,
    UpdateProductsStatusModalComponent,
    FetchProductsModalComponent,
    ProductEditComponent,
    RemarksComponent,
    SpecificationsComponent,
    DeleteRemarkModalComponent,
    DeleteRemarksModalComponent,
    FetchRemarksModalComponent,
    DeleteSpecModalComponent,
    DeleteSpecsModalComponent,
    FetchSpecsModalComponent,
    EditRemarkModalComponent,
    EditSpecModalComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ECommerceRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InlineSVGModule,
    CRUDTableModule,
    NgbModalModule,
    NgbDatepickerModule
  ],
  entryComponents: [
    DeleteCustomerModalComponent,
    DeleteCustomersModalComponent,
    UpdateCustomersStatusModalComponent,
    FetchCustomersModalComponent,
    EditCustomerModalComponent,
    DeleteProductModalComponent,
    DeleteProductsModalComponent,
    UpdateProductsStatusModalComponent,
    FetchProductsModalComponent,
    DeleteRemarkModalComponent,
    DeleteRemarksModalComponent,
    FetchRemarksModalComponent,
    DeleteSpecModalComponent,
    DeleteSpecsModalComponent,
    FetchSpecsModalComponent,
    EditRemarkModalComponent,
    EditSpecModalComponent
  ]
})
export class ECommerceModule {}
