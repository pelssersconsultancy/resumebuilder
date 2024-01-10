import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-personal-details',
  standalone: true,
  imports: [SectionComponent],
  template: `
    <rb-section title="Courses">
      <div class="flex flex-col gap-2">
        @if (email) {
        <div><img src="assets/email.png" />{{ email }}</div>
        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PersonalDetailsComponent {
  @Input() email?: string;
}
