import styled from 'styled-components';

export default styled.button`
  display: block;
  margin: 0;
  padding: 0;
  border: none;
  background: transparent;
  cursor: pointer;
  text-align: left;
  font: inherit;
  color: ${p => p.theme.textColor};

  &:focus {
    outline: 2px auto ${p => p.theme.primaryColor}
    outline-offset: 2px;
  }

  &:focus:not(.focus-visible) {
    outline: none;
  }
`;
