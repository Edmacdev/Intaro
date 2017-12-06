import { Component, OnInit } from '@angular/core';
import { CardsService } from '../cards.service';

declare var $:any;



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {


  constructor() { }


  ngOnInit() {
    this.createCards();
    $('.deckContainer').on('click',$('.card'),function(){
      console.log($(this))
    })

  }
  createCards(): void{
    $.getJSON( "../../assets/data.json", function( data ) {

      let cards = data.cartas;
      let randomCard = null;
      let tempCards:string[] = [];
      let deckLength = cards.length;

      for (let i=0; i<deckLength; i++){
        randomCard = Math.floor(Math.random()*cards.length);
        tempCards.push(cards[randomCard]);
        cards.splice(randomCard,1);

      }

      cards = tempCards;

      for (let i=0; i<cards.length; i++){

      var cardHTML = '<div class="card" id="' + cards[i].id + '"></div>';
      $('.deckContainer').append(cardHTML);

      $("#" + cards[i].id).animate({left:String(i*13) + 'px'},{duration:800})
      };
    });
  }

}
