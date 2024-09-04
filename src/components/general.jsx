
function General({name,email,number,changeName,changeEmail,changeNumber,edit}){
    if(edit){
        return(
            <div className="label">
                <label htmlFor="name">Name: </label>
                <input id="name" value={name} onChange={changeName}/><br/>
    
                <label htmlFor="email">Email: </label>
                <input id="email" type="email" value={email} onChange={changeEmail}/><br/>
    
                <label htmlFor="number">Phone Number: </label>
                <input id="number" value={number} onChange={changeNumber}/>
            </div>
        )
    }
    else{
        return(
            <>
            <div id="divName">
                <p>{name}</p>
            </div><hr/>
            <div id="divContact">
                <p>{email}</p>
                <p>{number}</p>
            </div>
            </>
        )
    }
}

export default General;