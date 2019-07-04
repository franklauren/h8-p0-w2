//1. Menyusun Barisan Bintang
var rows1=5; // input the number of rows

// do loops to display asterisks in the console.
while (rows1>0) {
  console.log('*')
  rows1--;
}

//2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2=5;// input the number of rows 

// do loops to display asterisks in the console.
while(rows2 > 0) {
  var star='';   //mereset ulang variable star 
      //loop 5 bintang dalam satu baris 
      for(var j=1; j<6; j++) {
      star=star + '*';
      }
console.log(star);
rows2 = rows2-1;
}
  
//3.Menyusun Barisan Tangga Bintang Dengan Nested Looping
var rows3=5; // input the number of rows
var cols3=5;
var star='';

// do loops to display asterisks in the console.
for (var rows3=5; rows3>0; rows3--) { //loop rows
  while (cols3>=rows3) {    //loop cols  (jumlah baris dan kolom sama ditiap ujung paling kanan bawah)
    star+='*';
    cols3--;
  }
  console.log(star);
}