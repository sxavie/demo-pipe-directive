import { Component } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { FieldsetModule } from 'primeng/fieldset';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { Observable, Subject, Subscriber, Subscription, interval, takeUntil, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-advanced',
  standalone: true,
  imports: [ PanelModule,  FieldsetModule, CommonModule, ButtonModule],
  templateUrl: './advanced.component.html',
  styleUrl: './advanced.component.css'
})
export class AdvancedComponent {

  constructor( private http: HttpClient ) {}

    // i18nSelect
    public gender: 'male'|'female'|'them' = 'male';
    public inviteMap  = {
      male:   'invitarlo',
      female: 'invitarla',
      them:   'invitarlos'
    };

    changeGender(gender: 'male'|'female'|'them'): void {
      this.gender = gender
    }

    // i18nPlural
    public messages: string[] = ['Msg-0','Msg-1','Msg-2','Msg-3','Msg-4','Msg-5']
    public messageMapping  = {
      '=0': 'no hay mensajes.',
      '=1': 'tenemos 1 mensaje',
      '=2': 'tenemos 2 mensajes',
      'other': 'tenemos # mensajes',
    }

    deleteMessage() {
      this.messages.shift()
    }

    // json pipe
    public person = {
      name: 'Sergi Feijoo',
      age: 26,
      address: 'Paris, Francia'
    }


    // Async Pipe
    public myObservableTimer: Observable<number> = interval(2000).pipe(
      tap( value => console.log('tap: ', value))
    );

    public myObservableTimer2: Observable<number> = interval(1000).pipe(
      tap( value => console.log('tap: ', value))
    );


    public users$:any;
    ngOnInit() {
      this.users$ = this.getUsers();
    }

    getUsers():Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/users');
    }

}
