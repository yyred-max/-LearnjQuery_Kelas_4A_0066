
const inputTugas = document.getElementById("inputTugas");
const btntambah = document.getElementById("btnTambah");
const daftarTugas = document.getElementById("daftarTugas");

btntambah.addEventListener("click",function() {

    let teksTugas = inputTugas.value;
    let teksTanggal = inputTanggal.value;

    if(teksTugas === ""){
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = document.createElement("li");
    let spanbaru = document.createElement("span");

    spanbaru.innerHTML = teksTugas;

    listbaru.appendChild(spanbaru);

    // Menampilkan tanggal
    let spanTanggal = document.createElement("span");
    spanTanggal.innerHTML = teksTanggal ? teksTanggal : "Tanpa tanggal";
    spanTanggal.style.color = "#6b7280";
    listbaru.appendChild(spanTanggal);

    // status tugas
    let spanStatus = document.createElement("span");
    spanStatus.innerHTML = "Pending";
    listbaru.appendChild(spanStatus);

    // Tombol Progress
    let tombolProgress = document.createElement("button");
    tombolProgress.textContent = "Progress";
    tombolProgress.style.cursor = "pointer";
    tombolProgress.onclick = function() {
        spanStatus.innerHTML = "Progress";
        spanStatus.style.backgroundColor = "#facc15";
    };
    listbaru.appendChild(tombolProgress);

    // Tombol Done 
    let tombolDone = document.createElement("button");
    tombolDone.textContent = "Done";
    tombolDone.onclick = function() {
        spanStatus.innerHTML = "Done";
        spanStatus.style.backgroundColor = "#22c55e";
    };
    listbaru.appendChild(tombolDone);

    // Menambahkan tombol edit
    let tombolEdit = document.createElement("button");
    tombolEdit.textContent = "Edit";
    tombolEdit.className = "edit";
    tombolEdit.onclick = function () {
       editTugas(listbaru);
    };


function editTugas(listbaru) {
    let spanTugas = listbaru.querySelector("span: first-child");
    let teksLama = spanTugas.innerHTML;
    let inputEdit = document.createElement("input");
    inputEdit.type = "text";
    inputEdit.value = teksLama;
    inputEdit.style.flex = "1";
    inputEdit.style.padding = "4px";
    inputEdit.style.marginRight = "5px";
    listbaru.replaceChild(inputEdit, spanTugas);
    inputEdit.focus();

    function simpan() {
        let teksBaru = inputEdit.value.trim();
        if (teksBaru === "") {
            alert("Data Harus Dimasukkan!");
            teksBaru = teksLama;
        }
        let spanBaru = document.createElement("span");
        spanBaru.innerHTML = teksBaru;
        listbaru.replaceChild(spanBaru, inputEdit);
    }

    inputEdit.addEventListener("blur", simpan);
    inputEdit.addEventListener("keypress", function(e) {
        if (e.key === "Enter") simpan();
    });

    }

    listbaru.appendChild(tombolEdit);



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