function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function generateTextQRCode() {
  var text = document.getElementById('text-input').value;
  var qrcodeContainer = document.getElementById('text-qrcode');
  qrcodeContainer.innerHTML = "";

  var qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();

  var imgTag = qr.createImgTag(6);  // Angka 6 di sini adalah ukuran per piksel blok QR
  imgTag = imgTag.replace('width="258"', 'width="300"');  // Mengganti lebar gambar
  imgTag = imgTag.replace('height="258"', 'height="300"');  // Mengganti tinggi gambar

  qrcodeContainer.innerHTML = imgTag;
}

function generateWiFiQRCode() {
  var ssid = document.getElementById('ssid-input').value;
  var password = document.getElementById('password-input').value;
  var encryption = document.getElementById('encryption-input').value;
  var qrcodeContainer = document.getElementById('wifi-qrcode');
  qrcodeContainer.innerHTML = "";

  var wifiString = `WIFI:S:${ssid};T:${encryption};P:${password};;`;

  var qr = qrcode(0, 'L');
  qr.addData(wifiString);
  qr.make();

  var imgTag = qr.createImgTag(6);  // Angka 6 di sini adalah ukuran per piksel blok QR
  imgTag = imgTag.replace('width="258"', 'width="300"');  // Mengganti lebar gambar
  imgTag = imgTag.replace('height="258"', 'height="300"');  // Mengganti tinggi gambar

  qrcodeContainer.innerHTML = imgTag;
}

function generateURLQRCode() {
  var url = document.getElementById('url-input').value;
  var qrcodeContainer = document.getElementById('url-qrcode');
  qrcodeContainer.innerHTML = "";

  var qr = qrcode(0, 'L');
  qr.addData(url);
  qr.make();

  var imgTag = qr.createImgTag(6);  // Angka 6 di sini adalah ukuran per piksel blok QR
  imgTag = imgTag.replace('width="258"', 'width="300"');  // Mengganti lebar gambar
  imgTag = imgTag.replace('height="258"', 'height="300"');  // Mengganti tinggi gambar

  qrcodeContainer.innerHTML = imgTag;
}

// Default open tab
document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".tablinks").click();
});
