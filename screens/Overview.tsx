import React from 'react';
import AppScreenContainer from '../components/AppScreenContainer';
import PrimaryHeader from '../components/Headers/PrimaryHeader';

const Overview: React.FC<{}> = () => (
  <AppScreenContainer>
    <PrimaryHeader title="overview" />
  </AppScreenContainer>
);

export default Overview;
