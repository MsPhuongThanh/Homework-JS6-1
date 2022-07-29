// EXERCISE 1
function exercise1() {
    // Input: khởi tạo biến 
    let total = 0;
    let n = 0;
    // Process
    while (total < 10000) {
    //   Bước nhảy vòng lặp là n++
      n++;
    //   Cứ mỗi vòng lặp là total sẽ cộng dồn với n cho đến khi total > 10000 
      total = total + n;
    }
    console.log(n);
    //   Output:
    let divResult = document.getElementById("result");
    divResult.style.display = "block";
    divResult.innerHTML = "Giá trị của n là : " + n;
  }
 
  //EXERCISE 2

  function exercise2() {
    // Input: khởi tạo biến 
    let numberX = +document.getElementById("numberX").value;
    let numberN = +document.getElementById("numberN").value;
  
    // Process
    let S = 0;
    for (let i = 1; i <= numberN; i++) {
      S += Math.pow(numberX, i);
      console.log(S);
    }
    // Output
    let divResult = document.getElementById("result1");
    divResult.style.display = "block";
    divResult.innerHTML = "Tổng S(n)=: " + S;
  };

//   EXERCISE 3
function exercise3() {
    // Input: khởi tạo biến
    let numN = +document.getElementById("numN").value;
  
    // Process 
    let giaithua = 1;
    for (let i = 1; i <= numN; i++) {
      giaithua = giaithua * i;
    }
    console.log(giaithua);
//   Output
    let divResult = document.getElementById("result2");
    divResult.style.display = "block";
    divResult.innerHTML = " Kết quả là : " + giaithua;
  };

//   EXERCISE 4
function exercise4() {
    // Input : khởi tạo biến
    let count = "";
   
    // Process:
    for (let i = 1; i <= 10; i++) {
      if (i % 2 === 0) {
        count += "<div style='background: red'>" + "even"  + "</div>" ;
      } else {
        count += "<div style='background: blue'>" + "odd"   + "</div>";
      }
    }
//   Output :
    console.log(count);
  
    let divResult = document.getElementById("result3");
    divResult.style.display = "block";
    divResult.innerHTML = count;
  };
  