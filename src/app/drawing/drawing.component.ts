import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-drawing',
  templateUrl: './drawing.component.html',
  styleUrls: ['./drawing.component.scss']
})
export class DrawingComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    $('button').click(function(){
      alert('hi');
    })

  }

}
