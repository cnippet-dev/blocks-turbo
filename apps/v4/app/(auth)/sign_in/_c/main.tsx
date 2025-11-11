"use client";
import dynamic from "next/dynamic";

const SignInForm = dynamic(() => import("./sign-in"), {
    ssr: false,
});

const Main = () => {
    return <SignInForm />;
};

export default Main;
