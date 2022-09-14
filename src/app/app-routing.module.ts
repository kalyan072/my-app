import { compileFactoryFunction } from '@angular/compiler';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccountsComponent } from './accounts/accounts.component';
import { AuthGuard } from './auth.guard';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { CarsComponent } from './cars/cars.component';
import { CartIIComponent } from './cart-ii/cart-ii.component';
import { CartComponent } from './cart/cart.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DatacardComponent } from './datacard/datacard.component';
import { EmployeesComponent } from './employees/employees.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { GpayComponent } from './gpay/gpay.component';
import { HomeComponent } from './home/home.component';
import { ItemComponent } from './item/item.component';
import { LoginComponent } from './login/login.component';
import { MailComponent } from './mail/mail.component';
import { NotifyGuard } from './notify.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PipesComponent } from './pipes/pipes.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { SquareComponent } from './square/square.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { VehicleComponent } from './vehicle/vehicle.component';

const routes: Routes = [
  {path:'login', component: LoginComponent},
  {path:'dashboard', component:DashboardComponent, canActivate:[AuthGuard],children:[
    {path:'home', component: HomeComponent},
    {path:'calculator',component:CaluclatorComponent},
    {path:'square',component:SquareComponent},
    {path:'databinding',component:DataBindingComponent},
    {path:'eventbinding',component: EventBindingComponent},
    {path:'twowaybinding', component:TwowayBindingComponent},
    {path:'recatangle', component:RectangleComponent},
    {path: 'eventregistration', component:EventRegistrationComponent},
    {path: 'studentregister', component:StudentRegisterComponent},
    {path: 'cart', component:CartComponent},
    {path:'cartii',component:CartIIComponent},
    {path:'employees', component:EmployeesComponent},
    {path:'pipes',component:PipesComponent},
    {path: 'cars', component:CarsComponent},
    {path: 'gpay', component:GpayComponent},
    {path: 'vehicle',component:VehicleComponent},
    {path:'accounts',component:AccountsComponent},
    {path: 'item',component:ItemComponent},
    {path: 'socialmedia',component:SocialmediaComponent},
    {path:'mail',component:MailComponent},
    {path: 'datacard',component:DatacardComponent},
    {path:'createvehicle',component:CreateVehicleComponent,canDeactivate: [NotifyGuard]},
    {path:'create-user',component:CreateUserComponent}
  ]
},
  {path:'',component:LoginComponent},
  {path:'**', component:PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
