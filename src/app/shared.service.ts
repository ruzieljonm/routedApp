import { Injectable } from '@angular/core';

@Injectable()
export class SharedService {

  shNameCollection: Array<object> = [];
  nameObject: {firstName: string, lastName:string, studno:string, studprog:string, studyr:string};

  constructor() { }

  addNewName (firstname: string, lastname:string, studno:string, studprog:string, studyr:string){
        this.nameObject= {  
          firstName: firstname,
          lastName: lastname,
          studNo: studno,
          studProg: studprog,
          studYr: studyr

         };
    this.shNameCollection.push(this.nameObject);
  }

  getNames(): Array<object>{
    return this.shNameCollection;
  }
}




