"use client";
import dynamic from "next/dynamic";

const SignUpForm = dynamic(() => import("./sign-up"), {
    ssr: false,
});

const Main = () => {
    return <SignUpForm />;
};

export default Main;
