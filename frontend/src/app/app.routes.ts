import { Routes } from '@angular/router';
import { ListaGiochi } from './pages/lista-giochi/lista-giochi';
import { DettaglioGioco } from './pages/dettaglio-gioco/dettaglio-gioco';
import { Carrello } from './pages/carrello/carrello';

export const routes: Routes = [
  { path: '',            component: ListaGiochi },
  { path: 'gioco/:id',   component: DettaglioGioco },
  { path: 'carrello',    component: Carrello },
  { path: '**',          redirectTo: '' }
];
