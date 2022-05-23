import React from 'react';

import { connect } from 'react-redux';

import { Header } from './Header';

import { initStateAuthType, LogoutTC } from 'redux/reducers/AuthReducer';
import { AppStateType } from 'redux/store';

type HeaderContainterType = {
  LoginData: initStateAuthType;
  LogoutTC: () => void;
};

class HeaderContainer extends React.Component<HeaderContainterType> {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (props: AppStateType) => ({
  LoginData: props.loginData,
});

export default connect(mapStateToProps, { LogoutTC })(HeaderContainer);
