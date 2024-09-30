import React, { useState } from 'react';
import '../styles/Robot.scss';
import robot from '../images/robot.webp';

const Robot = () => {
    const [showMessage, setShowMessage] = useState(false);

    const handleClick = () => {
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    };

    return (
        <div className="robot" onClick={handleClick}>
            <div className="bubble">
                <img src={robot} alt="Robot" />
            </div>
            {showMessage && <div className="message">Bienvenue</div>}
        </div>
    );
};

export default Robot;
