document.getElementsByTagName('body')
[0].style.backgroundColor = 'yellow';

// variable
let nama = "Ahmad";
let umur = 20;
let StatusMahasiswa = true;
document.getElementById('nama').innerHTML = "Nama saya : " + nama;
document.getElementById('umur').innerHTML = `Umur : ${umur}`;

let mahasiswa = [
    "Ahmad", "Budi", "Caca", "Dodi"
];
mahasiswa.forEach( (mhs) => {document.getElementById('mahasiswa').innerHTML += `<li>${mhs}</li>`;
} );

let nilai = [
    {nama: "Ahmad", nilai: 80},
    {nama: "Budi", nilai: 70},
    {nama: "Caca", nilai: 90},
    {nama: "Dodi", nilai: 850}
];
nilai.forEach( (data) => {
    document.getElementById('nilai').innerHTML += `<tr>
        <td>${data.nama}</td>
        <td>${data.nilai}</td>
    </tr>`;

} );

fetch('https://dummyjson.com/quotes') // akses API quotes
.then(res => res.json()) // ubah data ke join
.then(data => { // tampilkan data
    console.log(data.quotes) 
    data.quotes.forEach( (q) => { document.getElementById('quotes').innerHTML += `<li>${q.quote} - ${q.author}</li>` } )
});