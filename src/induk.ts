import { SuperInduk } from "./superinduk";

export abstract class Induk extends SuperInduk {

  getData(): string {
    return "Data non abstract";
  }

  abstract getData2(): string
}

