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
const studentObject= document.createElement("div")
studentObject.classList.add('studentObject')
  $(studentObject).append("<div class='studentTittle'>" + student.name + "<br>" + "Age: " + student.age +"<br>" +"</div>");
  for (let subject of student.subjects) {
   
    $(studentObject).append("<div class='studentBody'>"+"<b>"+subject.name+":</b> "+subject.score+"</div>")
    $("#student-list").append(studentObject)

  }

}
