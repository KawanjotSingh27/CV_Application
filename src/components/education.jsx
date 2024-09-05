import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";


function Education({schoolName,studyTitle,studyDate,changeSchoolName,changeStudyTitle,changeStudyDate,edit,toggleEdit,editEducation}){
    if(edit){
        if(editEducation){
            return(
                <div id="education">
                    <p className="Title">Educational Details</p>
                    <div className="label">
                        <input id="schoolName" className="educationInput" placeholder="School Name" value={schoolName} onChange={changeSchoolName}/><br/>
            
                        <input id="title" className="educationInput" placeholder="Title of Study" value={studyTitle} onChange={changeStudyTitle}/><br/>
            
                        <input id="date" className="educationInput" type="date" value={studyDate} onChange={changeStudyDate}/>
                    </div>
                    <p id="educationError" className="error"></p>
                    <img src={savesvg} className="savesvg" id="saveEducation" onClick={toggleEdit} alt="Save"/>
                </div>
            )
        }
        else{
            return(
                <div id="education">
                    <p className="Title">Educational Details</p>
                    <div className="label">
                        <input id="schoolName" className="educationInput" placeholder="School Name" value={schoolName} onChange={changeSchoolName} disabled/><br/>
            
                        <input id="title" className="educationInput" placeholder="Title of Study" value={studyTitle} onChange={changeStudyTitle} disabled/><br/>
            
                        <input id="date" className="educationInput" type="date" value={studyDate} onChange={changeStudyDate} disabled/>
                    </div>
                    <img src={editsvg} className="editsvg" id="editEducation" onClick={toggleEdit} alt="Edit"/>
                </div>
            )
        }
        
    }
    else{
        return(
            <>
                <div id="divTitle">
                    <p>Education</p>
                </div><hr/>
                <div id="divInfo">
                    <div>
                        <p>{schoolName}</p>
                        <p>{studyTitle}</p>
                    </div>
                    <p>{studyDate}</p>
                </div>
            </>
        )
    }
}

export default Education;