import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-picture',
  standalone: true,
  imports: [],
  template: `<img
    [src]="href()"
    alt="Profile Picture"
    class="w-52 rounded-lg"
  /> `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PictureComponent {
  href = input<string>();
}
