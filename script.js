let qrtext=document.getElementById("qrText");
let qrImg=document.getElementById("image");
let qrImgBox=document.getElementById("qrImageBox");

function generateQr(){
    qrImg.src= "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+qrtext.value;
}