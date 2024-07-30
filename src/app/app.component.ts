import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { ProvidersSearchTableComponent } from './providers-search-table/providers-search-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavBarComponent,
    SearchFormComponent,
    ProvidersSearchTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Provider Validation Tool';
}
