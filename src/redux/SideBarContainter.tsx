import {connect} from "react-redux";
import Sidebar from "../components/Sidebar/sidebar";
import {AppStateType} from "./redux-store";
import {initialSidebarStateType} from "./sidebar-reducer";

type mapStatePropsType = {
    sidebar:initialSidebarStateType
}

let mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        sidebar: state.sidebar
    }
}

export type SideBarType = mapStatePropsType

const SideBarContainter = connect(mapStateToProps)(Sidebar)

export default SideBarContainter;