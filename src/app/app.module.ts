import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { CurrencyComponent } from './currency/currency.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AuthGuard } from './auth.guard';
import { EmployeesComponent } from './employees/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    CurrencyComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorPageComponent,
    AdminComponent,
    GuardComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: { name: 'Home'}, component: ProductListComponent },
      { path: 'products/:productId', data: { name: 'Product'}, component: ProductDetailsComponent },
      { path: 'cart', data: { name: 'Cart'}, component: CartComponent },
      { path: 'shipping', data: { name: 'Shipping'}, component: ShippingComponent },
      { path: 'currency', data: { name: 'Currency'}, component: CurrencyComponent },
      {
        path: 'dashboard',
        data: { name: 'Dashboard'},
        component: DashboardComponent,
      },
      {
        path: 'dashboard/news',
        data: { name: 'News'},
        component: NewsComponent,
      },
      {
        path: 'dashboard/news/:articleId',
        data: { name: 'Article'},
        component: ArticleComponent
      },
      {
        path: 'guard',
        data: { name: 'Article'},
        component: GuardComponent
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { name: 'Admin'},
        canActivate: [AuthGuard]
      },
      { path: 'error',  data: { name: 'Error'}, component: ErrorPageComponent },
      { path: 'employees',  data: { name: 'Employees'}, component: EmployeesComponent },
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
