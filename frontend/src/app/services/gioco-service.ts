import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Gioco } from '../models/gioco';

@Injectable({ providedIn: 'root' })
export class GiocoService {
  private http = inject(HttpClient);
  private url = '/api/giochi';

  getGiochi(): Observable<Gioco[]> {
    return this.http.get<Gioco[]>(this.url);
  }

  getGioco(id: number): Observable<Gioco> {
    return this.http.get<Gioco>(`${this.url}/${id}`);
  }

  // creaOrdine(...) lo aggiungerai nella sezione 8
}
