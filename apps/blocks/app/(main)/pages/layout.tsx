import dynamic from "next/dynamic";

interface PagesLayoutProps {
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

export default function PagesLayout({ children }: PagesLayoutProps) {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
}

