import { useState } from "react";
import '../styles/Form.css'

function RenderedForm({infoData, setIsSubmitted}){
    const editForm = () => {
        setIsSubmitted(false); 
    };

    return(
        <>
        <div className="resumeContainer">
            <h1>{infoData.name}</h1>
            <div className="emailNumber">
                <p>{infoData.email}</p>
                <p>{infoData.phoneNumber}</p>
            </div>

            <h2>Education</h2>
            <p>{infoData.schoolName}</p>
            <p>Major: {infoData.major}</p>
            <p><strong>Date Started:</strong> {infoData.dateOfStudy}</p>
            

            <h2>Work Experience</h2>
            <h3>{infoData.companyName}</h3>
            <p>{infoData.positionTitle}</p>
            <p><strong>Date Started: </strong>{infoData.dateStarted}</p> 
            <p><strong>Date Ended: </strong>{infoData.dateEnded}</p>
            <p><strong>Description: </strong>{infoData.jobDescription}</p>

            <button onClick={editForm}>Edit Form</button>
        </div>

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


    //operation to give formatted phone number
    const formatNumber = (number) => {
        var cleaned = ('' + number).replace(/\D/g, '');
        var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
        if (match) {
            return '(' + match[1] + ') ' + match[2] + '-' + match[3];
        }
        return null;
    }

    const infoData = {
        name: firstName + ' ' + lastName,
        email: email,
        phoneNumber: formatNumber(phoneNumber),
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
            <form onSubmit={handleFormSubmit} className="formComponent">
                <div className="formContents">
                    <div className="contentSection">
                        <label htmlFor="">First Name </label>
                        <input type="text" required placeholder="John" value={firstName} onChange={(e) => setFirstName(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Last Name </label>
                        <input type="text" required placeholder="Doe"value={lastName} onChange={(e) => setLastName(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Email </label>
                        <input type="email" required placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Phone Number </label>
                        <input type="tel" required maxLength={10} placeholder="123-456-7890" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">School Name </label>
                        <input type="text" required placeholder="Brooklyn College" value={schoolName} onChange={(e) => setSchoolName(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Major of Study </label>
                        <input type="text" required placeholder="Computer Science" value={major} onChange={(e) => setMajor(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Date of Study </label>
                        <input type="date" required value={dateOfStudy} onChange={(e) => setDateOfStudy(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Company Name </label>
                        <input type="text" required placeholder="Amazon" value={companyName} onChange={(e) => setCompanyName(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Position Title </label>
                        <input type="text" required placeholder="Junior Software Engineer" value={positionTitle} onChange={(e) => setPositionTitle(e.target.value)}/>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Job Description </label>
                        <textarea name="" id="" cols="42" rows="5" value={jobDescription} onChange={(e) => setJobDescription(e.target.value)}></textarea>
                    </div>

                    <div className="contentSection">
                        <label htmlFor="">Date Started </label>
                        <input type="date" required value={dateStarted} onChange={(e) => setDateStarted(e.target.value)}/>
                    </div>


                    <div className="contentSection">
                        <label htmlFor="">Date Ended </label>
                        <input type="date" required value={dateEnded} onChange={(e) => setDateEnded(e.target.value)}/>
                    </div>
    

                    <div className="submitButton">
                        <button type="submit">Submit</button>
                    </div>                
                </div>                

            </form>
        </>
    );
}