function formValidation() {
  if (document.form.nama.value == "") {
    alert("Silahkan isi nama anda!");
    document.form.nama.focus();
    return false;
  }

  if (document.form.nrp) {
    if (document.form.nrp.value == "") {
      alert("Silahkan isi nrp anda!");
      document.form.nrp.focus();
      return false;
    }
    if (
      document.form.nrp.value != "" &&
      !/^[0-9]+$/.test(document.form.nrp.value)
    ) {
      alert("NRP harus angka");
      document.form.nrp.focus();
      return false;
    }
  }

  if (document.form.email.value == "") {
    alert("Silahkan isi email anda!");
    document.form.email.focus();
    return false;
  }

  if (document.form.domisili.value == "") {
    alert("Silahkan isi domisili anda!");
    document.form.domisili.focus();
    return false;
  }

  if (document.form.fakultas.selectedIndex < 1) {
    alert("Silahkan pilih asal fakultas anda!");
    document.form.fakultas.focus();
    return false;
  }

  if (document.form.jurusan.selectedIndex < 1) {
    alert("Silahkan pilih asal jurusan anda!");
    document.form.jurusan.focus();
    return false;
  }

  if (document.form.statusVaksin.selectedIndex < 1) {
    alert("Silahkan pilih status vaksin anda!");
    document.form.statusVaksin.focus();
    return false;
  }

  if (
    (document.form.statusVaksin.value == "2" ||
      document.form.statusVaksin.value == "3") &&
    trimfield(document.getElementById("formFile1").value) == ""
  ) {
    alert("Upload file sertifikat vaksin anda yang pertama!");
    document.form.statusVaksin.focus();
    return false;
  }

  if (
    document.form.statusVaksin.value == "3" &&
    trimfield(document.getElementById("formFile2").value) == ""
  ) {
    alert("Upload file sertifikat vaksin anda yang kedua!");
    document.form.statusVaksin.focus();
    return false;
  }

  // Kebersediaan kuliah tatap muka
  // if (
  //   (document.form.statusVaksin.value == "2" ||
  //     document.form.statusVaksin.value == "3") &&
  //   document.getElementById("status_kuliah1").value != "ya" &&
  //   document.getElementById("status_kuliah2").value != "tidak"
  // ) {
  //   alert("Silahkan pilih kebersediaan kuliah tatap muka !");
  //   return false;
  // }

  Swal.fire({
    title: "Are you sure?",
    text: "You can not change your input after submitting the form!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, submit!",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Success!",
        text: "Your data has been saved",
        icon: "success",
        confirmButtonColor: "#3085d6",
      });
      document.form.reset();
      document.getElementById("vaccination").style.display = "none";
      document.getElementById("vaccinationCertif-1").style.display = "none";
      document.getElementById("vaccinationCertif-2").style.display = "none";
    }
  });
  return false;
}

function showJurusan() {
  if (document.form.fakultas.value == "creabiz") {
  } else if (document.form.fakultas.value == "civplan") {
  } else if (document.form.fakultas.value == "electics") {
  } else if (document.form.fakultas.value == "indysys") {
  } else if (document.form.fakultas.value == "martech") {
  } else if (document.form.fakultas.value == "scientics") {
  }
}

function checkVacccinationStatus() {
  if (document.form.statusVaksin.value == "1") {
    document.getElementById("vaccination").style.display = "none";
    document.getElementById("vaccinationCertif-1").style.display = "none";
    document.getElementById("vaccinationCertif-2").style.display = "none";
  } else if (document.form.statusVaksin.value == "2") {
    document.getElementById("vaccination").style.display = "block";
    document.getElementById("vaccinationCertif-1").style.display = "block";
  } else if (document.form.statusVaksin.value == "3") {
    document.getElementById("vaccination").style.display = "block";
    document.getElementById("vaccinationCertif-1").style.display = "block";
    document.getElementById("vaccinationCertif-2").style.display = "block";
  }
}

function validateFileupload(fileName) {
  var allowed_extensions = new Array("jpg", "png", "pdf");
  var file_extension = fileName.split(".").pop().toLowerCase(); // split function will split the filename by dot(.), and pop function will pop the last element from the array which will give you the extension as well. If there will be no extension then it will return the filename.

  for (var i = 0; i <= allowed_extensions.length; i++) {
    if (allowed_extensions[i] == file_extension) {
      return true; // valid file extension
    }
  }
  alert("File sertifikat harus jpg, png, atau pdf !");
  return false;
}

function trimfield(str) {
  return str.replace(/^\s+|\s+$/g, "");
}
