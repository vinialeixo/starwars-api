export interface People {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: Person[];
}

export interface Person {
  birthYear: string;
  created: Date | string;
  edited: Date | string;
  eyeColor: string;
  films: string[];
  gender: string;
  hairColor: string;
  height: number;
  homeWorld: string;
  mass: number;
  name: string;
  skinColor: string;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string;
}
