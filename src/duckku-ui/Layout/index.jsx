import PropTypes from "prop-types";
import styled from "styled-components";
import Flex from "../Flex";

const Width = styled.div`
  height: 100% !important;
  min-height: 550px;
  max-height: 926px;
  max-width: 428px;
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 100%;
  background-color: white;
`;

const StyledFlex = styled(Flex)`
  height: 100% !important;
`;

const BackColor = styled.div`
  width: 100%;
  height: 100%;
  background-color: #d3d3d3;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const Layout = ({ children }) => (
  <BackColor>
    <Width>
      <StyledFlex align="center" direction="column">
        {children}
      </StyledFlex>
    </Width>
  </BackColor>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
