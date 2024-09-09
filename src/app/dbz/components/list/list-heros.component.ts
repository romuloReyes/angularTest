import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';




@Component({
  selector: 'app-dbz-list',
  templateUrl: './list-heros.component.html',
  styleUrl: './list-heros.component.css'
})
export class ListHerosComponent {
  @Input()
  public characterList: Character[] = [{name:'Example', power:9999}];
  @Output()
  public deleteCharacterByIndex: EventEmitter<string> = new EventEmitter() ;

  public onDeleteCharacter(id?:string):void {
    //Emitir el ID/indice del personaje
    if(!id) return;

    console.log(this.characterList.find( element => element.id == id));
    this.deleteCharacterByIndex.emit(id);
  }

}
