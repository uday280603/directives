import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { cssHighLighterDirective } from './shared/directives/cssHighLighter.directive';
import { cssHighLighterWithRenderDirective } from './shared/directives/cssHighLighterWithRender.directive';
import { LowerCaseDirective } from './shared/directives/lower-case.directive';

@NgModule({
  declarations: [
    AppComponent,
    cssHighLighterDirective,
    cssHighLighterWithRenderDirective,
    LowerCaseDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
