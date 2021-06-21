import { useState } from 'react';
import RegisterForm from "../components/RegisterForm";

const Register = () => {
    const [companyName, setCompanyName] = useState('');
    const [companyEmail, setCompanyEmail] = useState('');
    const [password, setPassowrd] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        console.table({companyName, companyEmail, password})
    }

    

    return(
        <>
           <div className="container-fluid bg-secondary h1 p-5 text-center">
              <h1>Register</h1>
           </div>
           <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm
                            handleSubmit={handleSubmit}
                            companyName={companyName}
                            setCompanyName={setCompanyName}
                            companyEmail={companyEmail}
                            setCompanyEmail={setCompanyEmail}
                            password={password}
                            setPassowrd={setPassowrd}
                        />
                    </div>
                </div>
           </div>
        </>
    )
}

export default Register;