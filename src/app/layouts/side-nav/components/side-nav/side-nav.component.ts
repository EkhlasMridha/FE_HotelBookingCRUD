import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { NavTracerService } from '@core/services/nav-tracer.service';
import { NavigationModel,NavConfigs } from '../../config/navigation.model';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SideNavComponent implements OnInit {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  activatedRoute: string = '';

  navigations: NavigationModel[] = NavConfigs;

  constructor (private breakpointObserver: BreakpointObserver, private navTracer: NavTracerService) { }
  ngOnInit(): void {
    this.navTracer.routeReceiver.subscribe(res => {
      this.activatedRoute = res;
    });
  }

  toggleDrawer(drawer: MatDrawer) {
    drawer.toggle();
  }
}
