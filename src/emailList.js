import React from 'react'
import './App.js'
import EmailCard from './EmailCard.js'

// the list variable is from app.js
const EmailView = ({list, setActiveEmail}) =>{

    return(
        <div className='email-view'>
            {/* {list.map(eMail => (<div>{eMail.sender}</div>))} */}
            {list.map(eMail => <EmailCard eMail = {eMail} setActiveEmail={setActiveEmail}/>)}
        </div>
    )
}

export default EmailView