function copy() {
    var copyText = document.getElementById("codetext");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
  }