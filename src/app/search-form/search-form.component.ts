import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
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
export class SearchFormComponent {
  professions = ['Engineer', 'Doctor', 'Artist', 'Teacher'];
  benefits = ['Health Insurance', 'Pension Plan', 'Vacation'];
  provinces = ['Ontario', 'Quebec', 'British Columbia', 'Alberta'];
  disciplineTypes = ['Technical', 'Creative', 'Scientific', 'Administrative'];
  regulatoryBodies = ['Technical', 'Creative', 'Scientific', 'Administrative'];

  onSubmit(form: any) {
    console.log('Form Data:', form.value);
  }

  isFormValid(form: any): boolean {
    return (
      form.dirty && Object.keys(form.value).some((key) => !!form.value[key])
    );
  }
}
