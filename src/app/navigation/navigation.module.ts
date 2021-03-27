import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { SidenavListComponent } from './sidenav-list/sidenav-list.component';
import { NavtabsComponent } from './navtabs/navtabs.component';
import {MaterialModule} from './material.module';
import {FlexModule} from '@angular/flex-layout';



@NgModule({
  declarations: [HeaderComponent, SidenavListComponent, NavtabsComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [HeaderComponent, SidenavListComponent, NavtabsComponent]
})
export class NavigationModule { }
