import { Injectable } from '@angular/core';
import Data from './mock-data/sample_data.json';

export interface Provider {
  benefit: string;
  profession: string;
  province: string;
  regulatory_body: string;
  discipline_type: string;
  name: string;
  date: string;
  location: string;
  note: string;
  note2: string;
  reference: string;
}

@Injectable({
  providedIn: 'root',
})
export class ProvidersService {
  getProviders(): Promise<Provider[]> {
    return Promise.resolve(Data);
  }
}
