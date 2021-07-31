import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { ForgotPassComponent } from './forgot-pass/forgot-pass.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrdersComponent } from './orders/orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

export const applicationRoutes: Routes = [
  {path: '', redirectTo: 'login', pathMatch:'full'},
  {path: 'login', component:LoginComponent},
  {path: 'home/:id', component:HomeComponent},
  {path: 'register', component:RegisterComponent},
  {path: 'orders/:id', component:OrdersComponent},
  {path: 'confirmation/:id', component:ConfirmationComponent},
  {path: 'forgot', component:ForgotPassComponent},
  {path: 'profile/:id', component:UserProfileComponent},
  {path: '**', component:PageNotFoundComponent}
]
