
import { stringify } from '@angular/compiler/src/util';
import { Injectable, Input } from '@angular/core';
import { Credit } from '../model/credit';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  credit!:Credit[];
  date=new Date();
 @Input() crdt!:Credit[];

  constructor() { }

  ajoutCredit(){
    
  }

  allCredit(): Credit[]{
     return this.credit=[
       {id:1,date:'12-02-2022',type:'personne',montant:10234},
       {id:2,date:'10-02-2022',type:'Bank',montant:18764},
       {id:3,date:'12-12-2022',type:'personne',montant:23},
       {id:4,date:'05-02-2022',type:'personne',montant:6664},
       {id:5,date:'12-02-2022',type:'Bank',montant:10234},  
     ]
   
   
    
  }
  
}
