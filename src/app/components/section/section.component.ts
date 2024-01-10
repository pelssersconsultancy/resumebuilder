import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-section',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col gap-2">
      @if(display === 'outline') {
      <h1 class="uppercase text-red-400 font-bold border-b border-red-400">
        {{ title }}
      </h1>
      } @else {
      <div class="flex">
        <div class="bg-red-400 w-6 h-6 triangle"></div>
        <div
          class="pr-4 text-right uppercase bg-red-400  text-white font-bold grow"
        >
          {{ title }}
        </div>
      </div>

      }

      <ng-content></ng-content>
    </section>
  `,
  styles: [
    `
      .triangle {
        @apply w-6 h-6 bg-red-400;
        clip-path: polygon(0% 50%, 100% 100%, 100% 0%);
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SectionComponent {
  @Input() display: 'outline' | 'filled' = 'outline';
  @Input() title: string;
}
