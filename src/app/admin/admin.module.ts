import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { DefaultComponentsModule } from '../default-components/default-components.module';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeAdminComponent } from './components/home-admin/home-admin.component';
import { UsersAdminComponent } from './components/users-admin/users-admin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SidebarAdminComponent } from './components/sidebar-admin/sidebar-admin.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { LoginComponent } from './components/login/login.component';
import { PropertiesComponent } from './components/properties/properties.component';
import { PropertiesPostComponent } from './components/properties/properties-post/properties-post.component';
import { PropertiesListComponent } from './components/properties/properties-list/properties-list.component';
import { SidebarAdminMenuDropdownDirective } from './directives/sidebar-admin-menu-dropdown.directive';
import { SidebarAdminMenuActiveDirective } from './directives/sidebar-admin-menu-active.directive';
import { LogoutComponent } from './components/logout/logout.component';
import { CategoriesListComponent } from './components/categories/categories-list/categories-list.component';
import { CategoriesPostComponent } from './components/categories/categories-post/categories-post.component';
import { CategoriesComponent } from './components/categories/categories.component';

@NgModule({
  imports: [
    MDBBootstrapModule.forRoot(),
    DefaultComponentsModule,
    AdminRoutingModule
  ],
  providers: [],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    DashboardComponent,
    HomeAdminComponent,
    UsersAdminComponent,
    SidebarAdminComponent,
    NavbarAdminComponent,
    LoginComponent,
    PropertiesComponent,
    PropertiesPostComponent,
    PropertiesListComponent,
    SidebarAdminMenuDropdownDirective,
    SidebarAdminMenuActiveDirective,
    LogoutComponent,
    CategoriesListComponent,
    CategoriesPostComponent,
    CategoriesComponent
  ]
})

export class AdminModule { }