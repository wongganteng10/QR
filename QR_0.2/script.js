function generateQRCode() {
  var text = document.getElementById('text-input').value;
  var qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = "";

  var qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();
  
  var imgTag = qr.createImgTag(6);  // Angka 6 di sini adalah ukuran per piksel blok QR
  imgTag = imgTag.replace('width="258"', 'width="300"');  // Mengganti lebar gambar
  imgTag = imgTag.replace('height="258"', 'height="300"');  // Mengganti tinggi gambar
  
  qrcodeContainer.innerHTML = imgTag;
}
