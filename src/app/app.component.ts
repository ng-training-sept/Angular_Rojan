import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { HeaderComponent } from "./components/header/header.component";
import { RouterModule, RouterOutlet } from '@angular/router';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, CardComponent, DirectivesComponent, HeaderComponent, RouterOutlet]
})
export class AppComponent {
  title = 'angularBasic';
  cardsTitle: string[] = ['Ram', 'Shyam', 'Hari', 'Sita', 'Gita'];
  addCard(title: string) {
    this.cardsTitle.push(title);
  }
  removeCard(i:number){
    this.cardsTitle.splice(i,1);
  }
}
