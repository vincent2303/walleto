import React from 'react';
import HeaderContainer from './components/HeaderContainer';
import HeaderTitle from './components/HeaderTitle';

interface Props {
  title: string
}

const PrimaryHeader: React.FC<Props> = ({ title }) => (
  <HeaderContainer>
    <HeaderTitle title={title} />
  </HeaderContainer>
);

export default PrimaryHeader;
