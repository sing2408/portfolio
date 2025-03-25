import { useEffect, useState } from "react";
import "./LoadingScreen.css";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "Hello World!";
    const [blurOut, setBlurOut] = useState(false);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;

            if (index > fullText.length) {
                clearInterval(interval);

                setTimeout(() => {
                    setBlurOut(true);  
                    setTimeout(() => {
                        onComplete();  
                    }, 500);
                }, 500);
            }
        }, 100);

        return () => clearInterval(interval);
    }, [onComplete]);

    return (
        <div className={`loading-screen ${blurOut ? "blur-out" : ""}`}>
            <div className="font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                {text}
            </div>
        </div>
    );
};
