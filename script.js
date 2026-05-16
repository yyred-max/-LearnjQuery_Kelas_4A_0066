
const inputTugas = $("#inputTugas");
const btntambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

$("#btntambah").on("click", function() {
    let teksTugas = $("#inputTugas").val();
    let teksTanggal = $("inputTanggal").val();

    if(teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = $("<li>");
    let spanbaru = $("<span>");

    spanbaru.HTML(teksTugas);

    listbaru.append(spanbaru);

    // Menampilkan tanggal
    let spanTanggal = $("<span>");
    spanTanggal.HTML(teksTanggal ? teksTanggal : "Tanpa tanggal");
    spanTanggal.css(color, "#6b7280");
    listbaru.append(spanTanggal);

    // status tugas
    let spanStatus = $("<span>");
    spanStatus.HTML("Pending");
    listbaru.append(spanStatus);

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