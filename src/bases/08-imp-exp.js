/* eslint-disable no-unused-vars */

import  heroes, { owners } from "../data/heroes"

//console.log(heroes);

export const getHeroeById = (id) =>  heroes.find( (e) => e.id === id);

//console.log(getHeroeById(3));

const getHeroeByOwned = (owner) => heroes.filter( (e) => e.owner === owner);

//console.log(getHeroeByOwned("Marvel"));
//console.log(owners);