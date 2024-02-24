const arry = [73, 68, 38, 33];

function gradingStudents(grades) {
  for (let i = 0; i < grades.length; i++) {
    let num = grades[i];
    if (num < 40) {
      console.log(num);
    } else {
      let toCil = num / 5;
      let rounded = Math.ceil(toCil);
      let extraMark = rounded * 5;
      if (extraMark - num < 3) {
        console.log(extraMark);
      } else {
        console.log(num);
      }
    }
  }
}

gradingStudents(arry);
