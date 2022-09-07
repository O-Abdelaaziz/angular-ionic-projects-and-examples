import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.page.html',
  styleUrls: ['./home2.page.scss'],
})
export class Home2Page implements OnInit {
  public subjects: any;
  constructor() {}

  ngOnInit(): void {
    this.subjects = [
      {
        img: 'assets/images/english.png',
        name: 'English',
      },
      {
        img: 'assets/images/chemistry.png',
        name: 'Chemistry',
      },
      {
        img: 'assets/images/statistics.png',
        name: 'Statistics',
      },
      {
        img: 'assets/images/maths.png',
        name: 'Mathematics',
      },
      {
        img: 'assets/images/physics.png',
        name: 'Physics',
      },
      {
        img: 'assets/images/sports.png',
        name: 'Sports',
      },
    ];
  }
  goToSubject() {
    console.log('clicked');
  }
}
