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
      new ImageItem({ src: 'assets/images/gallery/1.jpg', thumb: 'assets/images/gallery/1.jpg' }),
      new ImageItem({ src: 'assets/images/gallery/2.jpg', thumb: 'assets/images/gallery/2.jpg' }),
      new ImageItem({ src: 'assets/images/gallery/3.jpg', thumb: 'assets/images/gallery/3.jpg' }),
      new ImageItem({ src: 'assets/images/gallery/4.jpg', thumb: 'assets/images/gallery/4.jpg' }),
    ];
    const galleryRef = this.gallery.ref(this.galleryId);
    galleryRef.load(this.images);
  }

}
