import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { SpecialDirective } from 'src/app/directives/special.directive';
// import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReversePipe } from "../../pipes/reverse.pipe";
import { ImpureDemoPipe } from "../../pipes/impure-demo.pipe";
import { Card } from './card.model';
import { Router, ActivatedRoute } from '@angular/router';
import { MatDialogModule, MatDialog } from '@angular/material/dialog';
import { ItemSaveUpdateComponent } from '../item-save-update/item-save-update.component';

@Component({
    selector: 'app-card',
    standalone: true,
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    imports: [CommonModule, MatCardModule, FormsModule, SpecialDirective, MatInputModule, ReversePipe, ImpureDemoPipe,MatDialogModule]
})
export class CardComponent {
  // title: string = 'Data Binding';
  // birthday = new Date(1988, 3, 15);
  // port: number = 4200;
  // server: {id: number, status: string} = {id: 10, status: 'offline'};
  // getServerStatus(): string {
  //   return this.server.status;
  // }
  // imageUrl: string = 'https://material.angular.io/assets/img/examples/shiba2.jpg';
  // imageWidth: string = '100px'; 
  // imageHeight: string = 'auto'; 
  // isLikeDisabled: boolean = false;
  // isShareDisabled: boolean = true;
  // count: number = 0;
  // onLike(): void {
  //   this.count++
  // }
  // imageStyle:string = "width:100px;height:auto";

  // titles: string[] = ['Maia', 'Dylan', 'Minoru', 'Amarachi', 'Ceallagh'];

  // isSpecial: boolean = true;


  // removeBtnStyle:string = "width: 50%;margin-top: 10px;color:red;";
  // @Input({required: true}) newTitles: string[] = [];

  // @Output() titleEvent$ = new EventEmitter<string>();

  // onAddCard(title: string): void {
  //   this.titleEvent$.emit(title);
  // }

  // @Output() removeEvent$ = new EventEmitter<number>();
  // onRemoveCard(i: number): void {
  //   this.removeEvent$.emit(i);
  // }

  // toggleStatus(): void {
  //   this.server.status = this.server.status === 'offline' ? 'online' : 'offline';
  // }
  @Input() cards: Card[] = [];

  private readonly router = inject(Router);
  private readonly route = inject(ActivatedRoute);
  private readonly dialog = inject(MatDialog);
  
  // ['mypage', 'child'] /mypage/child
  goToItemDetails(data: Card): void {
    // this.router.navigateByUrl(`/sports/card-item/${data.id}`, {state: {data}});
    this.router.navigate(['card-item', data.id], {state: {data}, relativeTo: this.route}).then();
  }

  openItemDialog(data: Card): void {
    const dialogRef = this.dialog.open(ItemSaveUpdateComponent, {
      data // initial data to dialog (remember dialogData in ItemSaveUpdateComponent)
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result?.data) {
        // emit update event and call service from parent to update card
      }
    });
  }
}
