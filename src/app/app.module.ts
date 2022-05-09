import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormHeaderComponent } from './form-header/form-header.component';
import { FormMainComponent } from './form-main/form-main.component';
import { FormFooterComponent } from './form-footer/form-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    FormHeaderComponent,
    FormMainComponent,
    FormFooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
