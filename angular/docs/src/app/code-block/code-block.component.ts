import {
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-code-block',
  templateUrl: './code-block.component.html',
  styleUrls: ['./code-block.component.scss'],
})
export class CodeBlockComponent implements OnInit {
  @Input() code: string;
  @Input() language: string;
  @HostBinding('class') class = 'py-5';
  copyText: 'copy' | 'copied' = 'copy';
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  copy() {
    const create_copy = (e: ClipboardEvent) => {
      if (e.clipboardData) {
        e.clipboardData.setData('text/plain', this.code);
        e.preventDefault();
        document.removeEventListener('copy', create_copy);
      }
    };

    document.addEventListener('copy', create_copy);
    document.execCommand('copy');
    this.copyText = 'copied';
    setTimeout(() => {
      this.copyText = 'copy';
      this.cdr.detectChanges();
    }, 1500);
  }
}
