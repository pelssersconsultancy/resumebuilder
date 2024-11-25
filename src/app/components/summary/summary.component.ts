import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-summary',
  standalone: true,
  imports: [],
  template: `
    <div class="flex flex-col gap-2 p-4  rounded-lg ">
      <div class="text-4xl font-bold">{{ firstName() }} {{ lastName() }}</div>
      <div class="text-2xl">{{ jobTitle() }}</div>
      <hr />
      <div>{{ summary() }}</div>
    </div>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SummaryComponent {
  jobTitle = input<string>();
  firstName = input<string>();
  lastName = input<string>();
  summary = input<string>();
}
