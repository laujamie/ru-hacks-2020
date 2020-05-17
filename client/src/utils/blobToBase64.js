const blobToBase64 = (blob, cb) => {
  var reader = new FileReader();
  reader.onload = function () {
    var dataURL = reader.result;
    var base64 = dataURL.split(',')[1];
    cb(base64);
  };
  reader.readAsDataURL(blob);
};

export default blobToBase64;
