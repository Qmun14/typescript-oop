import { Induk } from "./induk";

class Anak1 extends Induk implements AktifitasPagi, AktifitasSiang {

  getData2(): string {
    return "Data Abstract";
  }

  makan(): void {
    console.log("Makan Pagi");
  }

  tidur(): void {
    console.log("Tidur Siang");
  }
}

let a = new Anak1();
console.log(a.getData());
console.log(a.getData2());
a.makan();
a.tidur();