import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms' 
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { KicksComponent } from './kicks/kicks.component';
import { KicksDetailComponent } from './kicks/kicks-detail/kicks-detail.component';
import { KicksItemComponent } from './kicks/kicks-list/kicks-item/kicks-item.component';
import { KicksListComponent } from './kicks/kicks-list/kicks-list.component';
import { DropdownDirective } from './shared/dropdown.directive';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    KicksComponent,
    KicksDetailComponent,
    KicksItemComponent,
    KicksListComponent,
    DropdownDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
