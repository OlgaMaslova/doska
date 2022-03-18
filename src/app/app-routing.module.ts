import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { ConnectionComponent } from './components/connection/connection.component';
import { FormAnnonceComponent } from './components/form-annonce/form-annonce.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'add', component: FormAnnonceComponent },
    { path: 'connect', component: ConnectionComponent },
    { path: 'admin', component: AdminDashboardComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
