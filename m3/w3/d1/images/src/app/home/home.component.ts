import { Component, OnInit } from '@angular/core';
import { Photo } from '../photo';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  favCounter = 0

  photos:Photo[] = []

  constructor(private photoSrv:PhotoService) { }

  ngOnInit(): void {
    this.photoSrv.getPhotos().subscribe((res)=>{

      this.photos = res.slice(0,10)

    })
    //this.favCounter = this.photoSrv.counter

    this.photoSrv.favSubject.subscribe(res=>{
      this.favCounter = res
    })
  }

  elimina(id:number){
    this.photoSrv.deletePhoto(id).subscribe(res=>{
      this.photos = this.photos.filter(p => p.id !=id)
      
    })
  }

  like(){
    this.photoSrv.addFav()    
  }

}
