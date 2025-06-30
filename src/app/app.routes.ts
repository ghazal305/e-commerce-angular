import { Routes } from '@angular/router';
import { WrapperCards } from './wrapper-cards/wrapper-cards';
import { ProductDetailsComponent } from './product-details-component/product-details-component';
import { Navbar } from './navbar/navbar';
import { ProductList } from './product-list/product-list';
import { LogIn } from './log-in/log-in';
import { SignUp } from './sign-up/sign-up';

export const routes: Routes = [
  { path: '', component: WrapperCards },
  { path: 'product/:id', component: ProductDetailsComponent },
  {path: 'navbar' , component:Navbar},
  {path: 'productlist',component:ProductList},
  {path: 'login' , component:LogIn},
  {path: 'signup', component:SignUp}
];
