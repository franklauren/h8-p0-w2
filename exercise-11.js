function balikKata(kata) {
    // you can only write your code here!
    var balik=''; //reset untuk kata selanjutnya
    var huruf='';  
    //indeks mulai dari 0
    for (i=kata.length-1; i>-1; i--){ //indeks huruf paling kanan = 0
      huruf=kata.charAt(i);
      balik=balik+huruf;
    } 
    console.log(balik);
  }
  // TEST CASES
  console.log(balikKata('Hello World and Coders')); // sredoC dna dlroW olleH
  console.log(balikKata('John Doe')); // eoD nhoJ
  console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
  console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
  console.log(balikKata('Super')); // repuS