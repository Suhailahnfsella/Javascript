function tampil(b) {
    a = document.querySelector("p").innerText = "belajar event js " + b;
    console.log("Belajar Event JS");
}

judul.onclick = function () {
    console.log("Belajar Event JS menggunakan ID");
    document.querySelector(".isi").innerHTML = "belajar event js 2";
}