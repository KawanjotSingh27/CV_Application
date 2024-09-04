
function Education({schoolName,studyTitle,studyDate,changeSchoolName,changeStudyTitle,changeStudyDate,edit}){
    if(edit){
        return(
            <div className="label">
                <label htmlFor="schoolName">School Name: </label>
                <input id="schoolName" value={schoolName} onChange={changeSchoolName}/><br/>
    
                <label htmlFor="title">Title of Study: </label>
                <input id="title" value={studyTitle} onChange={changeStudyTitle}/><br/>
    
                <label htmlFor="date">Date of Study: </label>
                <input id="date" type="date" value={studyDate} onChange={changeStudyDate}/>
            </div>
        )
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