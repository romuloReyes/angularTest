import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Hulk', 'Thor', 'Ironman'];
  public deletedAllHeros: boolean = false;
  public deletedHeroName: string = '';
  public deletedHeroList: string[] = [];

  deleteLastHero(): string{
    this.deletedHeroName = this.heroNames.pop() || '';
    if(this.deletedHeroName){
      this.deletedHeroList.push(this.deletedHeroName);
    }
    if (this.heroNames.length < 1) {
      this.deletedAllHeros = true;
    }
    return this.deletedHeroName || '';
  }
}
