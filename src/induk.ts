import { SuperInduk } from "./superinduk";

export abstract class Induk extends SuperInduk {

  public getData(): string {
    return "Data non abstract";
  }

}

