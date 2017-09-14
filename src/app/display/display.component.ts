import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  firstName: string;
  lastName: string;
  studNo: string;
  studProg: string;
  studYr: string;

nameCollection: Array <object> = [];
constructor (private dataStore: SharedService){}

ngOnInit() {
this.firstName = this.dataStore.shFirstName;
this.lastName = this.dataStore.shLastName;
this.nameCollection = this.dataStore.getNames();
}

}
