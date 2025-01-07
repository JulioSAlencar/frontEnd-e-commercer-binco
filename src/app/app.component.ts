import { Component } from '@angular/core';
import { HeaderComponent } from './shared/header/header.component'; // Importar o HeaderComponent
import { FooterComponent } from './shared/footer/footer.component'; // Importar o FooterComponent
import { RouterOutlet } from '@angular/router'; // Importar o RouterOutlet para usar no template

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marcando como um componente standalone
  imports: [HeaderComponent, FooterComponent, RouterOutlet] // Incluir os componentes aqui
})
export class AppComponent {
  // Qualquer lógica necessária
}
