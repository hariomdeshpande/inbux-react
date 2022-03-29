import MyNavbar from "./navbar";
import OffCanvasExample from "./sidebar";

export default function Layout(){
    return(
        <div>
            <MyNavbar></MyNavbar>
            {/* <OffCanvasExample name={'ToggleSidebarLeft'} placement={'end'}></OffCanvasExample> */}
        </div>
    )
}