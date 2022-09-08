import { Component, OnInit } from '@angular/core';
import { SegmentChangeEventDetail, ToastController } from '@ionic/angular';

export interface Chapters {
  name: string;
  img: string;
  percentage: number;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public title: string;
  public segmentId = 'chapters';
  public chapters: Chapters[] = [];

  constructor(private toastController: ToastController) {}

  ngOnInit(): void {
    this.chapters = [
      {
        name: 'Theory of light',
        img: 'assets/images/light.jpg',
        percentage: 85,
      },
      {
        name: 'Theory of water',
        img: 'assets/images/water.jpg',
        percentage: 50,
      },
      {
        name: 'Theory of motion',
        img: 'assets/images/motion.jpg',
        percentage: 55,
      },
      {
        name: 'Theory of sound',
        img: 'assets/images/sound.png',
        percentage: 44,
      },
    ];
  }

  public segmentChanged(event: CustomEvent<SegmentChangeEventDetail>) {
    console.log(event.detail.value);
    this.segmentId = event.detail.value;
    this.presentToast('bottom', 'selected tab is: ' + this.segmentId);
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', message: string) {
    const toast = await this.toastController.create({
      message,
      duration: 1500,
      position,
    });

    await toast.present();
  }
}
