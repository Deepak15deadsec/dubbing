import { useLocation } from "react-router-dom";
import SideBar from "./sideBar";

function MainDashBoard() {
    const { state } = useLocation();
    // const { id  } = state;

    return (
        <div className="flex min-h-screen w-full " style={{ 'backgroundColor': '#F6F8FA' }}>
            <SideBar />
            {/* <div className="w-full flex items-center" style={{ 'backgroundColor': '#F6F8FA' }}>
                <FirstCampaign id={""} />
            </div> */}
        </div>
    );
}

export default MainDashBoard;