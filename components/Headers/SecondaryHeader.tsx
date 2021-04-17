import React from 'react';
import BackNavigationButton from './components/BackNavigationButton';
import HeaderContainer from './components/HeaderContainer';
import HeaderTitle from './components/HeaderTitle';

interface Props {
  title: string
}

const SecondaryHeader = ({ title }: Props) => (
  <HeaderContainer>
    <BackNavigationButton title="Home" />
    <HeaderTitle title={title} />
  </HeaderContainer>
);

export default SecondaryHeader;
