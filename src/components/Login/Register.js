import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Register = () => {
    const { createUser, profileUpdate } = useContext(AuthContext);

    const handleSubmit = (event) => {
        event.preventDefault();

        const form = event.target;
        const fname = form.name1.value;
        const lname = form.name2.value;
        const fullName = fname + " " + lname;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                userInfoUpdate({
                    displayName: fullName
                })
                console.log(user);
            })
            .catch(e => console.error(e))
    }
    const userInfoUpdate = (profile) => {
        profileUpdate(profile)
            .then(() => { })
            .catch(e => console.error(e))
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold">Create an Account</h1>

                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <input type="text" name='name1' placeholder="First Name" className="input input-bordered border-0 border-b-2" />
                        </div>
                        <div className="form-control">
                            <input type="text" name='name2' placeholder="Last Name" className="input input-bordered border-0 border-b-2" />
                        </div>
                        <div className="form-control">
                            <input type="email" name='email' placeholder="Username or Email" className="input input-bordered border-0 border-b-2" required />
                        </div>
                        <div className="form-control">
                            <input type="password" name='password' placeholder="password" className="input input-bordered border-0 border-b-2" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Create an account</button>
                        </div>
                        <div>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;