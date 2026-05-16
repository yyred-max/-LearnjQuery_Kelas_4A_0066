
const inputTugas = $("#inputTugas");
const btntambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");
const warnabaru = $("li");

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
    let tombolProgress = $("button");
    tombolProgress.text("Progress");
    tombolProgress.css("pointer");
    tombolProgress.on("click", function() {
        spanStatus.HTML("Progress");
        spanStatus.css("backgroundColor", "#facc15");
    });
    listbaru.append(tombolProgress);

    // Tombol Done 
    let tombolDone = $("button");
    tombolDone.text("Done");
    tombolDone.on("click", function() {
        spanStatus.HTML("Done");
        spanStatus.css("backgroundColor", "#22c55e");
    });
    listbaru.append(tombolDone);

    // Menambahkan tombol edit
    let tombolEdit = $("button");
    tombolEdit.text("Edit");
    tombolEdit.addClass("edit");
    tombolEdit.on("click", function () {
       editTugas(listbaru);
    });


function editTugas(listbaru) {
    let spanTugas = listbaru.find("span: first-child");
    let teksLama = spanTugas.HTML();
    let inputEdit = $("input");
    inputEdit.attr("text");
    inputEdit.val("teksLama");
    listbaru.replaceChild(inputEdit);
    inputEdit.focus();

    function simpan() {
        let teksBaru = inputEdit.value.trim();
        if (teksBaru === "") {
            alert("Data Harus Dimasukkan!");
            teksBaru = teksLama;
        }
        let spanBaru = $("span");
        spanBaru.HTML("teksBaru");
        listbaru.replaceChild(spanBaru);
    }

    inputEdit.on("blur", simpan);
    inputEdit.on("keypress", function(e) {
        if (e.key === "Enter") simpan();
    });

    }

    listbaru.append(tombolEdit);



    // Menambahkan tombol hapus
    let tombolHapus = $("button"); 
    tombolHapus.text("Hapus");
    tombolHapus.addClass("hapus");
    tombolHapus.on("click", function() {
        listbaru.remove();
    });

    listbaru.append(tombolHapus);


    daftarTugas.append(listbaru);

  
    warnabaru.each(function (index)  {
        if(index % 2 === 0) {
            $(this).css("color", "red");
        } else {
            $(this).css("color", "green");
        }
    });

    inputTugas.val = "";

});