const firstName=document.getElementById('fname')
const lastName=document.getElementById('lname')
const email=document.getElementById('mail')
const age=document.getElementById('age')
const submitBtn=document.getElementById('submit-btn')
const signUpForm=document.getElementById('userform')
const errorMessage=document.getElementById('error-msg')

const students=[ {
    userid:"1",
    fname:"bubble",
    lname:"Wacy",
    email:"bubble@gmail.com",
    age:7
}, {
    userid:"2",
    fname:"Ways",
    lname:"Mary",
    email:"mary@gmail.com",
    age:10
},{
    userid:"3",
    fname:"Nabasirye",
    lname:"Loyce",
    email:"loyce@gmail.com",
    age:14
}];
let studentObject;
for(let student in students) {
    studentObject += `<tr>`;
    for(let eachStudent in students[student]) {
        studentObject += `<td>${students[student][eachStudent]}</td>`;
    }
    studentObject += `</tr>`;
}
document.getElementById('tableresult').innerHTML = studentObject;
submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const firstNameInput=firstName.value;
    const lastNameInput=lastName.value;
    const emailInput=email.value;
    const ageInput=age.value;
    if(firstNameInput=="" ||lastNameInput=="" ||emailInput==""|| ageInput==""){
        
        errorMessage.style.visibility="visible"
        submitBtn.style.color="rgb(167, 64, 64)"
        
   }else{
       
    const newStudent={
        userid:students.length+1,
        fname:firstNameInput,
        lname:lastNameInput,
        email:emailInput,
        age:ageInput
    }
    students.push(newStudent)
    const table=document.getElementById('tableresult')

    var studentObject = "";
    for(let student in students) {
        studentObject += `<tr>`;
        for(let eachStudent in students[student]) {
            studentObject += `<td>${students[student][eachStudent]}</td>`;
        }
        studentObject += `</tr>`;
    }
    table.innerHTML = studentObject;
    signUpForm.reset();

}

})

const clearError=document.getElementById('fname')
clearError.addEventListener("click",()=>{
    errorMessage.style.visibility="hidden"
    submitBtn.style.color="white"
})





