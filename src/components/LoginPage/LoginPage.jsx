import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { db } from '../../config/FirebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const handleSubmit = async (event) => {
        event.preventDefault();
        const auth = getAuth();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            navigate('/ProductsGestion');
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="p-3 d-flex flex-column align-items-center">
            <div className="mb-3">
                <label className="form-label">
                    Email:
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control form-control-lg" />
                </label>
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Password:
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control form-control-lg" />
                </label>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesión</button>
        </form>
    );
}

export default LoginPage;