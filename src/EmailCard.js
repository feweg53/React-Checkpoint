import EmailView from './emailList.js'
import './App.css';

// the eMail variable is from emailList.js
const EmailCard =({eMail,setActiveEmail}) =>{
    let {sender,recipient,subject,message,date,id} = eMail;

    return(
        <div className = 'email-card' onClick={(changePage) => setActiveEmail(eMail)}>
        {/* {eMail.sender} */}
        <p>From: {sender}</p> 
        <p>Subject: {subject}</p>
        </div>
    )
}

export default EmailCard;