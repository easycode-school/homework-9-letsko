import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArraySortingPipe } from './pipes/array-sorting.pipe';
import { DateConversionPipe } from './pipes/date-conversion.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ArraySortingPipe,
    DateConversionPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
