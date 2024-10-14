import { useState } from "react";
import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";
import addsvg from "../assets/add.svg";
import deletesvg from "../assets/delete.svg";


function Experience({edit,handleSaveExperience,errorExperience,handleErrorExperience}){
    const [jobs,setJobs]=useState([{companyName:"", positionTitle:"", responsibilities:"", jobDateStart:"", jobDateEnd:""}]);
    const [isDisabled,setIsDisabled]=useState(false);
    const [svg,setSvg]=useState(savesvg);

    function addJob(){
        setJobs([...jobs,{companyName:"", positionTitle:"", responsibilities:"", jobDateStart:"", jobDateEnd:""}]);
    }

    function deleteJob(e){
        const index=e.target.getAttribute("data-index");
        setJobs(jobs.filter((job,i)=>i!=index));
    }

    function inputChange(index,e){
        const {id,value}=e.target;
        const newJob=[...jobs];
        newJob[index][id]=value;
        setJobs(newJob);
    }

    function toggle_disable(){
        handleSaveExperience();
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
            <div id="experience">
                <p className="Title">Job Experience</p>
                <div className="label">
                    {jobs.map((job,index)=>{
                        return(
                            <>
                                <div key={index} className="card">
                                    <input id="companyName" className="experienceInput" placeholder="Company Name" value={job.companyName} onChange={e=>inputChange(index,e)} disabled={isDisabled}/><br/>
            
                                    <input id="positionTitle" className="experienceInput" placeholder="Position Title" value={job.positionTitle} onChange={e=>inputChange(index,e)} disabled={isDisabled}/><br/>

                                    <input id="responsibilities" size="100" className="experienceInput" placeholder="Job Responsiblities" value={job.responsibilities} onChange={e=>inputChange(index,e)} disabled={isDisabled}/><br/>

                                    <input id="jobDateStart" type="date" className="experienceInput" value={job.jobDateStart} onChange={e=>inputChange(index,e)} disabled={isDisabled}/>
                                    <label htmlFor="jobDateEnd" id="toLabel"> To </label>
                                    <input id="jobDateEnd" type="date" className="experienceInput" value={job.jobDateEnd} onChange={e=>inputChange(index,e)} disabled={isDisabled}/>
                                </div>
                                <img src={deletesvg} className="deletesvg" data-index={index} id="deleteJob" onClick={deleteJob} alt="Delete"/>
                            </>
                        )
                    })}
                </div>
                <img src={addsvg} className="addsvg" id="addEducation" onClick={addJob} alt="Add"/>
                <p id="experienceError" className="error">{errorExperience}</p>
                <img src={svg} className="svg" id="saveExperience" onClick={toggle_disable} alt="Save"/>
            </div>
        )
    }
    else{
        return(
            <div id="resume">
                <div>
                    <div id="divTitle">
                        <p>Job Experience</p>
                    </div><hr/>
                    <div id="divInfo">
                            {
                                jobs.map((job,index)=>{
                                    return(
                                        <div key={index} className="infoCard">
                                            <div>
                                                <p>{job.companyName}</p>
                                                <p>{job.positionTitle}</p>
                                                <p>{job.responsibilities}</p>
                                            </div>
                                            <p>{job.jobDateStart} to {job.jobDateEnd}</p>
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

export default Experience;