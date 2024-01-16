import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';

@Component({
  selector: 'gifs-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input()
  public gifCardComponent!: Gif;

  ngOnInit(): void {
    // Si es undefined se sale un throw new Error
    if(!this.gifCardComponent) throw new Error('Gif property is required');
  }

}
