import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-section',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col gap-2">
      <h1 class="uppercase text-red-400 font-bold border-b border-red-400">
        {{ title }}
      </h1>
      <ng-content></ng-content>
    </section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SectionComponent {
  @Input() title: string;
}
