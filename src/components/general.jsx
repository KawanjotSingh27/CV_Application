import editsvg from "../assets/edit.svg";
import savesvg from "../assets/save.svg";


function General({name,email,number,changeName,changeEmail,changeNumber,edit,toggleEdit,editPersonal}){
    if(edit){
        if(editPersonal){
            return(
                <div id="personal">
                    <p className="Title">Personal Details</p>
                    <div className="label">
                        <input id="name" className="personalInput" placeholder="Name" value={name} onChange={changeName}/><br/>
            
                        <input id="email" className="personalInput" type="email" placeholder="Email" value={email} onChange={changeEmail}/><br/>
            
                        <input id="number" className="personalInput" placeholder="Phone Number" value={number} onChange={changeNumber}/>
                    </div>
                    <p id="personalError" className="error"></p>
                    <img src={savesvg} className="savesvg" id="savePersonal" onClick={toggleEdit} alt="Save"/>
                </div>
            )
        }
        else{
            return(
                <div id="personal">
                    <p className="Title">Personal Details</p>
                    <div className="label">
                        <input id="name" className="personalInput" placeholder="Name" value={name} onChange={changeName} disabled/><br/>
            
                        <input id="email" className="personalInput" type="email" placeholder="Email" value={email} onChange={changeEmail} disabled/><br/>
            
                        <input id="number" className="personalInput" placeholder="Phone Number" value={number} onChange={changeNumber} disabled/>
                    </div>
                    <img src={editsvg} className="editsvg" id="editPersonal" onClick={toggleEdit} alt="Edit"/>
                </div>
            )
        }
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