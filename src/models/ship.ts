export interface ShipList {
  count: number;
  next: string | undefined;
  previous: string | undefined;
  results: Ship[];
}

export interface Ship {
  name: string;
  model: string;
  lengh: string;
  passengers: string;
}
