
const inputTugas = $("#inputTugas");
const btntambah = $("#btnTambah");
const daftarTugas = $("#daftarTugas");

$("#btnTambah").on("click", function() {
    let teksTugas = $("#inputTugas").val();
    let teksTanggal = $("#inputTanggal").val();

    if(teksTugas === "") {
        alert("Data harus dimasukkan!");
        return;
    }

    let listbaru = $("<li>");
    let spanbaru = $("<span>");

    spanbaru.html(teksTugas);

    listbaru.append(spanbaru);

    // Menampilkan tanggal
    let spanTanggal = $("<span>");
    spanTanggal.html(teksTanggal ? teksTanggal : "Tanpa tanggal");
    spanTanggal.css("color", "#6b7280");
    listbaru.append(spanTanggal);

    // status tugas
    let spanStatus = $("<span>");
    spanStatus.html("Pending");
    listbaru.append(spanStatus);

    // Tombol Progress
    let tombolProgress = $("<button>");
    tombolProgress.text("Progress");
    tombolProgress.css("cursor", "pointer");
    tombolProgress.on("click", function() {
        spanStatus.html("Progress");
        spanStatus.css("background-color", "#facc15");
    });
    listbaru.append(tombolProgress);

    // Tombol Done 
    let tombolDone = $("<button>");
    tombolDone.text("Done");
    tombolDone.on("click", function() {
        spanStatus.html("Done");
        spanStatus.css("background-color", "#22c55e");
    });
    listbaru.append(tombolDone);

    // Menambahkan tombol edit
    let tombolEdit = $("<button>");
    tombolEdit.text("Edit");
    tombolEdit.addClass("edit");
    tombolEdit.on("click", function () {
       editTugas(listbaru);
    });


function editTugas(listbaru) {
    let spanTugas = listbaru.find("span:first-child");
    let teksLama = spanTugas.text();
    let inputEdit = $("<input>");
    inputEdit.attr("type", "text");
    inputEdit.val(teksLama);
    spanTugas.replaceWith(inputEdit);
    inputEdit.focus();

    function simpan() {
        let teksBaru = inputEdit.val().trim();
        if (teksBaru === "") {
            alert("Data Harus Dimasukkan!");
            teksBaru = teksLama;
        }
        let spanBaru = $("<span>");
        spanBaru.html(teksBaru);
        listbaru.replaceWith(spanBaru);
    }

    inputEdit.on("blur", simpan);
    inputEdit.on("keypress", function(e) {
        if (e.key === "Enter") simpan();
    });

    }

    listbaru.append(tombolEdit);



    // Menambahkan tombol hapus
    let tombolHapus = $("<button>"); 
    tombolHapus.text("Hapus");
    tombolHapus.addClass("hapus");
    tombolHapus.on("click", function() {
        listbaru.remove();
    });

    listbaru.append(tombolHapus);


    daftarTugas.append(listbaru);

    $("li").each(function(index) {
        if(index % 2 === 0) {
            $(this).css("color", "red");
        } else {
            $(this).css("color", "green");
        }
    });

    inputTugas.val("");

});