import { Injectable } from '@angular/core';

declare var $:any;

@Injectable()
export class CardsService {

  constructor() { }

  fetchJSONData(){
    var jsonData;
    $.getJSON( "../assets/data.json", function( data ) {
    jsonData = data.cartas[0].id;
    return jsonData;
    });
  }
}
