import {
  Component,
  OnInit
} from '@angular/core';

declare var $: any;



@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.scss']
})
export class DeckComponent implements OnInit {


  constructor() {}


  ngOnInit() {

    this.createCards();
    this.manipulateCard();

  }
  createCards(): void {
    $.getJSON("../../assets/data.json", function(data) {

      let cards = data.cartas;
      let randomCard = null;
      let tempCards: string[] = [];
      let deckLength = cards.length;

      for (let i = 0; i < deckLength; i++) {
        randomCard = Math.floor(Math.random() * cards.length);
        tempCards.push(cards[randomCard]);
        cards.splice(randomCard, 1);

      }

      cards = tempCards;

      for (let i = 0; i < 5; i++) {

        var cardHTML = '<div class="card" id="' + cards[i].id + '"></div>';
        $('.deckContainer').append(cardHTML);

        $("#" + cards[i].id).animate({
          left: String(i * 13) + 'px'
        }, {
          duration: 800
        })
      };
    });
  }
  manipulateCard() {
    var cnt = 0;
    $('.deckContainer').on('click', '.card', function() {

      console.log($(this).position())
      $(this).position({
        accept: ".card",
        my: "center",
        at: "center",
        of: $(".slot-pair .slot" + cnt),
        using: function(pos) {
          $(this).animate(pos, 200, "linear");
        }
      })
      cnt ++;
    })
  }
}
