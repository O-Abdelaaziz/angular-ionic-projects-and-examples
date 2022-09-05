import { Trending } from './../../models/trending.model';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  @Input()
  public sliderInputValue: Trending[];

  @Output()
  public sliderEventTrigger: EventEmitter<Trending> = new EventEmitter();

  public slideOptions: any;

  public isSmallSizeScreen: boolean;

  constructor(private platform: Platform) {}

  ngOnInit() {
    this.plateFormCheck();
    this.platform.resize.subscribe(async () => {
      this.plateFormCheck();
    });
  }

  sliderClickEventTrigger(movie: Trending) {
    this.sliderEventTrigger.emit(movie);
  }

  plateFormCheck() {
    if (this.platform.width() < 427) {
      this.slideOptions = {
        spaceBetween: 2,
        slidesPerView: 1,
      };
      this.isSmallSizeScreen = true;
    } else if (this.platform.width() < 640 && this.platform.width() > 427) {
      this.slideOptions = {
        spaceBetween: 2,
        slidesPerView: 1.4,
      };
      this.isSmallSizeScreen = true;
    } else if (this.platform.width() < 854 && this.platform.width() > 640) {
      this.slideOptions = {
        spaceBetween: 2,
        slidesPerView: 2,
      };
      this.isSmallSizeScreen = true;
    } else if (this.platform.width() < 1300 && this.platform.width() > 1200) {
      this.slideOptions = {
        spaceBetween: 2,
        slidesPerView: 1,
      };
      this.isSmallSizeScreen = false;
    } else if (this.platform.width() < 1200) {
      this.slideOptions = {
        spaceBetween: 1,
        slidesPerView: 3.2,
      };
      this.isSmallSizeScreen = true;
    } else {
      this.isSmallSizeScreen = false;
      this.slideOptions = {
        spaceBetween: 2,
        slidesPerView: 1.5,
        freeMode: true,
      };
    }
  }
}
