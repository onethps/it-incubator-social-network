import React, { ComponentType } from 'react';

import { connect } from 'react-redux';
import { compose } from 'redux';

import './App.scss';
import HeaderContainer from './components/Header/HeaderContainer';

import PreLoader from 'components/common/PreLoader';
import News from 'components/RightSideBlock/News/News';
import SideBlockContainer from 'components/LeftSideBlock/SideBlockContainer';
import { initializeAppAC } from 'redux/reducers/AppReducer';
import { AppStateType } from 'redux/store';
import AppRouters from 'routes/AppRouters';
import RightSideBlock from "components/RightSideBlock/RightSideBlock";

type AppType = {
  inicialize: boolean;
  inicializetApp: () => void;
};

class App extends React.Component<AppType> {
  componentDidMount() {
    this.props.inicializetApp();
  }

  render() {
    if (!this.props.inicialize) {
      return <PreLoader />;
    }

    return (
      <div className="app__wrapper">
        {/* <HeaderContainer /> */}
        <SideBlockContainer />
        <AppRouters />
        <RightSideBlock />
      </div>
    );
  }
}

const mapStateToProps = (state: AppStateType) => ({
  inicialize: state.appReducer.initializec,
});

export default compose<ComponentType>(
  connect(mapStateToProps, { inicializetApp: initializeAppAC }),
)(App);
