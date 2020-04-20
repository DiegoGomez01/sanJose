import { Component, OnInit } from '@angular/core';
import { Gallery, GalleryItem, ImageItem } from '@ngx-gallery/core';

@Component({
  selector: 'app-neighborhood',
  templateUrl: './neighborhood.component.html',
  styleUrls: ['./neighborhood.component.css']
})
export class NeighborhoodComponent implements OnInit {
  galleryId = 'myLightbox';
  images: GalleryItem[];

  constructor(public gallery: Gallery) { }

  ngOnInit() {
    this.images = [
      new ImageItem({ src: '../../assets/images/aboutUs.png', thumb: '../../assets/images/aboutUs.png' }),
      new ImageItem({ src: '../../assets/images/general.jpg', thumb: '../../assets/images/general.jpg' }),
    ];
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
  }

}
