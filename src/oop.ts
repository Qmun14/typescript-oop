/**
 * TODO:: 1. Dalam sebuah Class di Tscript tidak boleh ada keyword : let, const, function
 */
class Manusia {
  nama: string = "Ma'mun";

  getNama(): string {
    return this.nama;
  }
}

/**
 * ? orang1 adalah instance/object dari class Manusia
 */
let orang1 = new Manusia();

console.log(orang1.getNama());




