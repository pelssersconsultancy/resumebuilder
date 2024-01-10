import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'rb-tags',
  standalone: true,
  imports: [],
  template: `
    <ul class="flex gap-1">
      @for (tag of tags; track tag) {
      <li class="py-1 px-2 rounded-md bg-yellow-300">{{ tag }}</li>
      }
    </ul>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class TagsComponent {
  @Input() tags: string[];
}
