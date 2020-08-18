import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { AppRoutingModule } from './app-routing.module';

// firebase
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from 'src/environments/environment';

// providers
import { AuthService } from './services/auth/auth.service';
import { MatMenuModule, MatButtonModule, MatSnackBarModule } from '@angular/material';
import { HeaderComponent } from './components/header/header.component';
import { ErrorSnackBarComponent } from './components/error-snack-bar/error-snack-bar.component';
import { SuccessSnackBarComponent } from './components/success-snack-bar/success-snack-bar.component';
import { SnackBarService } from './services/snack-bar/snack-bar.service';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,

    // firebase
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,

    MatMenuModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    ErrorSnackBarComponent,
    SuccessSnackBarComponent,
  ],
  entryComponents: [
    ErrorSnackBarComponent,
    SuccessSnackBarComponent,
  ],
  providers: [
    AuthService,
    SnackBarService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
