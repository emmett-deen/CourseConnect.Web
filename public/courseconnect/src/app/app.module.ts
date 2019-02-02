import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireModule } from "@angular/fire";
import {AngularFirestoreModule} from "@angular/fire/firestore";

import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from "./home/home.component";
import { FooterComponent } from "./footer/footer.component";
import { AppComponent } from "./app/app.component";
import { AboutComponent } from './about/about.component';
import { ConsoleLoginComponent } from './console-login/console-login.component';
import { ConsoleSignupComponent } from './console-signup/console-signup.component';
import {environment} from "../environments/environment";
import { ConsoleHomeComponent } from './console-home/console-home.component';
import { ConsoleVerifyComponent } from './console-verify/console-verify.component';
import { ConsoleForgotComponent } from './console-forgot/console-forgot.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    ConsoleLoginComponent,
    ConsoleSignupComponent,
    ConsoleHomeComponent,
    ConsoleVerifyComponent,
    ConsoleForgotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
