
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HighlightJsDirective } from 'ngx-highlight-js';

import { CardModule } from 'primeng/card';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-attribute',
  standalone: true,
  imports: [CommonModule, FormsModule, PanelModule, CardModule, HighlightJsDirective, InputTextModule],
  templateUrl: './attribute.component.html',
  styleUrl: './attribute.component.css'
})
export class AttributeComponent {
  searchValue = 'initial value';
  nameValue = 'Kendrick Lamar';
  countryValue = 'Netherlands';

  countryValueChange(value: string) {
    this.countryValue = value
  }

  // code snippets
  getFormModuleImportCode():string {
    return `import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-example',
  standalone: true,
  imports: [FormsModule], //<--- import FormsModule
  templateUrl: './example.component.html',
  styleUrl: './example.component.css'
})
export class ExampleComponent { }`
  }
  getOneWayBindingCode = () => `<input
  type="text"
  [ngModel]="searchValue"
/>`
  getTwoWayBindingCode = () => `<input
  type="text"
  [(ngModel)]="nameValue"
/>`
  getNgModelChangeCode = () => `<input
  type="text"
  [ngModel]="countryValue"
  (ngModelChange)="countryValueChange($event)"
/>`
  getNgClassCode = () => `<div [ngClass]="(countryValue === 'Mexico') ? 'mexico-css-class' : ''  ">
  <span class="left-side"></span>
  <span class="middle"> {{ countryValue }} </span>
  <span class="right-side"></span>
</div>`
  getNgClassCssCode = () => `.mexico-css-class {
    .left-side {
      background-color: #005d40;
    }
    .middle {
      background-color: white;
      color: black;
    }
    .right-side {
      background-color: #ce1127;
    }
  }`
  getNgStyleInlineCode = () => `<div [ngStyle]="{'background-color':'green'}">
  <p> {{ nameValue }} </p>
</div>`;
  getNgStyleConditional = () => `<div [ngStyle]="{'background-color' : nameValue === 'Ronaldo' ? 'red' : 'blue'}">
  <p> {{ nameValue }} </p>
</div>`
}
