import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Contact } from '../models/contact';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class PhonebookService {
  private URL: string = "http://www.mocky.io/v2/581335f71000004204abaf83";

  constructor(private http:Http) {}

  getContacts(): Observable<Contact[]> {
    return this.http.get('http://www.mocky.io/v2/581335f71000004204abaf83')
      .map(res => res.json().contacts);
  }
}
