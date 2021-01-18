import React , {useState} from 'react'

export default function Signup() {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmpass, setConfirmpass] = useState('');
    const [error, setError] = useState('');
    const [isSubmitted, setIssubmitted] = useState(false);

    const handleEmail =(e)=>{
        setEmail(e.target.value)
    }
    const handlePass = (e)=>{
        setPass(e.target.value)
    }
    const handleConfirmpass = (e)=>{
        setConfirmpass(e.target.value)
    }
    const handleSubmit =(e)=>{
        e.preventDefault()
        if(!email || !pass || !confirmpass ){
            setError('Please, fill all your inputs')
        }else if (pass !== confirmpass){
            setError('Please, Enter matched password')
        }else{
            setEmail(email)
            setPass(pass)
            setError(null)
            setIssubmitted(true)
        }
    }

    return (
        <div>
            <h2> -- Exercise 4</h2>
            <form onSubmit={handleSubmit}>
                <input type="email" onChange={handleEmail} placeholder="Enter your email"/>
                <input type="password" onChange={handlePass} placeholder="Enter your password"/>
                <input type="password" onChange={handleConfirmpass} placeholder="Confirm your password"/>
                <input type="submit" />
            </form> 
            <p>{error}</p>
            {isSubmitted && <div>
                <p>{email}: {pass}</p><button onClick={()=>setIssubmitted(false)}>delete</button>
            </div>}
 
        </div>
    )
}
