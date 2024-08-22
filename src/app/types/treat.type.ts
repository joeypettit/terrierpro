export class Treat {
  name: string;
  flavor: string;
  size: "Small" | "Medium" | "Large";
  calories: number;
  ingredients: string[];
  location: string | null;

  constructor(
    name: string,
    flavor: string,
    size: "Small" | "Medium" | "Large",
    calories: number,
    ingredients: string[],
    location: string | null
  ) {
    this.name = name;
    this.flavor = flavor;
    this.size = size;
    this.calories = calories;
    this.ingredients = ingredients;
    this.location = location;
  }
}

export interface TreatData {
  name: string;
  flavor: string;
  size: "Small" | "Medium" | "Large";
  calories: number;
  ingredients: string[];
  location: string | null;
}
