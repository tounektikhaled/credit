export class Credit{

    id!:Number;
    date!:String;
    type!:String;
    montant!:Number;
    

    constructor(id:Number,date:String,type:String,montant:Number){

        this.id=id;
        this.date=date;
        this.type=type;
        this.montant=montant;
        

    }
}