import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {AppHeader} from '@src/shared/components';
import {AppInput} from '@src/components/primitive/AppInput';
import {AppButton} from '@src/components/primitive/AppButton';
import {MainWrapper} from '@src/components/primitive/MainWrapper';

const Home = () => {
  return (
    <MainWrapper>
      <AppHeader title="Home Screen Header" rightIcon={true} leftIcon={false} />
      <View style={styles.homeContainer}>
        <Text style={styles.homeScreenText}>Home Screen</Text>
        <AppInput isRequired={false} label="Name" onChangeText={() => {}} />
        <AppButton title="Submit" handleClick={() => {}} />
      </View>
    </MainWrapper>
  );
};
export default Home;
