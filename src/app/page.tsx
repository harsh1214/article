import Footer from "@/components/shared/Footer";
import Main from "@/components/shared/Main";

export default function Home() {
    return (
        <main className="w-full h-full flex flex-col items-center justify-start main-container">
            <Main />
            <Footer />
        </main>
    );
}
