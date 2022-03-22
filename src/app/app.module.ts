import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainListComponent } from './components/main-list/main-list.component';
import { HeaderComponent } from './components/header/header.component';
import { AnnonceCardComponent } from './components/annonce-card/annonce-card.component';
import { FormAnnonceComponent } from './components/form-annonce/form-annonce.component';
import { SwitchLocaleComponent } from './components/switch-locale/switch-locale.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { LocalizedDatePipe } from './pipes/localized-date.pipe';
import { AnnonceDetailComponent } from './components/annonce-detail/annonce-detail.component';
import { AnnonceCreatedComponent } from './components/annonce-created/annonce-created.component';

export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        AppComponent,
        MainListComponent,
        HeaderComponent,
        AnnonceCardComponent,
        FormAnnonceComponent,
        SwitchLocaleComponent,
        ConnectionComponent,
        AdminDashboardComponent,
        LocalizedDatePipe,
        AnnonceDetailComponent,
        AnnonceCreatedComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatCardModule,
        MatGridListModule,
        MatIconModule,
        HttpClientModule,
        MatButtonModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatTabsModule,
        MatBadgeModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AmplifyAuthenticatorModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
