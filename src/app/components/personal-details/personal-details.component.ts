import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-personal-details',
  standalone: true,
  imports: [SectionComponent],
  template: `
    <rb-section title="Personal Details">
      <div class="flex flex-col gap-3">
        <div class="flex items-center gap-2">
          <img src="assets/email.png" class="w-4 h-4 " />{{ email }}
        </div>
        <div class="flex items-center gap-2">
          <img src="assets/cell-phone.png" class="w-4 h-4 " />{{ phone }}
        </div>
        <div class="flex items-center gap-2">
          <img src="assets/location.png" class="w-4 h-4 " />{{ city }},
          {{ country }}
        </div>
        @if (linkedinID) {
        <div class="flex items-center gap-2">
          <img src="assets/linkedin.png" class="w-4 h-4 " /><a
            class="hover:text-blue-600"
            target="_blank"
            title="LinkedIn"
            href="https://www.linkedin.com/in/{{ linkedinID }}/"
            >{{ linkedinID }}</a
          >
        </div>
        } @if (githubID) {
        <div class="flex items-center gap-2">
          <img src="assets/github.png" class="w-4 h-4 " /><a
            class="hover:text-blue-600"
            target="_blank"
            title="Github"
            href="https://github.com/{{ githubID }}"
            >{{ githubID }}</a
          >
        </div>
        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class PersonalDetailsComponent {
  @Input() email: string;
  @Input() phone: string;
  @Input() city: string;
  @Input() country: string;
  @Input() linkedinID?: string;
  @Input() githubID?: string;
}
