
const inputTugas = document.getElementById("inputTugas");
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btntambah.addEventListener("click",function() {

    let teksTugas = inputTugas.value;

    if(teksTugas === ""){
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");

    spanbaru.innerHTML = teksTugas;

    listbaru.appendChild(spanbaru);

    // Menambahkan tombol edit
    let tombolEdit = document.createElement("button");
    tombolEdit.textContent = "Edit";
    tombolEdit.className = "edit";
    tombolEdit.onclick = function () {
       editTugas(listbaru);
    };

function editTugas(listbaru) {
    let spanTugas = listbaru.querySelector("span");
    let teksLama = spanTugas.innerHTML;
    let inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = teksLama;
    listbaru.replaceChild(inputEdit, spanTugas);
    inputEdit.focus();

    function simpan() {
        let teksBaru = inputEdit.value.trim();
        if (teksBaru === "") {
            alert("Data Harus Dimasukkan!");
            teksBaru = teksLama;
        }
        

    }

    inputEdit.addEventListener("blur", simpan);
    inputEdit.addEventListener("keypress", function(e) {
        if (e.key === "Enter") simpan();
    });

}

    



    // Menambahkan tombol hapus
    let tombolHapus = document.createElement("button"); 
    tombolHapus.textContent = "Hapus";
    tombolHapus.className = "hapus";
    tombolHapus.onclick = function() {
        listbaru.remove();
    };

    listbaru.appendChild(tombolHapus);


    daftarTugas.appendChild(listbaru);

    const warnabaru = document.querySelectorAll("li");
    warnabaru.forEach((item, index) => {
        if(index % 2 === 0) {
            item.style.color = "red";
        } else {
            item.style.color = "green";
        }
    });

    inputTugas.value = "";

});