import { Component } from '@angular/core';
import { ItemRecommendedInterface } from './components/item-recommended/interfaces/irecommended-item.interface';
import { TranslateService } from '@ngx-translate/core';
import { MOCK_POPULAR_ITEMS } from '../popular-barber-shops/mock';

@Component({
  selector: 'app-home-recommended',
  templateUrl: './home-recommended.component.html',
  styleUrls: ['./home-recommended.component.scss'],
})
export class HomeRecommendedComponent {
  currentSlide = 0;
  visibleItems = 2;
  recommendedItems: ItemRecommendedInterface[] = MOCK_POPULAR_ITEMS;
  currentDate!: string;

  constructor(private translate: TranslateService) {
    this.setCurrentDate();
  }

  setCurrentDate() {
    const now = new Date();
    const dayOfWeekIndex = now.getDay();
    const day = now.getDate();
    const monthIndex = now.getMonth();

    this.translate
      .get(`home.daysOfWeek.${dayOfWeekIndex}`)
      .subscribe((dayOfWeek) => {
        this.translate.get(`home.months.${monthIndex}`).subscribe((month) => {
          this.currentDate = `${dayOfWeek}, ${day} de ${month}`;
        });
      });
  }

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
    const carousel = document.querySelector('.carousel') as HTMLElement;
    const itemWidth = 230;
    carousel.style.transform = `translateX(-${
      this.currentSlide * itemWidth
    }px)`;
  }
}
