//let tampung = []; //buat array kosong

let data;
let daftar_tamu = document.getElementById('daftar_tamu');

tampil();

function simpan(){
    let nama = document.getElementById('nama').value;
    let keperluan = document.getElementById('keperluan').value;
    let jk = document.getElementById('jk').value;
    console.log(keperluan);
    console.log(nama);
    console.log(jk);

    if(localStorage.getItem('ls_bukutamu') == null){
        data = []
    } else{
        data = JSON.parse(localStorage.getItem('ls_bukutamu'));
    }

   //ambil data dari local storage
    data.push({nama_pengunjung: nama, perlu: keperluan, jk:jk});  //masukkan value input nama ke dalam array

    localStorage.setItem('ls_bukutamu',JSON.stringify(data)); //simpan ke local storage

    daftar_tamu.innerHTML = '';

    tampil();
}

function tampil(){
    localStorage.getItem('ls_bukutamu') == null ? data = [] : data = JSON.parse(localStorage.getItem('ls_bukutamu'));

    console.log(data.length);

    document.getElementById('total_tamu').innerHTML = `Total tamu : ${data.length}`

    let total_laki=0;
    let total_perempuan=0;

    data.forEach( (item) => {
        if(item.jk == 'L'){
            total_laki++
        } else if(item.jk == 'p'){
            total_perempuan++
        }

        daftar_tamu.innerHTML += `<li> ${item.nama_pengunjung} - ${item.perlu} <li>`
    })
    document.getElementById('tamu_laki').innerHTML = `Total tamu laki-laki : ${total_laki}`;
    document.getElementById('tamu_perempuan').innerHTML = `Total tamu perempuan : ${total_perempuan}`;

}