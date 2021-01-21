let objek = {
    
    nama : "smkn 2 buduran",
    telp : 12345678,

    jurusan : ['rpl', 'multimedia', 'pemasaran'],

    coba : function () {
        return "coba function dalam object";
    },

    boleh : true,

    "tulis aja" : 123456

}

console.log(objek.nama);
console.log(objek.telp);
console.log(objek.jurusan[0]);
console.log(objek.coba());
console.log(objek.boleh);
console.log(objek["tulis aja"]);