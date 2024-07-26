import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { ProvidersTableComponent } from './providers-table/providers-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProvidersTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Provider Validation Tool';
}
