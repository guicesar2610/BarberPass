import { Component, Input } from '@angular/core';
import { ItemRecommendedInterface } from './interfaces/irecommended-item.interface';

@Component({
  selector: 'app-item-recommended',
  templateUrl: './item-recommended.component.html',
  styleUrls: ['./item-recommended.component.scss'],
})
export class ItemRecommendedComponent {
  @Input() item!: ItemRecommendedInterface;
}
