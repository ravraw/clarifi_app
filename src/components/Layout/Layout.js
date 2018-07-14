import React from "react";
import styled from "styled-components";
import * as components from "../componentList";
import { Route, Switch } from "react-router-dom";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

const lay = props => {
  return (
    <Layout>
      <components.Header />
      <components.Main>
        <Switch>
          <Route path="/imageModule" component={components.ImageModule} />
          <Route path="/login" component={components.Login} />
          <Route path="/" component={components.Home} exact />
          <Route component={components.InvalidPath} />
        </Switch>
      </components.Main>
      <components.Footer />
    </Layout>
  );
};
export default lay;
