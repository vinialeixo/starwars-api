export interface PlanetList {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: Planet[];
}

export interface Planet {
  climate: string;
  name: string;
  population: string;
  terrain: string;
}
