
function Experience({companyName,positionTitle,responsibilities,jobDateStart,jobDateEnd,changeCompanyName,changePositionTitle,changeResponsibilties,changeJobDateStart,changeJobDateEnd,edit}){
    if(edit){
        return(
            <div className="label">
                <label htmlFor="companyName">Company Name: </label>
                <input id="companyName" value={companyName} onChange={changeCompanyName}/><br/>
    
                <label htmlFor="positionTitle">Position Title: </label>
                <input id="positionTitle" value={positionTitle} onChange={changePositionTitle}/><br/>
    
                <label htmlFor="responsiblities">Job Responsibilities: </label>
                <input id="responsiblities" size="100" value={responsibilities} onChange={changeResponsibilties}/><br/>

                <label htmlFor="jobDateStart">Job Date: </label>
                <input id="jobDateStart" type="date" value={jobDateStart} onChange={changeJobDateStart}/>
                <label htmlFor="jobDateEnd"> To </label>
                <input id="jobDateEnd" type="date" value={jobDateEnd} onChange={changeJobDateEnd}/>
            </div>
        )
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