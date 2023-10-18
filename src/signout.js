import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth"; // Assuming you have a signOut function from Firebase

import { auth } from "./firebase";
import styles from "./Login.css";

function Signout() {
    const navigate = useNavigate();
    const [errorMsg, setErrorMsg] = useState("");
    const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

    const handleSignout = () => {
        setSubmitButtonDisabled(true);
        
        signOut(auth)
            .then(() => {
                setSubmitButtonDisabled(false);
                alert("Signout successfully completed!");
                navigate("/"); // Navigate to the home page
            })
            .catch((err) => {
                setSubmitButtonDisabled(false);
                setErrorMsg(err.message);
            });
    };

    return (
        <div className="container">
            <div className="innerBox">
                <h1 className={styles.heading}>Sign Out</h1>

                <div className="footer">
                    <b className={styles.error}>{errorMsg}</b>
                    <button disabled={submitButtonDisabled} onClick={handleSignout}>
                        Sign Out
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signout;
