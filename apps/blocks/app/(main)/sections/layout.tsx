import dynamic from "next/dynamic";

interface ProfileLayoutProps {
    children: React.ReactNode;
}

const Navbar = dynamic(() => import("@/components/shared/navbar"), {
    ssr: true,
    loading: () => <div className="h-20 bg-white dark:bg-black" />,
});

const Footer = dynamic(() => import("@/components/shared/footer"), {
    ssr: true,
    loading: () => <div className="h-20 bg-white dark:bg-black" />,
});

export default function ProfilePage({ children }: ProfileLayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}
