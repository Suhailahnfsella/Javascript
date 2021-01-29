// $(document).ready(function () {
//  console.log("siap");
// });

$(function () {
 $("#isi").html("<h1>Belajar Jquery</h1>");

 $("#klik").click(function (e) {
  e.preventDefault();
  alert("belajar javascriipt");
 });

 $("#isi").mouseleave(function () {
  alert("mouse leave");
 });
});
