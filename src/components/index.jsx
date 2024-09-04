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

    function changeName(e){
        setName(e.target.value);
    }

    function changeEmail(e){
        setEmail(e.target.value);
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

    function submitForm(){
        if(!email.includes("@")){
            alert("Please enter a valid email address");
        }
        else{
            setEdit(false);
        }
    }

    return(
    <>
        <General name={name} email={email} number={number} changeName={changeName} changeEmail={changeEmail} changeNumber={changeNumber} edit={edit}/>
        <Education schoolName={schoolName} studyTitle={studyTitle} studyDate={studyDate} changeSchoolName={changeSchoolName} changeStudyTitle={changeStudyTitle} changeStudyDate={changeStudyDate} edit={edit}/>
        <Experience companyName={companyName} positionTitle={positionTitle} responsibilities={responsibilities} jobDateStart={jobDateStart} jobDateEnd={jobDateEnd} changeCompanyName={changeCompanyName} changePositionTitle={changePositionTitle} changeResponsibilties={changeResponsibilties} changeJobDateStart={changeJobDateStart} changeJobDateEnd={changeJobDateEnd} edit={edit} />
        <div id="divButton">
            <button id="edit" onClick={editForm}>Edit</button>
            <button id="submit" onClick={submitForm}>Submit</button>
        </div>
    </>
    )
}

export default Main;