import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  constructor(private router: Router) { }

  goToHome(): void {
    // Aqui você define a rota para a tela inicial
    this.router.navigate(['/listar-player']);
  }

}
