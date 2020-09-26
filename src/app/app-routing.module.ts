import {NgModule} from '@angular/core';
import {RouterModule, Routes} from  '@angular/router';
import { KicksComponent } from './kicks/kicks.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/kicks', pathMatch: 'full'},
    {path: 'kicks', component: KicksComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}