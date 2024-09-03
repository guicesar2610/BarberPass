import { Component } from '@angular/core';
import { ItemRecommendedInterface } from '../home-recommended/components/item-recommended/interfaces/irecommended-item.interface';
import { MOCK_POPULAR_ITEMS } from '../popular-barber-shops/mock';

@Component({
  selector: 'app-most-visited-barber-shop',
  templateUrl: './most-visited-barber-shop.component.html',
  styleUrls: ['./most-visited-barber-shop.component.scss'],
})
export class MostVisitedBarberShopComponent {
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
      '.carousel-item-most-visited',
    ) as HTMLElement;
    const itemWidth = 230;
    carousel.style.transform = `translateX(-${
      this.currentSlide * itemWidth
    }px)`;
  }
}
