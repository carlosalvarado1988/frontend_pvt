import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvidersSearchTableComponent } from './providers-search-table.component';

describe('ProvidersTableComponent', () => {
  let component: ProvidersSearchTableComponent;
  let fixture: ComponentFixture<ProvidersSearchTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProvidersSearchTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProvidersSearchTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
