import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable, Input } from '@angular/core';
import { Credit } from '../model/credit';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  credit!: Credit[];
  date = new Date();
  @Input() crdt!: Credit[];

  constructor(private http: HttpClient) {
    this.allCredit().subscribe(data => {
      (data)
    });
  }

  allCredit(): Observable<any> {
    return this.http.get("./assets/credit.json")
  }

}
