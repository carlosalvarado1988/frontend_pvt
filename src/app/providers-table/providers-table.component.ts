import { Component, OnInit, ViewChild } from '@angular/core';
import { ProvidersService, Provider } from '../providers.service';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
@Component({
  selector: 'providers-table',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatCardModule,
  ],
  templateUrl: './providers-table.component.html',
  styleUrl: './providers-table.component.css',
})
export class ProvidersTableComponent implements OnInit {
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
    //     <!-- benefit: string;
    // profession: string;
    // province: string;
    // regulatory_body: string;
    // discipline_type: string;
    // name: string;
    // date: string;
    // location: string;
    // note: string;
    // note2: string;
    // reference: string; -->
    // this.displayedColumns = Object.keys(providers[0]);
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
      'note2',
    ];
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
