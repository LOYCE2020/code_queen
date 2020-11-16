const firstName=document.getElementById('fname')
const lastName=document.getElementById('lname')
const email=document.getElementById('mail')
const age=document.getElementById('age')
const submitBtn=document.getElementById('submit-btn')
const signUpForm=document.getElementById('userform')
const errorMessage=document.getElementById('error-msg')
const table=document.getElementById('tableresult')
var form = document.getElementById('userform');

var studentsArray=[];

function localStorageLoad(){
    if(localStorage.studentsResult){
        studentsArray=JSON.parse(localStorage.studentsResult)
        let studentObject = "";
        for(let student in studentsArray) {
            studentObject += `<tr>`;
            for(let eachStudentElement in studentsArray[student]) {
                studentObject += `<td>${studentsArray[student][eachStudentElement]}</td>`;
            }
            studentObject += `</tr>`;
        }
         table.innerHTML = studentObject;
    }
}

submitBtn.addEventListener('click', (e)=>{
    e.preventDefault();
    const firstNameInput=firstName.value;
    const lastNameInput=lastName.value;
    const emailInput=email.value;
    const ageInput=age.value;
    if(firstNameInput=="" ||lastNameInput=="" ||emailInput==""|| ageInput==""){
        errorMessage.innerText='You can not submit an empty field!!!';
        setTimeout(() => {   
            errorMessage.innerHTML=' ';
        }, 3000);       
    }else{  
        const newStudent={userid:studentsArray.length+1, fname:firstNameInput, lname:lastNameInput, email:emailInput, age:ageInput};
        studentsArray.push(newStudent);
        localStorage.studentsResult=JSON.stringify(studentsArray);
        signUpForm.reset();
        localStorageLoad(studentObject)
    }
})