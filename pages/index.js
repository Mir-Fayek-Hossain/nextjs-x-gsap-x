import ScrollSection from "@/components/ScrollSection";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <h2>Mir Fayek Hossain</h2>
            </div>
            <ScrollSection />
            <div className="w-full h-screen flex justify-center items-center">
                <h2>The End</h2>
            </div>
        </>
    );
}
