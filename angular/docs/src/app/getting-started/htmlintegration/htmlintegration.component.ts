import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-htmlintegration',
  templateUrl: './htmlintegration.component.html',
  styleUrls: ['./htmlintegration.component.scss'],
})
export class HTMLIntegrationComponent implements OnInit {
  code1 = `<div class="d-flex flex-row h-300px">
    <div class="d-flex flex-column flex-row-auto w-200px">
        <div class="d-flex flex-column-auto h-50px bg-primary">
            <span class="text-white">Fixed Height</span>
        </div>

        <div class="d-flex flex-column-fluid bg-success flex-center">
            <span class="text-white">Fluid Height</span>
        </div>
    </div>

    <div class="d-flex flex-column flex-row-fluid">
        <div class="d-flex flex-column-auto h-70px bg-info flex-center">
            <span class="text-white">Fixed Height</span>
        </div>

        <div class="d-flex flex-row flex-column-fluid">
            <div class="d-flex flex-row-fluid bg-dark flex-center">
                <span class="text-white">Fluid Width</span>
            </div>

            <div class="d-flex flex-row-auto w-200px bg-warning flex-center">
                <span class="text-white">Fixed Width</span>
            </div>
        </div>
    </div>
</div>`;
  htmlVersionLink = environment.appHTMLIntegration;
  constructor() {}

  ngOnInit(): void {}
}
