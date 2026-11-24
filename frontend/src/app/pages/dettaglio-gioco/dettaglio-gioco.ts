import { Component, OnInit, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GiocoService } from '../../services/gioco-service';
import { Gioco } from '../../models/gioco';

@Component({
  selector: 'app-dettaglio-gioco',
  imports: [RouterLink, CurrencyPipe],
  templateUrl: './dettaglio-gioco.html'
})
export class DettaglioGioco implements OnInit {
  private route = inject(ActivatedRoute);
  private service = inject(GiocoService);
  gioco = signal<Gioco | null>(null);
  errore = signal('');

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getGioco(id).subscribe({
      next: g => this.gioco.set(g),
      error: e => this.errore.set(e.status === 404
                    ? 'Gioco inesistente' : 'Errore server')
    });
  }
}
