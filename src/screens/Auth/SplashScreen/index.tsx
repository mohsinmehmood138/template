import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
// import {useSelector} from 'react-redux';
import styles from './styles';
import {Routes} from '@src/shared/exporter';
import {AppStatusBar} from '@src/shared/components';

interface SplashProps {
  navigation: any;
}

const SplashScreen = ({navigation}: SplashProps) => {
  //   const {accessToken, isWalkthrough} = useSelector(
  //     (state: object | any) => state?.auth,
  //   );

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace(Routes.Home);
      //   if (accessToken) {
      //   } else if (isWalkthrough) {
      //     navigation.replace(Routes.AuthStack);
      //   } else {
      //     navigation.replace(Routes.IntroStack);
      //   }
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  //   [accessToken, isWalkthrough, navigation]);

  return (
    <View style={styles.container}>
      <AppStatusBar
        translucent
        barStyle="light-content"
        backgroundColor="transparent"
      />
      <Text style={styles.splashTextStyle}>App Name</Text>
    </View>
  );
};

export default SplashScreen;
