import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GiocoService } from '../../services/gioco-service';
import { Gioco } from '../../models/gioco';

@Component({
  selector: 'app-lista-giochi',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './lista-giochi.html'
})
export class ListaGiochi implements OnInit {
  private service = inject(GiocoService);
  giochi = signal<Gioco[]>([]);
  loading = signal(true);
  errore = signal('');

  ngOnInit() {
    this.service.getGiochi().subscribe({
      next: dati => { this.giochi.set(dati); this.loading.set(false); },
      error: err => { this.errore.set('Errore ' + err.status);
                      this.loading.set(false); }
    });
  }
}
