const students = [
  {
    id: 1,
    name: "Mark Alonso",
    age: 18,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 60,
      },
      {
        id: 2,
        name: "English",
        score: 85,
      },
    ],
  },
  {
    id: 2,
    name: "Paul Ryan",
    age: 19,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 78,
      },
      {
        id: 2,
        name: "English",
        score: 75,
      },
    ],
  },
  {
    id: 3,
    name: "Jackie Anite",
    age: 21,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 90,
      },
      {
        id: 2,
        name: "English",
        score: 80,
      },
    ],
  },
  {
    id: 4,
    name: "Anita Allain",
    age: 18,
    subjects: [
      {
        id: 1,
        name: "Math",
        score: 71,
      },
      {
        id: 2,
        name: "English",
        score: 45,
      },
    ],
  },
];

for (let student of students) {

  $("#student-list").append("<div class='studentDiv'>" + student.name + "<br>" + "Age: " + student.age + "<br>"  +student.subjects[0].name+": "+student.subjects[0].score+"<br>"+ student.subjects[1].name+": "+student.subjects[1].score+"</div>");


}



// for (let student of students) {

//   $("#student-list").append("<div class='studentDiv'>" + student.name + "<br>" + "Age: " + student.age + "<br>"  +student.subjects[0].name+"<br>"+ student.subjects[1].name+"</div>");
//  $(".studentDiv")
//   for (let subject of student.subjects) {
   
//     $(".studentDiv").append("<div>"+subject.name+"</div>")

//   }

// }
