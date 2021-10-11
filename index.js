function formValidation() {
  // validate name
  if (document.querySelector("#nama").value == "") {
      alert("Silahkan isi nama anda!");
      document.querySelector("#nama").focus();
      return false;
  } else {
      const format = /[`0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
      if (format.test(document.querySelector("#nama").value)) {
          alert("Nama hanya boleh berisi alfabet");
          document.querySelector("#nama").focus();
          return false;
      }
  }

  // validate nrp
  if (document.querySelector("#nrp").value == "") {
      alert("Silahkan isi nrp anda!");
      document.querySelector("#nrp").focus();
      return false;
  } else {
      if (!/^[0-9]+$/.test(document.querySelector("#nrp").value)) {
          alert("NRP harus angka");
          document.querySelector("#nrp").focus();
          return false;
      }
  }

  // validate email
  if (document.querySelector("#email").value == "") {
      alert("Silahkan isi email anda!");
      document.querySelector("#email").focus();
      return false;
  }

  // validate domisili
  if (document.querySelector("#domisili").value == "") {
      alert("Silahkan isi domisili anda!");
      document.querySelector("#domisili").focus();
      return false;
  }

  // validate fakultas
  if (document.querySelector("#fakultas").value == "0") {
      alert("Silahkan pilih asal fakultas anda!");
      document.querySelector("#fakultas").focus();
      return false;
  }

  // validate jurusan
  if (document.querySelector("#jurusan").value == "0") {
      alert("Silahkan pilih asal jurusan anda!");
      document.querySelector("#jurusan").focus();
      return false;
  }

  // validate statusVaksin
  if (document.querySelector("#statusVaksin").value == "0") {
      alert("Silahkan pilih status vaksin anda!");
      document.querySelector("#statusVaksin").focus();
      return false;
  }

  if (
      (document.querySelector("#statusVaksin").value == "sudah_vaksin_1" ||
          document.querySelector("#statusVaksin").value ==
              "sudah_vaksin_2") &&
      trimfield(document.getElementById("formFile1").value) == ""
  ) {
      alert("Upload file sertifikat vaksin anda yang pertama!");
      document.querySelector("#statusVaksin").focus();
      return false;
  }

  if (
      document.querySelector("#statusVaksin").value == "3" &&
      trimfield(document.getElementById("formFile2").value) == ""
  ) {
      alert("Upload file sertifikat vaksin anda yang kedua!");
      document.querySelector("#statusVaksin").focus();
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
          document.getElementById("vaccinationCertif-1").style.display =
              "none";
          document.getElementById("vaccinationCertif-2").style.display =
              "none";
      }
  });
  return false;
}

function showJurusan() {
  const optionFakultas = document.querySelector("#fakultas");
  const optionJurusan = document.querySelector("#jurusan");
  const fakultas = optionFakultas.value;

  // console.log(fakultas);

  if (fakultas == "0") {
      optionJurusan.innerHTML = `
          <option value="0">Pilih Jurusan</option>      
      `;
  } else if (fakultas == "creabiz") {
      optionJurusan.innerHTML = `
          <option value="desain_interior">Desain Interior</option>        
          <option value="despro">Desain Produk Industri</option> 
          <option value="manajemen_bisnis">Manajemen Bisnis</option>       
          <option value="studi_pembangunan">Studi Pembangunan</option>        
          <option value="desain_komunikasi_visual">Desain Komunikasi Visual</option>           
      `;
  } else if (fakultas == "civplan") {
      optionJurusan.innerHTML = `
          <option value="teknik_sipil">Teknik Sipil</option>        
          <option value="arsitektur">Arsitektur</option>        
          <option value="teknik_lingkungan">Teknik Lingkungan</option>        
          <option value="pwk">Perencanaan Wilayah dan Kota</option>        
          <option value="teknik_geomatika">Teknik Geomatika</option>        
          <option value="teknik_geofisika">Teknik Geofisika</option>        
      `;
  } else if (fakultas == "electics") {
      optionJurusan.innerHTML = `
          <option value="teknik_elektro">Teknik Elektro</option>        
          <option value="teknik_biomedik">Teknik Biomedik</option>        
          <option value="teknik_komputer">Teknik Komputer</option>        
          <option value="teknik_informatika">Teknik Informatika</option>        
          <option value="sistem_informasi">Sistem Informasi</option>                
          <option value="teknologi_informasi">Teknologi Informasi</option>                
      `;
  } else if (fakultas == "indsys") {
      optionJurusan.innerHTML = `
          <option value="teknik_mesin">Teknik Mesin</option>        
          <option value="teknik_kimia">Teknik Kimia</option>        
          <option value="teknik_fisika">Teknik Fisika</option>        
          <option value="teknik_industri">Teknik Industri</option>        
          <option value="teknik_material">Teknik Material</option>        
          <option value="teknik_pangan">Teknik Pangan</option>        
      `;
  } else if (fakultas == "martech") {
      optionJurusan.innerHTML = `
          <option value="teknik_perkapalan">Teknik Perkapalan</option>        
          <option value="teknik_sistem_perkapalan">Teknik Sistem Perkapalan</option>        
          <option value="teknik_kelautan">Teknik Kelautan</option>        
          <option value="teknik_transportasi_laut">Teknik Transportasi Laut</option>        
          <option value="teknik_bangunan_lepas_pantai">Teknik Bangunan Lepas Pantai</option>                
      `;
  } else if (fakultas == "scientics") {
      optionJurusan.innerHTML = `
          <option value="fisika">Fisika</option>        
          <option value="matematika">Matematika</option>        
          <option value="statistika">Statistika</option>        
          <option value="kimia">Kimia</option>        
          <option value="biologi">Biologi</option>        
          <option value="aktuaria">Aktuaria</option>        
      `;
  }
}

function checkVacccinationStatus() {
  const optionStatusVaksin = document.querySelector("#statusVaksin");
  const statusVaksin = optionStatusVaksin.value;
  // console.log(statusVaksin);
  if (statusVaksin == "0") {
      document.querySelector("#vaccination").style.display = "none";
      document.querySelector("#vaccinationCertif-1").style.display = "none";
      document.querySelector("#vaccinationCertif-2").style.display = "none";
  } else if (statusVaksin == "belum_vaksin") {
      document.querySelector("#vaccination").style.display = "none";
      document.querySelector("#vaccinationCertif-1").style.display = "none";
      document.querySelector("#vaccinationCertif-2").style.display = "none";
  } else if (statusVaksin == "sudah_vaksin_1") {
      document.querySelector("#vaccination").style.display = "block";
      document.querySelector("#vaccinationCertif-1").style.display = "block";
      document.querySelector("#vaccinationCertif-2").style.display = "none";
  } else if (statusVaksin == "sudah_vaksin_2") {
      document.querySelector("#vaccination").style.display = "block";
      document.querySelector("#vaccinationCertif-1").style.display = "block";
      document.querySelector("#vaccinationCertif-2").style.display = "block";
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
