class Induk {
  namaInduk: string = "Ma'mun Ramdhan";

  getAlamat(): string {
    return "Jalan Induk Raya"
  }
}

class Anak extends Induk {

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

let a = new Anak();
console.log(a.getNamaInduk());
console.log(a.getAlamat());
console.log(a.getAlamatInduk());