import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Movie still shots!';
  image1 = 'https://www.themoviedb.org/t/p/original/2PbESrE0vAPghgE62o7Xoo6l2gc.jpg';
  image2 = 'https://media.wired.com/photos/5ca648a330f00e47fd82ae77/master/pass/Culture_Matrix_Code_corridor.jpg';
  image3 = 'https://www.healthypawspetinsurance.com/blog/wp-content/uploads/2019/12/the-grinch.png';

  constructor() { }

  ngOnInit() {
  }

}