import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProvidersTableComponent } from './providers-table/providers-table.component';
import { AdvancedFiltersComponent } from './advanced-filters/advanced-filters.component';
import { DataTableComponent } from './data-table/data-table.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ProvidersTableComponent,
    AdvancedFiltersComponent,
    DataTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Provider Validation Tool';
}
