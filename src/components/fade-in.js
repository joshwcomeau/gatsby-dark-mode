import React from 'react';
import styled, { keyframes } from 'styled-components';

const fade = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const FadeIn = ({ children, duration = 400, delay = 0 }) => {
  return (
    <Wrapper duration={duration} delay={delay}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.span`
  animation: ${fade} ${p => p.duration}ms ${p => p.delay}ms both;
`;

export default FadeIn;
