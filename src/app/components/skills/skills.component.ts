import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { Level, Skill } from 'src/app/models/resume.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rb-skills',
  standalone: true,
  imports: [SectionComponent, NgClass],
  template: `
    <rb-section title="Skills">
      <div class="flex flex-col gap-3">
        @for (skill of skills; track skill) {
        <div class="flex flex-col">
          <h3 class="font-bold">{{ skill.name }}</h3>
          <div class="border border-red-400">
            <div
              [ngClass]="['bg-red-400', 'h-4', levelsDictionary[skill.level]]"
            ></div>
          </div>
        </div>

        }
      </div>
    </rb-section>
  `,
  styles: [],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent {
  @Input() skills: Skill[];

  levelsDictionary: Record<Level, string> = {
    EXPERT: 'w-full',
    PROFICIENT: 'w-4/5',
    COMPETENT: 'w-3/5',
    BEGINNER: 'w-2/5',
    NOVICE: 'w-1/5',
  };
}
