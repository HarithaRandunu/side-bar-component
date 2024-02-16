import { Component, OnInit, Output, EventEmitter, HostListener } from '@angular/core';
import { navbarData } from './nav-data';

interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrl: './sidenav.component.scss'
})
export class SidenavComponent {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  collapsed = false;
  screenWidth = 0;
  navData = navbarData;
  hidden = false;

  @HostListener('window:resize', ['$event'])
  ngOnInit(event: any): void {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth <= 768) {
      this.collapsed = false;
      this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
    }
  }

  closeSidenav() {
    this.collapsed = false;
    this.hidden = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
    this.hidden = false;
    this.onToggleSideNav.emit({collapsed: this.collapsed, screenWidth: this.screenWidth});
  }

}
