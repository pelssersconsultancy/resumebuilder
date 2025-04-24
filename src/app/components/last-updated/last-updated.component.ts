import { Component, ViewEncapsulation, input } from '@angular/core';

import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-last-updated',
  standalone: true,
  imports: [],
  template: `
    <div>Last updated: {{ date() }}</div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LastUpdatedComponent {
  date = input<string>();
}
