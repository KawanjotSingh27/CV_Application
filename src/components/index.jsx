import {useState} from 'react';
import General from "./general.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import "../styles/index.css";

function Main(){
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [number,setNumber]=useState("");

    const [schoolName,setSchoolName]=useState("");
    const [studyTitle,setStudyTitle]=useState("");
    const [studyDate,setStudyDate]=useState("");

    const [companyName,setCompanyName]=useState("");
    const [positionTitle,setPositionTitle]=useState("");
    const [responsibilities,setResponsiblities]=useState("");
    const [jobDateStart,setJobDateStart]=useState("");
    const [jobDateEnd,setJobDateEnd]=useState("");

    const [edit,setEdit]=useState(true);
    const [editPersonal,setEditPersonal]=useState(true);
    const [editEducation,setEditEducation]=useState(true);
    const [editExperience,setEditExperience]=useState(true);


    function changeName(e){
        setName(e.target.value);
    }

    function changeEmail(e){
        const emailInput=e.target;
        setEmail(e.target.value);
        
        emailInput.setCustomValidity('');
    }

    function changeNumber(e){
        setNumber(e.target.value);
    }

    function changeSchoolName(e){
        setSchoolName(e.target.value);
    }

    function changeStudyTitle(e){
        setStudyTitle(e.target.value);
    }

    function changeStudyDate(e){
        setStudyDate(e.target.value);
    }

    function changeCompanyName(e){
        setCompanyName(e.target.value);
    }

    function changePositionTitle(e){
        setPositionTitle(e.target.value);
    }

    function changeResponsibilties(e){
        setResponsiblities(e.target.value);
    }

    function changeJobDateStart(e){
        setJobDateStart(e.target.value);
    }

    function changeJobDateEnd(e){
        setJobDateEnd(e.target.value);
    }

    function editForm(){
        setEdit(true);
    }

    function toggleEditPersonal(){
        setEditPersonal(!editPersonal);
    }

    function toggleEditEducation(){
        setEditEducation(!editEducation);
    }

    function toggleEditExperience(){
        setEditExperience(!editExperience);
    }

    function submitForm(){
        const emailInput = document.querySelector('input[type="email"]');
        const personalError=document.querySelector("#personalError");
        const educationError=document.querySelector("#educationError");
        const experienceError=document.querySelector("#experienceError");
    
        if (!emailInput.checkValidity()) {
            emailInput.setCustomValidity("Invalid email address");
            emailInput.reportValidity(); // This will show the validation error message
        } else {
            emailInput.setCustomValidity(""); // Clear the custom error
        }
        if(editPersonal){
            personalError.textContent="Please save the above section first";
        }
        if(editEducation){
            educationError.textContent="Please save the above section first";
        }
        if(editExperience){
            experienceError.textContent="Please save the above section first";
        }
        else{
            setEdit(false);
        }
    }

    return(
    <>
        <General name={name} email={email} number={number} changeName={changeName} changeEmail={changeEmail} changeNumber={changeNumber} edit={edit} toggleEdit={toggleEditPersonal} editPersonal={editPersonal}/>
        <Education schoolName={schoolName} studyTitle={studyTitle} studyDate={studyDate} changeSchoolName={changeSchoolName} changeStudyTitle={changeStudyTitle} changeStudyDate={changeStudyDate} edit={edit} toggleEdit={toggleEditEducation} editEducation={editEducation}/>
        <Experience companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} jobDateStart={jobDateStart} jobDateEnd={jobDateEnd} changeCompanyName={changeCompanyName} changePositionTitle={changePositionTitle} changeResponsibilties={changeResponsibilties} changeJobDateStart={changeJobDateStart} changeJobDateEnd={changeJobDateEnd} edit={edit} toggleEdit={toggleEditExperience} editExperience={editExperience}/>
        <div id="divButton">
            {edit?(<button id="submit" onClick={submitForm}>Save</button>):(<button id="edit" onClick={editForm}>Edit</button>)
            
        }
        </div>
    </>
    )
}

export default Main;