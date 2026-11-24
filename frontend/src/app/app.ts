import { Component } from '@angular/core';
import { ListaGiochi } from './pages/lista-giochi/lista-giochi';

@Component({
  selector: 'app-root',
  imports: [ListaGiochi],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
