import React from 'react';
import styled from 'styled-components';

const StyledTitle = styled.h1`
  color: ${({ color, theme }) => color || theme.colors.primary};
`;

const Title = (props) => {
  return <StyledTitle {...props} />;
};

export default Title;
