function generateQRCode() {
  var text = document.getElementById('text-input').value;
  var qrcodeContainer = document.getElementById('qrcode');
  qrcodeContainer.innerHTML = "";
  
  var qr = qrcode(0, 'L');
  qr.addData(text);
  qr.make();
  var imgTag = qr.createImgTag();
  
  qrcodeContainer.innerHTML = imgTag;
}
