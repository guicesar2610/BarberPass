import { Component } from '@angular/core';
import { ItemRecommendedInterface } from '../home-recommended/components/item-recommended/interfaces/irecommended-item.interface';
import { MOCK_POPULAR_ITEMS } from './mock';

@Component({
  selector: 'app-popular-barber-shops',
  templateUrl: './popular-barber-shops.component.html',
  styleUrls: ['./popular-barber-shops.component.scss'],
})
export class PopularBarberShopsComponent {
  currentSlide = 0;
  visibleItems = 7;
  recommendedItems: ItemRecommendedInterface[] = MOCK_POPULAR_ITEMS;

  get totalSlides(): number {
    return this.recommendedItems.length - this.visibleItems;
  }

  previousItem() {
    this.currentSlide =
      this.currentSlide === 0 ? this.totalSlides : this.currentSlide - 1;
    this.updateCarousel();
  }

  nextItem() {
    this.currentSlide =
      this.currentSlide === this.totalSlides ? 0 : this.currentSlide + 1;
    this.updateCarousel();
  }

  updateCarousel() {
    const carousel = document.querySelector(
      '.carousel-item-popular',
    ) as HTMLElement;
    const itemWidth = 230;
    carousel.style.transform = `translateX(-${
      this.currentSlide * itemWidth
    }px)`;
  }
}
