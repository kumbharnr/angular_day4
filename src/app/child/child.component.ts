import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})

export class ChildComponent implements OnInit {

  constructor() { }
  
  

  ngOnInit(): void {

    
  }
  @Output() messageToEmit = new EventEmitter;

  strMessageToParent="";
  sendMessageToParent()
  {
    this.messageToEmit.emit(this.strMessageToParent);
  }
  

}

