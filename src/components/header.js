import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';

import DarkLightToggle from './dark-light-toggle';

const Header = ({ siteTitle }) => (
  <OuterWrapper>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
      <DarkLightToggle />
    </Wrapper>
  </OuterWrapper>
);

const OuterWrapper = styled.header`
  background: rgba(128, 128, 128, 0.1);
  margin-bottom: 1.45rem;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`;

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
