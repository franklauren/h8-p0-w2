//1. Melakukan Looping Menggunakan While
var loop = 2;
var loop2 = 20;

console.log('Looping Pertama');
while (loop < 21) {
  console.log(loop + ' - ' + 'I love coding');
  loop=loop+2;
}

console.log('Looping Kedua');
while (loop2 > 0) {
  console.log(loop2 + ' - ' + 'I will become fullstack developer');
  loop2=loop2-2;
}

//2. Melakukan Looping Menggunakan For
console.log('Looping Pertama');
for (var loop = 1; loop < 21; loop++) {
  console.log(loop + ' - ' + 'I love coding');
}

console.log('Looping Kedua');
for (var loop2 = 20; loop2 > 0; loop2--) {
  console.log(loop2 + ' - ' + 'I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
//a. Pertambahan 1
for (var lop=1; lop < 101; lop++) {
    if (lop%2==0){
      console.log(' "GENAP" ');
    }
    else {
      console.log(' "GANJIL" ')
    }
  }
//b.Pertambahan 2 Kelipatan 3
for (var lop=1; lop < 101; lop=lop+2) {
    if (lop%3==0){
      console.log(lop+' kelipatan 3 ');
    }
    else {
      console.log(' "" ')
    }
  }

//Pertambahan 5 Kelipatan 6 
for (var lop=1; lop < 101; lop=lop+5) {
    if (lop%6==0){
      console.log(lop+' kelipatan 6 ');
    }
    else {
      console.log(' "" ')
    }
  }

//Pertambahan 9 Kelipatan 10
for (var lop=1; lop < 101; lop=lop+9) {
    if (lop%10==0){
      console.log(lop+' kelipatan 10 ');
    }
    else {
      console.log(' "" ')
    }
  }

  