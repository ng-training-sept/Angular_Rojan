import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Card } from '../card.model';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SportsStore } from 'src/app/forms/sports/sports.store';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-card-item',
  standalone: true,
  imports: [CommonModule,MatCardModule,
    MatButtonModule,HttpClientModule],
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.scss'],
  providers:[SportsStore]
})
export class CardItemComponent implements OnInit{
  id!: string;
  data!: Card;
  private readonly route = inject(ActivatedRoute);
  readonly sportsStore = inject(SportsStore);
  private readonly router = inject(Router);
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.id = id;
    }
   this.data = history.state?.data;
  }

  onDelete(): void {
    
    this.sportsStore.removeSport(this.data.id);
    this.router.navigateByUrl(`/sports`);
    
  }

  
}
