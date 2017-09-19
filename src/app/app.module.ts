import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ZoomableCanvasComponent } from './zoomablecanvas.component';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    ZoomableCanvasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
