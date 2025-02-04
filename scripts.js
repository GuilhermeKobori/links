function copyPix() {
  var pix = "503707e1-fe07-4184-b9da-c6262ad41f99";

  navigator.clipboard.writeText(pix);
  
  // Alert the copied text
  alert("PIX copiado: " + pix);
}
