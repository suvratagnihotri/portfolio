import BriefIntroduction from "../components/BriefIntroduction";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

export function Home() {
    return(
        <div>
            <BriefIntroduction/>
            <Experience/>
            <Footer/>
        </div>
    );
}