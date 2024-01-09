import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-summary',
  standalone: true,
  imports: [],
  template: `
    <div class="flex bg-orange-700">
      <div>1</div>
      <div>2</div>
    </div>
  `,
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
