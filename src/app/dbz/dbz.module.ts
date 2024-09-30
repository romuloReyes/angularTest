import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainPageComponent } from './pages/main-page.component';
import { ListHerosComponent } from './components/list/list-heros.component';
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [MainPageComponent, ListHerosComponent, DbzFormComponent, ToolbarComponent],
  exports: [MainPageComponent ],
  imports: [
    CommonModule,
    FormsModule,
    MatSlideToggleModule
  ]
})
export class DbzModule { }
