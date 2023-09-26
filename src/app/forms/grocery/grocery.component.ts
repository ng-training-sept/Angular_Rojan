import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Card } from 'src/app/components/card/card.model';
import { CardComponent } from "../../components/card/card.component";

@Component({
    selector: 'app-grocery',
    standalone: true,
    templateUrl: './grocery.component.html',
    styleUrls: ['./grocery.component.scss'],
    imports: [CommonModule, CardComponent]
})
export class GroceryComponent implements OnInit {
  groceryCards: Card[] = [];

  ngOnInit(): void {
      this.groceryCards = [
          {
              id: '3',
              name: 'Apple',
              price: 120,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/1d/Football_Pallo_valmiina-cropped.jpg',
              description: 'Apple description'
          },
          {
              id: '4',
              name: 'Banana',
              price: 150,
              imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/AdidasEtruscoBoot.jpg/230px-AdidasEtruscoBoot.jpg',
              description: 'Banana description'
          }
      ];
  }
}
