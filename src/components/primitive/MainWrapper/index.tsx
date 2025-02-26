import React from 'react';
import {SafeAreaView, StyleSheet, ViewStyle} from 'react-native';
import {AppStatusBar, AppColors} from '@shared/exporter';

interface MainWrapperProps {
  children: React.ReactNode;
  style?: ViewStyle;
}
const MainWrapper: React.FC<MainWrapperProps> = ({children, style}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      <AppStatusBar
        barStyle="dark-content"
        backgroundColor={AppColors.Neutrals.White}
      />
      {children}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: AppColors.Neutrals.White,
  },
});
export {MainWrapper};
