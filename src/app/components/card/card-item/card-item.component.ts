import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Card } from '../card.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule,MatCardModule,
    MatButtonModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss']
})
export class CardItemComponent implements OnInit{
  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
  }
}
