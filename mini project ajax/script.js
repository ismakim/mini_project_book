      // Fungsi untuk memuat data JSON
      function loadData() {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var data = JSON.parse(this.responseText);
                displayData(data);
            }
        };
        xhttp.open("GET", "toko_buku.json", true); // Ubah sesuai dengan lokasi file JSON
        xhttp.send();
    }

    // Fungsi untuk menampilkan data ke dalam HTML
    function displayData(data) {
        var tokoInfo = `
            <h1>Nama Toko: ${data.nama_toko}</h1>
            <p>Pengarang: ${data.pengarang}</p>
            <p>Alamat: ${data.alamat}</p>
        `;
        document.getElementById("toko-info").innerHTML = tokoInfo;

        var daftarBuku = "<h2>Daftar Buku</h2><table border='1'><tr><th>Judul Buku</th><th>Pengarang</th><th>Tahun Terbit</th></tr>";
        data.koleksi_buku.forEach(function(buku) {
            daftarBuku += `<tr><td>${buku.judul}</td><td>${buku.pengarang}</td><td>${buku.tahun_terbit}</td></tr>`;
        });
        daftarBuku += "</table>";
        document.getElementById("daftar-buku").innerHTML = daftarBuku;
    }

    // Memanggil fungsi loadData saat halaman dimuat
    window.onload = function() {
        loadData();
    };