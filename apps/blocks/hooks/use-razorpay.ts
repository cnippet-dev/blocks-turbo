// lib/hooks/use-razorpay.ts
import { useEffect, useState } from "react";

declare global {
    interface Window {
        Razorpay: any;
    }
}

// Loads the Razorpay SDK script dynamically
const useRazorpay = () => {
    const [scriptLoaded, setScriptLoaded] = useState(false);
    const [scriptError, setScriptError] = useState(false);

    useEffect(() => {
        const scriptId = "razorpay-sdk";
        if (document.getElementById(scriptId)) {
            setScriptLoaded(true);
            return;
        }

        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://checkout.razorpay.com/v1/checkout.js";
        script.async = true;
        script.onload = () => setScriptLoaded(true);
        script.onerror = () => setScriptError(true);

        document.body.appendChild(script);

        return () => {
            // Clean up script if component unmounts before loading
            if (document.body.contains(script)) {
                document.body.removeChild(script);
            }
        };
    }, []);

    return { scriptLoaded, scriptError };
};

export default useRazorpay;
