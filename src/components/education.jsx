import { useState } from "react";
import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";
import addsvg from "../assets/add.svg";

function Education({edit,handleSaveEducation}){
    const [education,setEducation] = useState([{schoolName: "", studyTitle: "", studyDate: ""}]);
    const [isDisabled,setIsDisabled]=useState(false);
    const [svg,setSvg]=useState(savesvg);

    function addEducation(){
        setEducation([...education,{schoolName:"",studyTitle:"",studyDate:""}]);
    }

    function inputChange(index,e){
        const {id,value}=e.target;
        const newEducation=[...education];
        newEducation[index][id]=value;
        setEducation(newEducation);
    }

    function toggle_disable(){
        handleSaveEducation();
        setIsDisabled(!isDisabled);
        toggle_svg();
    }

    function toggle_svg(){
        if(svg==savesvg){
            setSvg(editsvg);
        }
        else{
            setSvg(savesvg);
        }
    }

    if(edit){
        return(
            <div id="education">
                <p className="Title">Educational Details</p>
                <div className="label">
                    {education.map((edu,index)=>{
                        return(
                            <div key={index} className="card">
                            <input id="schoolName" className="educationInput" placeholder="School Name" value={edu.schoolName} onChange={e=>inputChange(index,e)} disabled={isDisabled}/><br/>
        
                            <input id="studyTitle" className="educationInput" placeholder="Title of Study" value={edu.studyTitle} onChange={e=>inputChange(index,e)} disabled={isDisabled}/><br/>

                            <input id="studyDate" className="educationInput" type="date" value={edu.studyDate} onChange={e=>inputChange(index,e)} disabled={isDisabled}/>
                            </div>
                        )
                        
                    })}
                </div>
                <img src={addsvg} className="addsvg" id="addEducation" onClick={addEducation} alt="Add"/>
                <p id="educationError" className="error"></p>
                <img src={svg} className="svg" id="saveEducation" onClick={toggle_disable} alt="Save"/>
            </div>
        )
        
    }
    else{
        return(
            <div id="resume">
                <div>
                <div id="divTitle">
                    <p>Education</p>
                </div><hr/>
                <div id="divInfo">
                        {
                            education.map((edu,index)=>{
                                return(
                                    <div key={index} className="infoCard">
                                        <div>
                                            <p>{edu.schoolName}</p>
                                            <p>{edu.studyTitle}</p>
                                        </div>
                                        <p>{edu.studyDate}</p>
                                    </div>
                                )
                            })
                        }
                </div>
            </div>
            </div>
            
        )
    }
}

export default Education;