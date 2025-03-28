import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-image-carousel',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './image-carousel.component.html',
  styleUrl: './image-carousel.component.css'
})
export class ImageCarouselComponent {
  @Input() images: string[] = [];
  currentIndex: number = 0;

  first() {
    this.currentIndex = 0;
  }

  last() {
    this.currentIndex = this.images.length - 1;
  }

  prev() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  shuffle(){
    this.images = [...this.images].sort(() => Math.random() - 0.5);
    this.currentIndex = 0;
  }
}