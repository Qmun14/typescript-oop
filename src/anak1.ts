import { Induk } from "./induk";

class Anak1 extends Induk {

  getData2(): string {
    return "Data Abstract";
  }
}

let a = new Anak1();
console.log(a.getData());
console.log(a.getData2());