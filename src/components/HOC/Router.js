import React from 'react';
import Content from '../Content/Content';
import Login from '../Login';

const withAuthentication = (Login) =>
  (Content) => ({completeLogin, ...props}) => {
    return (props.loggingIn && props.username === '')
      ? <Login completeLogin={completeLogin} />
      : <Content {...props} />
  }

const Router = withAuthentication(Login)(Content);

export default Router;
