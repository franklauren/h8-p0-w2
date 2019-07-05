function xo(str) {
    // you can only write your code here!
    var jumlah_x=0;
    var jumlah_o=0;
    for(var i=str.length-1; i>-1; i--) {
      if (str.charAt(i)==='x') {
        jumlah_x++;      
      }
      else if (str.charAt(i)==='o') {
        jumlah_o++;
      }
    }
    if (jumlah_x===jumlah_o) {
      return true;
    }
    else {
      return false;
    }
  }
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true