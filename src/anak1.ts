import { Induk } from "./induk";

class Anak1 extends Induk {

  /**
   * Untuk di typescript bisa menyederhanakan sebuah variabel bisa dimasukkan  ke dalam constructor asalkan modifier nya selain public
   * @param nama 
   * @param umur 
   */
  constructor(readonly nama: string, protected umur: number) {
    super();

  }

  getDataFromInduk(): void {
    super.getData();
    this.umur;
  }
}

let a = new Anak1('Mamun Ramdhan', 30);
console.log(a);