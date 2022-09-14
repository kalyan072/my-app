import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { CaluclatorComponent } from './caluclator/caluclator.component';
import { SquareComponent } from './square/square.component';
import { DatBindingComponent } from './dat-binding/dat-binding.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayBindingComponent } from './twoway-binding/twoway-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RectangleComponent } from './rectangle/rectangle.component';
import { EventRegistrationComponent } from './event-registration/event-registration.component';
import { StudentRegisterComponent } from './student-register/student-register.component';
import { CartComponent } from './cart/cart.component';
import { CartIIComponent } from './cart-ii/cart-ii.component';
import { EmployeesComponent } from './employees/employees.component';
import { PipesComponent } from './pipes/pipes.component';
import { PricePipe } from './price.pipe';
import { PackagePipe } from './package.pipe';
import { AgePipe } from './age.pipe';
import { CarsComponent } from './cars/cars.component';
import { GpayComponent } from './gpay/gpay.component';
import { HdfcComponent } from './hdfc/hdfc.component';
import { ServeComponent } from './serve/serve.component';
import { HttpClientModule } from '@angular/common/http';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountsComponent } from './accounts/accounts.component';
import { ItemComponent } from './item/item.component';
import { SocialmediaComponent } from './socialmedia/socialmedia.component';
import { MailComponent } from './mail/mail.component';
import { DatacardComponent } from './datacard/datacard.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { CreateUserComponent } from './create-user/create-user.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    CaluclatorComponent,
    SquareComponent,
    DatBindingComponent,
    DataBindingComponent,
    EventBindingComponent,
    TwowayBindingComponent,
    RectangleComponent,
    EventRegistrationComponent,
    StudentRegisterComponent,
    CartComponent,
    CartIIComponent,
    EmployeesComponent,
    PipesComponent,
    PricePipe,
    PackagePipe,
    AgePipe,
    CarsComponent,
    GpayComponent,
    HdfcComponent,
    ServeComponent,
    VehicleComponent,
    AccountsComponent,
    ItemComponent,
    SocialmediaComponent,
    MailComponent,
    DatacardComponent,
    CreateVehicleComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
