const nama = "Tsuchia San"; 
let usia = 15;

let biodata = document.getElementById('biodata');

function generateBiodata() {
    let generasi;
    if (usia > 10 && usia < 18) {
        generasi = "Generasi Teen";
    } else if (usia > 18 && usia < 30) {
        generasi = "Generasi Mature";
    }
    else if (usia >= 30) {
        generasi = "Generasi Old Man";
    }
    else if (usia > 2 && usia < 10) {
        generasi = "Generasi Kid";
    }
    else {
        generasi = "Generasi Baby";
    }

    return biodata.innerHTML = generasi;
}

// console.log(nama);
// console.log(usia);
generateBiodata();

// console.log(`nama saya adalah ${nama} dan usia saya ${usia} tahun `);

// CONS tidak bisa diubah 