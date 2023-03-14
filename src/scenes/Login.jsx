import { useState } from "react";
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { initializeApp } from "firebase/app"
import { Form, Button, InputGroup } from "react-bootstrap";

const firebaseConfig = {
    apiKey: "AIzaSyCH-dI9GCF57sIBn9ygmkrbqPdZQdwJIX0",
    authDomain: "lineupwiz.firebaseapp.com",
    projectId: "lineupwiz",
    storageBucket: "lineupwiz.appspot.com",
    messagingSenderId: "426008830881",
    appId: "1:426008830881:web:5df48b03a673fbbbd361e0"
};

export default function Login({ setUser, setIsUser }) {

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const loginWithGoogle = async () => {
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app)
        const provider = new GoogleAuthProvider()
        const _user = await signInWithPopup(auth, provider)
            .catch()
        setUser(_user.user)
    }

    const handleSubmit = async (e) => {
        console.log(email, password)
        e.preventDefault();
        const app = initializeApp(firebaseConfig);
        const auth = getAuth(app)
        const _user = await signInWithEmailAndPassword(auth, email, password)
            .catch(alert)
        setUser(_user.user)
    }

    return (
        <section style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "90vh", width:"200px" }} >
            <div > 
            <h1 className="text-white">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <InputGroup>
                        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    </InputGroup>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                        <Form.Control type="password" placeholder="Password" name="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </InputGroup>
                </Form.Group>
                <Button className="login text-center" variant="primary" type="submit" >Login</Button>
            </Form>

            <Button className="google" onClick={loginWithGoogle}>Login with Google</Button>
            <p className="text-center text-white">NOT A USER? <Button className="signup" onClick={() => setIsUser(false)}>Sign Up</Button></p>
            </div>
        </section>
    )
}