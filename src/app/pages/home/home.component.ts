import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { filter } from 'rxjs';

@Component({
    selector: 'app-home',
    imports: [CommonModule, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

  activeRoute: string = '';
  
    constructor(private router: Router) {
      // Listen to route changes
      this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe((event: any) => {
          this.activeRoute = event.urlAfterRedirects;
        });
    }
  
    isActive(path: string): boolean {
      return this.activeRoute === path;
    }

}
