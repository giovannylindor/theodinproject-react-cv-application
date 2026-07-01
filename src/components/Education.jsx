import { use, useState } from "react";


function RenderInfo({ infoData, setSubmitted }){
    const handleEdit = () => {
        setSubmitted(false); 
    }

    return(
        <>
            <div>
                <h1>Education</h1>
                <h1>{infoData.schoolName}</h1>
                <p>{infoData.major}</p>
                <p>{infoData.date}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </>
    );
}

export default function Education(){
    const[submitted, setSubmitted] = useState(false); 
    const[schoolName, setSchoolName] = useState('');
    const[major, setMajor] = useState('');
    const[date, setDate] = useState('');
    

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);        
    }

    const infoData = {
        schoolName: schoolName,
        major: major,
        date: date
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
                    <label htmlFor="">School Name:</label>
                    <input type="text" required placeholder="St.John's University" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Major of Study:</label>
                    <input type="text" required placeholder="Computer Science" value={major} onChange={(e) => setMajor(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Date of Study:</label>
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}/>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    );
}