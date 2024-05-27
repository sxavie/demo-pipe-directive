import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel'
import { CardModule } from 'primeng/card';


@Component({
  selector: 'app-pipes',
  standalone: true,
  imports: [ CommonModule, CardModule, PanelModule ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  name: string = 'Sergi Feijoo'
  city: string = 'PARIS'
  country: string = 'FrAnCIa'

  gretting: string = `Hola mi nombre es ${this.name} y vivo en ${this.city} ${this.country}`

  today = new Date();

  netIncome = 853768988
  precentage = 84

}
