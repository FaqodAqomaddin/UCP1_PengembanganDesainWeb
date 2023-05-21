function tanggal() {
    var now = new Date(); // Mendapatkan waktu saat ini
  
    // Mendapatkan komponen tanggal
    var day = now.getDay();
    var tanggal = now.getDate();
    var bulan = now.getMonth() + 1; // Bulan dimulai dari 0, sehingga perlu ditambah 1
    var tahun = now.getFullYear();
function jam () {
    // Mendapatkan komponen jam
    var jam = now.getHours();
    var menit = now.getMinutes();
    var detik = now.getSeconds();
  
    // Menampilkan tanggal dan jam dalam format yang diinginkan
    var tanggal = day + ',' + tanggal + ' ' + bulan + ' ' + tahun;
    var jam = jam + ':' + menit + ':' + detik;
  
    // Mengupdate elemen dengan ID 'tanggal-jam' dengan tanggal dan jam yang diperoleh
    document.getElementById('tanggal').innerHTML = tanggal;
    document.getElementById('jam').innerHTML = jam;
  }
} 
  // Memanggil fungsi updateClock setiap detik
  setInterval(updateClock, 1000);
  