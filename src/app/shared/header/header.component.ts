import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  standalone: true,
})
export class HeaderComponent {
  isDiv1Visible = false;
  isDiv2Visible = false;

  toggleDiv(div: number) {
    if (div === 1) {
      this.isDiv1Visible = !this.isDiv1Visible;
    } else if (div === 2) {
      this.isDiv2Visible = !this.isDiv2Visible;
    }
  }
}
