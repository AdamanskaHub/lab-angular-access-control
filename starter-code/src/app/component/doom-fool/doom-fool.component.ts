import { Component, OnInit } from '@angular/core';
import { DoomClass } from '../../ImInPain/itsHard.service';

@Component({
  selector: 'app-doom-fool',
  templateUrl: './doom-fool.component.html',
  styleUrls: ['./doom-fool.component.css'],
  providers: [DoomClass]
})
export class DoomFoolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
