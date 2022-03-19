import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AnnonceDetailComponent } from './components/annonce-detail/annonce-detail.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { FormAnnonceComponent } from './components/form-annonce/form-annonce.component';
import { MainListComponent } from './components/main-list/main-list.component';

const routes: Routes = [
    { path: '', component: MainListComponent },
    { path: 'add', component: FormAnnonceComponent },
    { path: 'connect', component: ConnectionComponent },
    { path: 'admin', component: AdminDashboardComponent },
    { path: ':id', component: AnnonceDetailComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
