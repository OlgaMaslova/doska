import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormAnnonceComponent } from './components/form-annonce/form-annonce.component';
import { LayoutComponent } from './components/layout/layout.component';

const routes: Routes = [
    { path: '', component: LayoutComponent },
    { path: 'add', component: FormAnnonceComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
