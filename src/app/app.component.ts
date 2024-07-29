import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { SearchFormComponent } from './search-form/search-form.component';
import { ProvidersTableComponent } from './providers-table/providers-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SearchFormComponent, ProvidersTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Provider Validation Tool';
}
