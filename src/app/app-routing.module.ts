import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainLayoutComponent } from "./shared/layout/app-layouts/main-layout.component";


const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    data: { pageTitle: "Home" },
    children: [
        {
            path: '', redirectTo: 'dashboard/comprobantesElectronicos', pathMatch: 'full'
        },
        {
            path: 'dashboard',
            loadChildren: 'app/+dashboard/dashboard.module#DashboardModule',
        },


    ]
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
