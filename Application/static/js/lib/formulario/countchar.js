function countChar(val, max, target) {
    if(max <= 0) return;
    var len = val.value.length;
    if (len >= max) {
      val.value = val.value.substring(0, max);
    } else {
      var total = max - len;
      $('#'+target).text("Restando " + total + " Caracteres");
    }
}