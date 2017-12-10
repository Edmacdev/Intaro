import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var bxSlider =
    $('.slider').bxSlider({
       //wrapperClass: 'bxslider'
       adaptiveHeight: true,
       infiniteLoop: false,
       pager: false,
       onSlideBefore: function(){

       },
       onSlideAfter: function(slideElement, oldIndex, newIndex){

         $('#slide-' + String(oldIndex)).removeClass('selected');
         $('#slide-' + String(newIndex)).addClass('selected');

       }
    });

  }

}
