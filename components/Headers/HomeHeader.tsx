import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import HeaderTitle from './components/HeaderTitle';

interface Props {
  title: string
}

const HomeHeader = ({ title }: Props) => (
  <HeaderContainer>
    <HeaderTitle title={title} />
  </HeaderContainer>
);

export default HomeHeader;
