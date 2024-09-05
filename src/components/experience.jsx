import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";


function Experience({companyName,positionTitle,responsibilities,jobDateStart,jobDateEnd,changeCompanyName,changePositionTitle,changeResponsibilties,changeJobDateStart,changeJobDateEnd,edit,toggleEdit,editExperience}){
    if(edit){
        if(editExperience){
            return(
                <div id="experience">
                    <p className="Title">Job Experience</p>
                    <div className="label">
                        <input id="companyName" className="experienceInput" placeholder="Company Name" value={companyName} onChange={changeCompanyName}/><br/>
            
                        <input id="positionTitle" className="experienceInput" placeholder="Position Title" value={positionTitle} onChange={changePositionTitle}/><br/>
            
                        <input id="responsiblities" size="100" className="experienceInput" placeholder="Job Responsiblities" value={responsibilities} onChange={changeResponsibilties}/><br/>
    
                        <input id="jobDateStart" type="date" className="experienceInput" value={jobDateStart} onChange={changeJobDateStart}/>
                        <label htmlFor="jobDateEnd" id="toLabel"> To </label>
                        <input id="jobDateEnd" type="date" className="experienceInput" value={jobDateEnd} onChange={changeJobDateEnd}/>
                    </div>
                    <p id="experienceError" className="error"></p>
                    <img src={savesvg} className="savesvg" id="saveExperience" onClick={toggleEdit} alt="Save"/>
                </div>
                
            )
        }
        else{
            return(
                <div id="experience">
                    <p className="Title">Job Experience</p>
                    <div className="label">
                        <input id="companyName" className="experienceInput" placeholder="Company Name" value={companyName} onChange={changeCompanyName} disabled/><br/>
            
                        <input id="positionTitle" className="experienceInput" placeholder="Position Title" value={positionTitle} onChange={changePositionTitle} disabled/><br/>
            
                        <input id="responsiblities" size="100" className="experienceInput" placeholder="Job Responsiblities" value={responsibilities} onChange={changeResponsibilties} disabled/><br/>
    
                        <input id="jobDateStart" type="date" className="experienceInput" value={jobDateStart} onChange={changeJobDateStart}/>
                        <label htmlFor="jobDateEnd" id="toLabel"> To </label>
                        <input id="jobDateEnd" type="date" className="experienceInput" value={jobDateEnd} onChange={changeJobDateEnd}/>
                    </div>
                    <img src={editsvg} className="editsvg" id="editExperience" onClick={toggleEdit} alt="Edit"/>
                </div>
                
            )
        }
        
    }
    else{
        return(
            <>
                <div id="divTitle">
                    <p>Job Experience</p>
                </div><hr/>
                <div id="divInfo">
                    <div>
                        <p>{companyName}</p>
                        <p>{positionTitle}</p>
                    </div>
                    <p>{jobDateStart} to {jobDateEnd}</p>
                </div>
                <p id="responsiblitiesInfo">{responsibilities}</p>
            </>
        )
    }
}

export default Experience;