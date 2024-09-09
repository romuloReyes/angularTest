import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListHerosComponent } from './components/list/list-heros.component';
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';



@NgModule({
  declarations: [MainPageComponent, ListHerosComponent, DbzFormComponent],
  exports: [MainPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class DbzModule { }
