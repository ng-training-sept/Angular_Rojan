import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
interface User {
  username: string;
  address: string;
  age: number;
}
@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  users: User[] = [
    { username: 'Ram', address: 'Address1', age: 25 },
    { username: 'Shyam', address: 'Address2', age: 30 },
    { username: 'Hari', address: 'Address3', age: 18 },
    { username: 'Sita', address: 'Address4', age: 25 },
    { username: 'Gita', address: 'Address5', age: 30 },
    { username: 'Rita', address: 'Address6', age: 18 },
    // Add more users as needed
  ];
}
