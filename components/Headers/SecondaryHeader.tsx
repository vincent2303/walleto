import React from 'react';
import BackNavigationButton from './components/BackNavigationButton';
import HeaderContainer from './components/HeaderContainer';
import HeaderTitle from './components/HeaderTitle';

interface Props {
  title: string
}

const SecondaryHeader: React.FC<Props> = ({ title }) => (
  <HeaderContainer>
    <BackNavigationButton title="Home" />
    <HeaderTitle title={title} />
  </HeaderContainer>
);

export default SecondaryHeader;
