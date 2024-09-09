import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

console.log(uuid);


@Injectable({providedIn: 'root'})
export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'krillin',
      power: 900,
    },
    {
      id: uuid(),
      name:'Goku',
      power:10000,
    },
    {
      id: uuid(),
      name:'Vegeta',
      power:11000,
    }
  ];

  addCharacter(character:Character):void{
    // console.log('Main page Componenet');
    // console.log(character);
    // character.id = uuid();
    // const newCharacter: Character = {
    //   id: uuid(),
    //   name: character.name,
    //   power: character.power,
    // };
    const newCharacter: Character = {
      id: uuid(),
      ...character,
    }
    this.characters.push(newCharacter);
    console.log(newCharacter);

  }
  deleteCharacterById(id:string){
    this.characters = this.characters.filter(element => element.id !== id);

  }

  constructor() {}

}

