//let tampung = []; //buat array kosong

let data;
let daftar_tamu = document.getElementById('daftar_tamu');

tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    console.log(keperluan);
    console.log(nama);

    if(localStorage.getItem('ls_bukutamu') == null){
        data = [];
    } else{
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    }

   //ambil data dari local storage
    let data = JSON.parse(localStorage.getItem('nama'));

    data.push({nama_pengunjung: nama, perlu: keperluan});  //masukkan value input nama ke dalam array

    localStorage.setItem('ls_bukutamu', JSON.stringify(data)); //simpan ke local storage

    daftar_tamu.innerHTML = '';
    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

    data.forEach( (item) => {
        daftar_tamu.innerHTML += `<li>${item.nama_pengunjung} - ${item.perlu}</li>`
    })
}