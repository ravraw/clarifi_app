import React from "react";
import styled from "styled-components";
import * as components from "../componentList";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  align-items: center;
`;

export default props => {
  return (
    <Layout>
      <components.Header />
      <components.Main>
        {/* <components.Home /> */}
        <components.ImageModule />
      </components.Main>
      <components.Footer />
    </Layout>
  );
};
