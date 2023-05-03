import EditProfile from "../components/EditProfile";
import Footer from "../components/Footer";


export function Profile(props) {
    return (
        <div>
            <EditProfile userName={props.userName} setUserName={props.setUserName}/>
            {/* <Footer/> */}
        </div>
    );
}