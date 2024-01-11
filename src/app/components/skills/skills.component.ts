import { Component, Input, ViewEncapsulation } from '@angular/core';

import { SectionComponent } from '../section/section.component';
import { Skill } from 'src/app/models/resume.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'rb-skills',
  standalone: true,
  imports: [SectionComponent, NgClass],
  template: `
    <rb-section title="{{ title }}" display="filled">
      <div class="flex flex-col gap-3">
        @for (skill of skills; track skill) {
        <div class="flex flex-col">
          <h3 class="font-bold">{{ skill.name }}</h3>
          @if(display === 'continuous') {
          <div class="border border-yellow-400">
            <div
              [ngClass]="[
                'bg-yellow-400',
                'h-4',
                levelsDictionary[skill.level.name]
              ]"
            ></div>
          </div>
          } @if(display === 'discrete') {
          <div class="flex gap-2">
            <div
              class="inline-block border border-yellow-400 h-4 w-4 rounded-full"
              [class.bg-yellow-400]="skill.level.value >= 1"
            ></div>
            <div
              class="inline-block border border-yellow-400 h-4 w-4 rounded-full"
              [class.bg-yellow-400]="skill.level.value >= 2"
            ></div>
            <div
              class="inline-block border border-yellow-400 h-4 w-4 rounded-full"
              [class.bg-yellow-400]="skill.level.value >= 3"
            ></div>
            <div
              class="inline-block border border-yellow-400 h-4 w-4 rounded-full"
              [class.bg-yellow-400]="skill.level.value >= 4"
            ></div>
            <div
              class="inline-block border border-yellow-400 h-4 w-4 rounded-full"
              [class.bg-yellow-400]="skill.level.value >= 5"
            ></div>
          </div>
          }
        </div>

        }
      </div>
    </rb-section>
  `,
  styles: [
    `
      div {
        @media print {
          print-color-adjust: exact;
        }
      }
    `,
  ],
  encapsulation: ViewEncapsulation.Emulated,
})
export class SkillsComponent {
  @Input() display: 'discrete' | 'continuous' = 'discrete';
  @Input() title: string;
  @Input() skills: Skill[];

  levelsDictionary: Record<string, string> = {
    EXPERT: 'w-full',
    PROFICIENT: 'w-4/5',
    COMPETENT: 'w-3/5',
    BEGINNER: 'w-2/5',
    NOVICE: 'w-1/5',
  };
}
