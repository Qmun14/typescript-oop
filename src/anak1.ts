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

let a = new Anak1();               //? Bentuk dari diri sendiri
let b: AktifitasPagi = new Anak1();       //? bentuk dari interface
let c: Induk = new Anak1();           //? bentuk dari class lain