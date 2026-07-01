import { use, useState } from "react";


function RenderInfo({ infoData, setSubmitted }){
    const handleEdit = () => {
        setSubmitted(false); 
    }

    return(
        <>
            <div>
                <h1>{infoData.name}</h1>
                <p>{infoData.email}</p>
                <p>{infoData.tel}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </>
    );
}

export default function GeneralInfo(){
    const[submitted, setSubmitted] = useState(false); 
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[tel, setTel] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);        
    }

    let fullName = firstName + ' ' + lastName;
    const infoData = {
        name: fullName,
        email: email,
        tel: tel
    }; 

    if(submitted){
        return(
            <>
            <RenderInfo infoData={infoData} setSubmitted={setSubmitted}/>
            </>
        );
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">First Name:</label>
                    <input type="text" required placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Last Name:</label>
                    <input type="text" required placeholder="Doe" value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Email:</label>
                    <input type="mail" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Telephone Number:</label>
                    <input type="tel" placeholder="123-456-7890" required value={tel} maxLength={10} onChange={(e) => setTel(e.target.value)}/>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    );
}