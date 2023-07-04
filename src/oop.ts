/**
 *!  1. Contructor adalah metode khusus yang digunakan untuk menginisialisasi objek ketika objek kelas baru dibuat. Ini adalah metode kelas yang dieksekusi secara otomatis saat objek kelas baru dibuat dengan menggunakan kata kunci "new".
 *!  2. Setiap class sebetulnya sudah ada default constructor nya, hanya saja default visible nya false
 *!  3. ketika sebuah class anak membuat constructor sendiri wajib memanggil constructor induk nya menggunakan perintah super()
 *!  4. Dalam typescript constructor dalam setiap class hanya boleh ada 1
 *!  5. Dalam typescript tidak seperti java sebuah method/function tidak bisa di overloading
 */

class SuperInduk {

}

class Induk extends SuperInduk {
  namaInduk: string = "Ma'mun Ramdhan";

  constructor(param1: string) {
    super();
    console.log('param1 dari anak adl', param1);
  }

  getAlamat(): string {
    return "Jalan Induk Raya"
  }
}

class Anak extends Induk {

  constructor(param1: string) {
    console.log(param1)
    super(param1);
  }

  getNamaInduk(): string {
    return this.namaInduk;
  }

  /**
   * @returns Fungsi getAlamat() yang dioverride dari induknya
   */
  getAlamat(): string {
    return "Jalan Raya Anak";
  }

  /**
   * ? Memanggil fungsi dari induk yang sempat di override
   * TODO:: Gunakan keyword super
   */
  getAlamatInduk(): void {
    console.log(super.getAlamat());
  }
}

let a = new Anak("Anak1");
console.log(a.getNamaInduk());
console.log(a.getAlamat());
console.log(a.getAlamatInduk());