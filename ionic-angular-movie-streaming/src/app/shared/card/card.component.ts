import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input()
  public title: string;
  @Input()
  public image: string;
  @Input()
  public voteRating: string;
  @Input()
  public model: string;

  @Output()
  public cardEventTrigger: EventEmitter<any> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  cardClickEventTrigger(model) {
    this.cardEventTrigger.emit(model);
  }
}
