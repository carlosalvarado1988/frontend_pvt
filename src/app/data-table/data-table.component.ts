import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'data-table',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css',
})
export class DataTableComponent {
  email = '';
  isActive = true;
  isLoading = true;
  onClick = ($event: any) => {
    console.log($event);
  };
  onKeyUp = () => {
    console.log('double binding this.email:', this.email);
    this.email = '';
  };
}
