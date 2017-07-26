import { Component, OnInit } from '@angular/core';
import { DoomClass } from '../../ImInPain/itsHard.service';

@Component({
  selector: 'app-doom-fool',
  templateUrl: './doom-fool.component.html',
  styleUrls: ['./doom-fool.component.css']
  //providers: [DoomClass]
})
export class DoomFoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(myForm) {
    // console.log(myForm);
  }

  addAccessItem(one, two) {
    console.log("it does work + " + one +"  " + two);
    //this.lol.logMessages.push(one);
    
  }

  something(text) {
    console.log(text + "jfiegjkr"); 
  }

}
