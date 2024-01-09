import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-picture',
  standalone: true,
  imports: [],
  template: `
    <img
      class="mt-2 w-[200px] h-[200px] p-1 ring-2 ring-gray-300 dark:ring-gray-500"
      [src]="href"
      alt="Bordered avatar"
    />
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PictureComponent {
  @Input() href: string;
}
