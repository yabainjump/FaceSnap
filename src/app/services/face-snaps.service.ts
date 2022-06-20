import { Injectable, Input } from "@angular/core";
import { FaceSnap } from "../models/face-snap-model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[]  = [
        {
          id: 1,
          title:'Archibald',
         description: 'mon meilleur Amis',
         imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
          createdDate: new Date(),
          snaps: 1500,
          location: 'Paris'  
        },
        {
          id: 2,
          title:'Goku',
          description: 'Mangas',
          imageUrl: 'https://th.bing.com/th/id/OIP.zApKikgF8_QeLAh99hxHMAHaD5?w=325&h=180&c=7&r=0&o=5&pid=1.7',
          createdDate: new Date(),
          snaps: 2000,  
          location: 'Akwa'
          },
          {
            id: 3,
            title:'vegeta',
            description: 'Mangas',
            imageUrl: 'https://th.bing.com/th/id/OIP.5rYUcCwnshwplaumqgrPxAHaJ4?w=190&h=253&c=7&r=0&o=5&pid=1.7',
            createdDate: new Date(),
            snaps: 100,  
            }
      ];
      getAllFaceSnaps(): FaceSnap[] {
          return this.faceSnaps;
      }

      getFaceSnapById(faceSnapId: number): FaceSnap{
        const faceSnap = this.faceSnaps.find(FaceSnap => FaceSnap.id === faceSnapId );
        if(!faceSnap){
          throw new Error('FaceSnap not found');
        }else{
          return faceSnap;
        }
      }

      snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap' ): void{
        const faceSnap = this.getFaceSnapById(faceSnapId);
        snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
      }
}