import { useState } from "react";
import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";

function General({edit,handleSaveGeneral,errorGeneral,handleErrorGeneral}){
    const [personal,setPersonal]=useState({name:"",email:"",number:""});
    const [isDisabled,setIsDisabled]=useState(false);
    const [svg,setSvg]=useState(savesvg);
    const [error,setError]=useState("");

    function inputChange(e){
        const {id,value}=e.target;
        setPersonal(personal=>({
            ...personal,
            [id]:value
        }))
    }

    function toggle_disable(){
        handleSaveGeneral();
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
            <div id="personal">
                <p className="Title">Personal Details</p>
                <div className="label">
                    <input id="name" className="personalInput" placeholder="Name" value={personal.name} onChange={inputChange} disabled={isDisabled}/><br/>
        
                    <input id="email" className="personalInput" type="email" placeholder="Email" value={personal.email} onChange={inputChange} disabled={isDisabled}/><br/>
        
                    <input id="number" className="personalInput" placeholder="Phone Number" value={personal.number} onChange={inputChange} disabled={isDisabled}/>
                </div>
                <p id="personalError" className="error"></p>
                <img src={svg} className="svg" id="savePersonal" onClick={toggle_disable} alt="Save"/>
            </div>
        )
    }
    else{
        return(
            <div>
                <div id="resume">
                <div id="divName">
                    <p>{personal.name}</p>
                </div><hr/>
                <div id="divContact">
                    <p>{personal.email}</p>
                    <p>{personal.number}</p>
                </div>
                <p className="error"></p>
                </div>
            </div>
        )
    }
}

export default General;