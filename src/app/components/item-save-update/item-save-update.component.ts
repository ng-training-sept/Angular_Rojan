import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SportsStore } from 'src/app/forms/sports/sports.store';
import { HttpClientModule } from '@angular/common/http';
import { Card } from '../card/card.model';


@Component({
  selector: 'app-item-save-update',
  standalone: true,
  imports: [CommonModule, MatDialogModule,
    MatInputModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './item-save-update.component.html',
  styleUrls: ['./item-save-update.component.scss'],
  providers: [SportsStore]

  
})
export class ItemSaveUpdateComponent{

    private readonly dialogRef = inject(MatDialogRef);
    private readonly dialogData = inject(MAT_DIALOG_DATA);
    sports!: Card;
    sportsStore = inject(SportsStore);
  itemForm!: FormGroup;
  ngOnInit(): void {
    this.initItemForm();
    this.patchItemForm();
    // this.itemForm.valueChanges.subscribe(data => console.log(data));
  }

  patchItemForm(): void {
    if (this.dialogData) {
      this.itemForm.patchValue({
        id: this.dialogData.id,
        name: this.dialogData.name,
        imageUrl: this.dialogData.imageUrl,
        price: this.dialogData.price,
        description: this.dialogData.description
      });
     
    }
  }

  onSaveOrUpdate(): void {
    if(!this.dialogData)
    {
      this.sportsStore.saveSport({...this.itemForm.value,id:Math.random.toString()});
      this.dialogRef.close({ data: this.itemForm.value });
      return;
    }
    this.sportsStore.updateSport(this.dialogData.id,this.itemForm.value);
    this.dialogRef.close({ data: this.itemForm.value }); 
  }

  initItemForm(): void {
    this.itemForm = new FormGroup({
      id: new FormControl(''),
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      imageUrl: new FormControl(''),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('')
    });
  }
}
