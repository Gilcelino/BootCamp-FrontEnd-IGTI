import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViagemComponent } from './viagem/viagem.component';

const routes: Routes = [
  { path: 'viagem', component: ViagemComponent },
  { path: '', redirectTo: 'viagem', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
