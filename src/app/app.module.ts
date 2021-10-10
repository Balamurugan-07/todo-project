import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppService } from './app.service';
import { ReloadDirective } from './directives/reload.directive';
import { InputComponent } from './input/input.component';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [AppComponent, InputComponent, ListComponent, ReloadDirective],
  imports: [BrowserModule, FormsModule],
  providers: [AppService],
  bootstrap: [AppComponent],
})
export class AppModule {}
