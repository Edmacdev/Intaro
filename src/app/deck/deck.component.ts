import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

declare var $:any;



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {



  constructor(private cardsService:CardsService) { }


  ngOnInit() {
  console.log(this.cardsService.fetchJSONData())

    //this.createCards();
  }
  createCards(): void{
    var cards:string[] = [];

    $.getJSON( "../assets/data.json", function( data ) {

      for (let i=0; i<data.cartas.length; i++){

      var cardHTML = '<div class="card" id="' + data.cartas[i].id + '"';
      $('.deckContainer').append(data.cartas[i].id);
      };

    });



  }


}
