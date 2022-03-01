import { Component, OnInit, Output } from '@angular/core';
import { Credit } from '../model/credit';
import { ServiceService } from '../service/service.service';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.scss']
})
export class CreditComponent implements OnInit {
  credit!:Credit[];
  @Output() crdt=new Credit(0,'','',0);
  

  constructor(private servCredit:ServiceService) { }

  ngOnInit(): void {
    this.listCredit();
   ;
    
  }

  listCredit(){

    this.credit=this.servCredit.allCredit();
    
    
  }
  onSelect(){
    console.log(this.crdt);
    
  }
}
