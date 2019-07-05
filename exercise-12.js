function konversiMenit(menit) {
  // you can only write your code here!
  var jam=menit/60;
  var menit_baru= menit%60;
  
  if (menit_baru<10){
    menit_baru='0'+menit_baru;
  }
  console.log(parseInt(jam)+':'+menit_baru);
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00