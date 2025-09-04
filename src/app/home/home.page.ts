import { Component } from '@angular/core';
// Importe os módulos necessários
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  // Adicione esta linha de imports
  imports: [IonicModule, RouterModule,],
})
export class HomePage {
  constructor() {}
}