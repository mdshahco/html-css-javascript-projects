let userCurrentDate = document.getElementById("currentDate");

let userBirthDate = document.getElementById("birthDate");
userBirthDate.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge(){
    let CurrentDate = new Date(userCurrentDate.value);
    let d1 = CurrentDate.getDate();
    let m1 = CurrentDate.getMonth() + 1;
    let y1 = CurrentDate.getFullYear();

    let birthDate = new Date(userBirthDate.value);
    let d2 = birthDate.getDate();
    let m2 = birthDate.getMonth() + 1;
    let y2 = birthDate.getFullYear();

    let d3, m3, y3;
    y3 = y1 - y2;
    if (m1 >= m2) {
        m3 = m1 - m2
    } else {
        y3--;
        m3 = 12 + m1 - m2;
    }
    if (d1 >= d2) {
        d3 = d1 -d2;
    } else {
        m3--;
        d3 = getDaysInMonth(y2, m2) + d1 - d2;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;  
    }
   
    result.innerHTML = `Your are <span>${y3}</span> years, <span>${m3}</span> months and <span>${d3}</span> days old` 

    function getDaysInMonth(year, month){
        return new Date(year, month, 0).getDate();
    }
}