import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { HighlightJsDirective } from 'ngx-highlight-js';

export interface heroInterface {
  name: string,
  canFly: boolean
}

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [ CommonModule, ButtonModule, FieldsetModule, PanelModule, HighlightJsDirective],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {


  public heroes: heroInterface[] = [
    {name: 'Spiderman', canFly: false},
    {name: 'Wolverine', canFly: false},
    {name: 'Thor', canFly: false},
    {name: 'Ironman', canFly: false},
    {name: 'Superman', canFly: true},
  ]

  public favoriteHero: heroInterface | null = null;

  public isOnline = true;
;
  public userStatus = 'Online'

  setStatus(status:number):void {
    this.isOnline = (status === 1) ? true : false;
  }

  setCurrentHero(hero: heroInterface) {
    this.favoriteHero = hero
  }

  // If Snippets
  public commonIfCode = `<ul>
  <div *ngFor="let hero of heroes">
    <li *ngIf="hero.canFly">
      {{ hero.name }}
    </li>
  </div>
</ul>`

  public newFlowIfCode = `<ul>
  @for( hero of heroes; track hero ) {
    @if( hero.canFly ) {
      <li> {{ hero.name }} </li>
    }
  }
</ul>`

  // If Else
  public commonifElseCode = ` <div *ngIf="isOnline; else offlineBlock">
  <span> ●  User is Online </span>
</div>

<ng-template #offlineBlock>
  <span> ● User is Offline </span>
</ng-template>`

  public newifElseCode = `@if( isOnline ) {
  <span> ● User is Online </span>
} @else {
  <span> ● User is Offline </span>
}`

  // For Snippets
  public commonForCode = `<ul>
  <li *ngFor="let hero of heroes">
    {{ hero.name }}
  </li>
</ul>`

  public newFlowForCode = `<ul>
  @for( hero of heroes; track hero ) {
    <li> {{ hero.name }} </li>
  }
</ul>`

  // Switch Snippets
  public commonSwitchCode = `<div [ngSwitch]="favoriteHero.name">
  <img *ngSwitchCase="'Spiderman'"  src=".../assets/spider-man.png">
  <img *ngSwitchCase="'Wolverine'"  src=".../assets/wolverine.png">
  <img *ngSwitchCase="'Thor'"       src=".../assets/thor.png">
  <img *ngSwitchCase="'Ironman'"    src=".../assets/iron-man.png" >
  <img *ngSwitchCase="'Superman'"   src=".../assets/super-man.png">
  <div *ngSwitchDefault>
    <h1> Select your favorite hero </h1>
  </div>
</div>`

  public newSwitchForCode = ` @switch (favoriteHero?.name) {
  @case ('Spiderman') {
    <img src=".../assets/spider-man.png">
  }
  @case ('Wolverine') {
    <img src=".../assets/wolverine.png">
  }
  @case ('Thor') {
    <img src=".../assets/thor.png">
  }
  @case ('Ironman') {
    <img src=".../assets/iron-man.png">
  }
  @case ('Superman') {
    <img src=".../assets/super-man.png">
  }
  @default {
    <h1> Select your favorite hero </h1>
  }
}`

}
