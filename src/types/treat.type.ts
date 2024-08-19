type Size = "Small" | "Medium" | "Large";

export default interface DogTreat {
  name: string;
  flavor: string;
  size: Size;
  calories: number;
  brand: string;
  ingredients: string[];
  location: string | null;
}
