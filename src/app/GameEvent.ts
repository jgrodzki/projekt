import { Player } from './Player';
export interface GameEvent
{
    name:string;
    desc:string;
    city:string;
    street:string;
    address:number;
    mobile:number;
    email:string;
    date:"string";
    players:Player[];
}
