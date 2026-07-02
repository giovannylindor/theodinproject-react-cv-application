import { useState } from "react";


function RenderedForm({infoData, setIsSubmitted}){
    const editForm = () => {
        setIsSubmitted(false); 
    };

    return(
        <>
            <h1>{infoData.name}</h1>
            <p>{infoData.email}</p>
            <p>{infoData.phoneNumber}</p>
            <hr />

            <p>{infoData.schoolName}</p>
            <p>Major: {infoData.major}</p>
            <p>Date Started: {infoData.dateOfStudy}</p>
            <hr />

            <h2>Work Experience</h2>
            <h3>{infoData.companyName}</h3>
            <p>{infoData.positionTitle}</p>
            <p>{infoData.dateStarted} - {infoData.dateEnded}</p>
            <p>{infoData.jobDescription}</p>
            <br />
            <br />

            <button onClick={editForm}>Edit Form</button>
        </>
    );
}



export default function Form(){

    //useState for Form Inputs
    const[firstName, setFirstName] = useState('');
    const[lastName, setLastName] = useState('');
    const[email, setEmail] = useState('');
    const[phoneNumber, setPhoneNumber] = useState('');
    const[schoolName, setSchoolName] = useState('');
    const[major, setMajor] = useState('');
    const[dateOfStudy, setDateOfStudy] = useState('');
    const[companyName, setCompanyName] = useState('');
    const[positionTitle, setPositionTitle] = useState('');
    const[jobDescription, setJobDescription] = useState('');
    const[dateStarted, setDateStarted] = useState('');
    const[dateEnded, setDateEnded] = useState('');


    //useState for form submission
    const[isSubmitted, setIsSubmitted] = useState(false); 

    const handleFormSubmit = (e) =>{
        e.preventDefault();
        setIsSubmitted(true); 
    };


    const infoData = {
        name: firstName + ' ' + lastName,
        email: email,
        phoneNumber: phoneNumber,
        schoolName: schoolName,
        major: major,
        dateOfStudy: dateOfStudy,
        companyName: companyName,
        positionTitle: positionTitle,
        jobDescription: jobDescription,
        dateStarted: dateStarted,
        dateEnded: dateEnded
    };


    if(isSubmitted){
        return(
            <RenderedForm infoData={infoData} setIsSubmitted={setIsSubmitted}/> 
        );
    }

    return(
        <>
            <form onSubmit={handleFormSubmit}>
                {/* Worry about grouping later */}
                <div>
                    <label htmlFor="">First Name </label>
                    <input type="text" required placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Last Name </label>
                    <input type="text" required placeholder="Doe"value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Email </label>
                    <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Phone Number </label>
                    <input type="tel" required maxLength={10} placeholder="123-456-7890" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">School Name </label>
                    <input type="text" required placeholder="Brooklyn College" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Major of Study </label>
                    <input type="text" required placeholder="Computer Science" value={major} onChange={(e) => setMajor(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Date of Study </label>
                    <input type="date" required value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Company Name </label>
                    <input type="text" required placeholder="Amazon" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Position Title </label>
                    <input type="text" required placeholder="Junior Software Engineer" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Job Description </label>
                    <input type="text" required placeholder="Improve API Structure" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}/>
                </div>

                <div>
                    <label htmlFor="">Date Started </label>
                    <input type="date" required value={dateStarted} onChange={(e) => setDateStarted(e.target.value)}/>
                </div>


                <div>
                    <label htmlFor="">Date Ended </label>
                    <input type="date" required value={dateEnded} onChange={(e) => setDateEnded(e.target.value)}/>
                </div>

                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}