

/*
	PART 1 
 */

// Task 1: Update the variable songList so that it is an array with at least 3 song titles.
let songList=["End game", "If the world was ending", "Writings on the wall"];
console.log(songList);

// Task 2: Update the variable classList so that it is an array with 4 Code Nation students (including yourself) in your class.
let classList=["Loyce", "Gloria", "Christine", "Percis"];
console.log(classList);

// Task 3: Update the variable teacherList so that it is an array with all the Code Nation adults in your class.
let teacherList=["Jude", "Lydia", "Ritah", "Henry", "Sandra"];
console.log(teacherList);

// Task 4: Update the variable familyAges so that it is an array with a list of ages (numbers) of your family members.
let familyAges=[5, 6, 7, 8, 50, 60, 70, 80];
console.log(familyAges);

//PAUSE HERE

/*
	PART 2 
 */

// Task 5: Update the variable favSong to retrieve the array element of your favorite song in the songList array (Task 1). 
let favSong=songList[2];
console.log(favSong);

// Task 6: Update the variable bestStudent to retrieve your name from the classList array (Task 2).
let bestStudent=classList[0];
console.log(bestStudent);

// Task 7: Update the variable tallestTeacher to retrieve the array element of the tallest teacher in the teacherList array (Task 3).
let tallestTeacher=teacherList[1];
console.log(tallestTeacher);

// Task 8: Update the variable oldestMemeber to retrieve the array element of the oldest member of your family in the familyAges array. (Task 4)
let oldestMember=familyAges[7];
console.log(oldestMember);
let teachersAndStudents=classList + "," + teacherList;
console.log(teachersAndStudents);