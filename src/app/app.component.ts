import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  faceSnaps!: FaceSnap[];

  ngOnInit() {
    this.faceSnaps= [
      {
        title:'Archibald',
       description: 'mon meilleur Amis',
       imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
        createdDate: new Date(),
        snaps: 1500,
        location: 'Paris'  
      },
      {
        title:'Goku',
        description: 'Mangas',
        imageUrl: 'https://th.bing.com/th/id/OIP.zApKikgF8_QeLAh99hxHMAHaD5?w=325&h=180&c=7&r=0&o=5&pid=1.7',
        createdDate: new Date(),
        snaps: 2000,  
        location: 'Akwa'
        },
        {
          title:'vegeta',
          description: 'Mangas',
          imageUrl: 'https://th.bing.com/th/id/OIP.5rYUcCwnshwplaumqgrPxAHaJ4?w=190&h=253&c=7&r=0&o=5&pid=1.7',
          createdDate: new Date(),
          snaps: 100,  
          }
    ];
  }
}
