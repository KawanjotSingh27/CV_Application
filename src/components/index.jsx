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
    const [errorEducation,setErrorEducation]=useState("");
    const [errorExperience,setErrorExperience]=useState("");

    function handleSaveGeneral(){
        setSaveGeneral(!saveGeneral);
    }

    const handleErrorGeneral=(value)=>{
        setErrorGeneral(value);
    }

    function handleSaveEducation(){
        setSaveEducation(!saveEducation);
    }

    const handleErrorEducation=(value)=>{
        setErrorEducation(value);
    }

    function handleSaveExperience(){
        setSaveExperience(!saveExperience);
    }

    const handleErrorExperience=(value)=>{
        setErrorExperience(value);
    }

    function editForm(){
        if(edit==true){
            if(saveGeneral==false){
                handleErrorGeneral("Save your Personal information before proceeding");
            }
            else if(saveEducation==false){
                handleErrorEducation("Save your Educational information before proceeding");
            }
            else if(saveExperience==false){
                handleErrorExperience("Save your Job experience before proceeding");
            }
            else{
                setEdit(!edit);
            }
        }
        else{
            setEdit(!edit);
        }
    }

    return(
    <>
        <General edit={edit} handleSaveGeneral={handleSaveGeneral} errorGeneral={errorGeneral} handleErrorGeneral={handleErrorGeneral}/>
        <Education edit={edit} handleSaveEducation={handleSaveEducation} errorEducation={errorEducation} handleErrorEducation={handleErrorEducation}/>
        <Experience edit={edit} handleSaveExperience={handleSaveExperience} errorExperience={errorExperience} handleErrorExperience={handleErrorExperience}/>
        <div id="divButton">
            {edit?(<button id="submit" onClick={editForm}>Save</button>):(<button id="edit" onClick={editForm}>Edit</button>)
        }
        </div>
    </>
    )
}

export default Main;