import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import HeaderTitle from './components/HeaderTitle';

interface Props {
  title: string
}

const PrimaryHeader = ({ title }: Props) => (
  <HeaderContainer>
    <HeaderTitle title={title} />
  </HeaderContainer>
);

export default PrimaryHeader;
