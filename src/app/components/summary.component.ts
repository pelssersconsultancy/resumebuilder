import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-summary',
  standalone: true,
  imports: [],
  template: ` <div></div> `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SummaryComponent {
  @Input() title: string;
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() phone: string;
  @Input() linkedinID?: string;
  @Input() summary: string;
}
