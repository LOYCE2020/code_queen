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
  for (let student in students) {
    for (let subject in students[student].subjects) {
      $("#student-list").append("<div class='studentDiv'>" + students[student].name + "<br>" + "Age: " + students[student].age + "<br>" + students[student].subjects[subject].name + ": " + students[student].subjects[subject].score + "</div>");
      $("#student-list").append("</div>");
      console.log(`${students[student].name} ${students[student].age} ${students[student].subjects[subject].name}: ${students[student].subjects[subject].score}`);
    }
  }