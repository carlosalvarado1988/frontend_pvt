import { Component, OnInit } from '@angular/core';
import { ProvidersService } from '../providers.service';

import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'search-form',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatButtonModule,
  ],
  templateUrl: './search-form.component.html',
  styleUrl: './search-form.component.scss',
})
export class SearchFormComponent implements OnInit {
  categories: any = {};
  startDate?: string;
  endDate?: string;

  constructor(private service: ProvidersService) {}

  async ngOnInit() {
    this.categories = await this.service.getCategories();
  }

  onSubmit(form: NgForm): void {
    console.log('Form Data:', form.value);
  }

  isFormValid(form: NgForm): boolean | null {
    return (
      form.dirty && Object.keys(form.value).some((key) => !!form.value[key])
    );
  }

  clearAll(form: NgForm): void {
    form.resetForm();
  }
}
