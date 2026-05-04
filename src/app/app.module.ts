import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { cssHighLighterDirective } from './shared/directives/cssHighLighter.directive';
import { cssHighLighterWithRenderDirective } from './shared/directives/cssHighLighterWithRender.directive';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';
import { PostCardComponentComponent } from './shared/component/post-card-component/post-card-component.component';
import { PostDashboardComponentComponent } from './shared/component/post-dashboard-component/post-dashboard-component.component';

@NgModule({
  declarations: [
    AppComponent,
    cssHighLighterDirective,
    cssHighLighterWithRenderDirective,
    LowerCaseDirective,
    PostCardComponentComponent,
    PostDashboardComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
