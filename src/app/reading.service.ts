import { Injectable } from '@angular/core';

@Injectable()
export class ReadingService {

  constructor() { }
  selectedCards:object[] = [];

  getSelectedCards(){
    return this.selectedCards;
  }
  setSelectedcards(selectedCards){
    this.selectedCards = selectedCards;
  }

}
