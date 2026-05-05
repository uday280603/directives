import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { cssHighLighterDirective } from './shared/directives/cssHighLighter.directive';
import { cssHighLighterWithRenderDirective } from './shared/directives/cssHighLighterWithRender.directive';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';
import { PostCardComponentComponent } from './shared/component/post-card-component/post-card-component.component';
import { PostDashboardComponentComponent } from './shared/component/post-dashboard-component/post-dashboard-component.component';
import { UserComponent } from './shared/component/user/user.component';
import { UserDashboardComponent } from './shared/component/user-dashboard/user-dashboard.component';
import { BikeDashboardComponent } from './shared/component/bike-dashboard/bike-dashboard.component';
import { BikeComponent } from './shared/component/bike/bike.component';
import { MovieDashboardComponent } from './shared/component/movie-dashboard/movie-dashboard.component';
import { MovieComponent } from './shared/component/movie/movie.component';
import { CricketersDashboardComponent } from './shared/component/cricketers-dashboard/cricketers-dashboard.component';
import { CricketersComponent } from './shared/component/cricketers/cricketers.component';
import { MobileDashboardComponent } from './shared/component/mobile-dashboard/mobile-dashboard.component';
import { MobileComponent } from './shared/component/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    cssHighLighterDirective,
    cssHighLighterWithRenderDirective,
    LowerCaseDirective,
    PostCardComponentComponent,
    PostDashboardComponentComponent,
    UserComponent,
    UserDashboardComponent,
    BikeDashboardComponent,
    BikeComponent,
    MovieDashboardComponent,
    MovieComponent,
    CricketersDashboardComponent,
    CricketersComponent,
    MobileDashboardComponent,
    MobileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
