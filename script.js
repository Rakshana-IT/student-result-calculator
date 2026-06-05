function calculateResult()
{
let name =
document.getElementById("name").value;

let regno =
document.getElementById("regno").value;

let m1 =
Number(document.getElementById("m1").value);

let m2 =
Number(document.getElementById("m2").value);

let m3 =
Number(document.getElementById("m3").value);

let m4 =
Number(document.getElementById("m4").value);

let m5 =
Number(document.getElementById("m5").value);

let total =
m1+m2+m3+m4+m5;

let percentage =
(total/500)*100;

let grade;

if(percentage>=90)
grade="A+";

else if(percentage>=80)
grade="A";

else if(percentage>=70)
grade="B";

else if(percentage>=60)
grade="C";

else if(percentage>=50)
grade="D";

else
grade="F";

let status =
(percentage>=50) ? "PASS" : "FAIL";

localStorage.setItem("name",name);
localStorage.setItem("regno",regno);
localStorage.setItem("total",total);
localStorage.setItem("percentage",
percentage.toFixed(2));
localStorage.setItem("grade",grade);
localStorage.setItem("status",status);

window.location.href="result.html";
}