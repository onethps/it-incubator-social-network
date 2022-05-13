import {connect} from "react-redux";
import Sidebar from "./sidebar";
import {AppStateType} from "../../store/ReduxStore";
import {initialSidebarStateType} from "../../store/reducers/SiderbarReducer";

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