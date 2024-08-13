import { Component } from '@angular/core';
import { MOCK_RECOMMENDED_ITEMS } from './components/item-recommended/mock';
import { ItemRecommendedInterface } from './components/item-recommended/interfaces/irecommended-item.interface';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home-recommended',
  templateUrl: './home-recommended.component.html',
  styleUrls: ['./home-recommended.component.scss'],
})
export class HomeRecommendedComponent {
  currentSlide = 0;
  recommendedItems: ItemRecommendedInterface[] = MOCK_RECOMMENDED_ITEMS;
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

  prev() {
    const items = document.querySelectorAll('.carousel-item');
    const itemsToShow = 2;
    this.currentSlide =
      this.currentSlide === 0
        ? items.length - itemsToShow
        : this.currentSlide - 1;
    this.updateCarousel();
  }

  next() {
    const items = document.querySelectorAll('.carousel-item');
    const itemsToShow = 2;
    this.currentSlide =
      this.currentSlide === items.length - itemsToShow
        ? 0
        : this.currentSlide + 1;
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
