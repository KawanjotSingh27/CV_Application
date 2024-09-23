import {useEffect, useState} from 'react';
import General from "./general.jsx";
import Education from "./education.jsx";
import Experience from "./experience.jsx";
import "../styles/index.css";

function Main(){

    const [edit,setEdit]=useState(true);
    const [saveGeneral,setSaveGeneral]=useState(false);
    const [saveEducation,setSaveEducation]=useState(false);
    const [saveExperience,setSaveExperience]=useState(false);
    const [errorGeneral,setErrorGeneral]=useState("");

    function handleSaveGeneral(){
        setSaveGeneral(!saveGeneral);
    }

    const handleErrorGeneral=(value)=>{
        setErrorGeneral(value);
    }

    function handleSaveEducation(){
        setSaveEducation(!saveEducation);
    }

    function handleSaveExperience(){
        setSaveExperience(!saveExperience);
    }

    function editForm(){
        if(edit==true){
            if(saveGeneral==false){
                //edit p in general to show error to save general
            }
        }
        else{
            setEdit(!edit);
        }
    }

    function submitForm(){
        // const emailInput = document.querySelector('input[type="email"]');
        // const personalError=document.querySelector("#personalError");
        // const educationError=document.querySelector("#educationError");
        // const experienceError=document.querySelector("#experienceError");
    
        // if (!emailInput.checkValidity()) {
        //     emailInput.setCustomValidity("Invalid email address");
        //     emailInput.reportValidity(); // This will show the validation error message
        // } else {
        //     emailInput.setCustomValidity(""); // Clear the custom error
        // }
        // if(editPersonal){
        //     personalError.textContent="Please save the above section first";
        // }
        // if(editEducation){
        //     educationError.textContent="Please save the above section first";
        // }
        // if(editExperience){
        //     experienceError.textContent="Please save the above section first";
        // }
        // else{
        //     setEdit(false);
        // }
    }

    return(
    <>
        <General edit={edit} handleSaveGeneral={handleSaveGeneral} errorGeneral={errorGeneral} handleErrorGeneral={handleErrorGeneral}/>
        <Education edit={edit} handleSaveEducation={handleSaveEducation}/>
        <Experience edit={edit} handleSaveExperience={handleSaveExperience}/>
        <div id="divButton">
            {edit?(<button id="submit" onClick={editForm}>Save</button>):(<button id="edit" onClick={editForm}>Edit</button>)
        }
        </div>
    </>
    )
}

export default Main;