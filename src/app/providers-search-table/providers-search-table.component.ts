import { Component, OnInit, ViewChild } from '@angular/core';
import { Provider, ProvidersService } from '../providers.service';

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { SearchFormComponent } from '../search-form/search-form.component';

@Component({
  selector: 'providers-search-table',
  standalone: true,
  imports: [
    SearchFormComponent,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  templateUrl: './providers-search-table.component.html',
  styleUrl: './providers-search-table.component.scss',
})
export class ProvidersSearchTableComponent implements OnInit {
  dataSource: MatTableDataSource<Provider> = new MatTableDataSource();
  public displayedColumns: string[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: ProvidersService) {}

  async ngOnInit() {
    const providers: Provider[] = await this.service.getProviders();
    this.dataSource = new MatTableDataSource(providers);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    this.displayedColumns = [
      'name',
      'province',
      'date',
      'profession',
      'regulatory_body',
      'discipline_type',
      'location',
      'benefit',
      'note',
    ];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  onRowClicked(row: Provider) {
    if (row.reference) {
      window.open(row.reference, '_blank');
    }
  }
}
