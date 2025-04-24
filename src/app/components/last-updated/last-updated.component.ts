import { Component, ViewEncapsulation, input } from '@angular/core';

import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'rb-last-updated',
  standalone: true,
  imports: [],
  template: `
    <div>Last updated: {{ date() }}</div>
    <!-- <rb-section title="Contact" display="filled">
      <div class="flex flex-col gap-3 text-sm">
        <div class="flex items-center gap-2">
          <img src="assets/email.png" class="w-4 h-4 " />
          <a href="mailto:{{ email() }}">{{ email() }}</a>
        </div>
        <div class="flex items-center gap-2">
          <img src="assets/cell-phone.png" class="w-4 h-4 " />{{ phone() }}
        </div>
        <div class="flex items-center gap-2">
          <img src="assets/location.png" class="w-4 h-4 " />
          <a
            href="https://www.google.nl/maps/place/{{ city() }}"
            target="_blank"
            >{{ city() }}, {{ country() }}</a
          >
        </div>
        @if (linkedinID(); as linkedinID) {
        <div class="flex items-center gap-2">
          <img src="assets/linkedin.png" class="w-4 h-4 " /><a
            class="hover:text-blue-600"
            target="_blank"
            title="LinkedIn"
            href="https://www.linkedin.com/in/{{ linkedinID }}/"
            >www.linkedin.com/in/{{ linkedinID }}</a
          >
        </div>
        } @if (githubID(); as githubID) {
        <div class="flex items-center gap-2">
          <img src="assets/github.png" class="w-4 h-4 " /><a
            class="hover:text-blue-600"
            target="_blank"
            title="Github"
            href="https://github.com/{{ githubID }}"
            >github.com/{{ githubID }}</a
          >
        </div>
        }
      </div>
    </rb-section> -->
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class LastUpdatedComponent {
  date = input<string>();
}
