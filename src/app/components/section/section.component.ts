import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-section',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col gap-2">
      @if(display === 'outline') {
      <h1
        class="uppercase text-orange-400 text-xl font-bold border-b border-orange-400"
      >
        {{ title }}
      </h1>
      } @else {
      <div class="flex">
        <div class="bg-orange-400 w-6 h-6 triangle"></div>
        <div
          class="pr-4 text-right uppercase text-xl bg-orange-400  text-white font-bold grow flex justify-end items-center"
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
      div {
        @media print {
          print-color-adjust: exact;
        }
      }

      .triangle {
        @apply w-8 h-8 bg-orange-400;
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
