import { FormGroup } from '@angular/forms';

export interface IFilterView {
  filterGroup: FormGroup;
  ngOnInit(): void;
  filterForm(): void;
  filter(): void;
}
