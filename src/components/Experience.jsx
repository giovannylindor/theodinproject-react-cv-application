import { use, useState } from "react";

function RenderInfo({infoData, setSubmitted}){
    const handleEdit = () => {
        setSubmitted(false); 
    }

    return(
        <>
            <div>
                <h1>{infoData.jobName}</h1>
                <p>{infoData.positionTitle}</p>
                <p>{infoData.dateEnded}</p>
                <p>{infoData.dateEnded}</p>
            </div>

            <button onClick={handleEdit}>Edit</button>
        </>
    );
}


export default function Experience(){
    const[submitted, setSubmitted] = useState(false);
    const[jobName, setJobName] = useState('');
    const[positionTitle, setPositionTitle] = useState('');
    const[dateStarted, setDateStarted] = useState('');
    const[dateEnded, setDateEnded] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    }


    const infoData = {
        jobName: jobName,
        positionTitle: positionTitle,
        dateStarted: dateStarted,
        dateEnded: dateEnded
    };

    if(submitted){
        return(
            <>
                <RenderInfo infoData={infoData} setSubmitted={setSubmitted} /> 
            </>
        );
    }


    return(
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="">Company Name:</label>
                    <input type="text" placeholder="Meta" value={jobName} onChange={(e) => setJobName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Position Title:</label>
                    <input type="text" placeholder="Senior Software Engineer" onChange={(e) => setPositionTitle(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Date Started:</label>
                    <input type="date" onChange={(e) => setDateStarted(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="">Date Ended:</label>
                    <input type="date" onChange={(e) => setDateEnded(e.target.value)} />
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </>
    );
}