import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FieldComponent } from './field/field/field.component';
import { RouterModule } from '@angular/router';
import { ObserverComponent } from './observer/observer.component';

@NgModule({
  declarations: [
    AppComponent,
    FieldComponent,
    ObserverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', component: FieldComponent },
      { path: 'observer', component: ObserverComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
