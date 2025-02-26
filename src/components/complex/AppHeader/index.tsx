import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {
  WP,
  appSVG,
  AppColors,
  AppFontSize,
  AppFontsFamily,
} from '@shared/exporter';

interface AppHeaderProps {
  title?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  shadowStyle?: boolean;
  onPressBack?: () => {};
  onPressView?: () => void;
}
const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  onPressBack,
  leftIcon = true,
  rightIcon = false,
  shadowStyle = true,
  onPressView = () => {},
}) => {
  const navigation: any = useNavigation();

  return (
    <>
      <View style={[styles.container]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.leftIconContainer}
          onPress={() => (onPressBack ? onPressBack() : navigation.goBack())}>
          {leftIcon ? appSVG.BackIcon : <View style={styles.emptyView} />}
        </TouchableOpacity>
        <Text style={styles.textStyle}>{title}</Text>
        {rightIcon ? (
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.rightIconContainer}
            onPress={onPressView}>
            {appSVG.NotificationIcon}
          </TouchableOpacity>
        ) : (
          <View style={styles.emptyView} />
        )}
      </View>
      <View style={shadowStyle ? styles.shadowStyle : styles.noShadowStyle} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height: WP('14'),
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: WP('3'),
    justifyContent: 'space-between',
  },
  textStyle: {
    flex: 1,
    textAlign: 'center',
    fontSize: AppFontSize.FONT_SIZE_16,
    color: AppColors.Neutrals.MediumBlack,
    fontFamily: AppFontsFamily.PlusJakartaSans_SemiBold,
  },
  leftIconContainer: {
    width: WP('20'),
  },
  rightIconContainer: {
    width: WP('20'),
    paddingRight: WP('3'),
    alignItems: 'flex-end',
  },
  emptyView: {
    width: '20%',
  },
  shadowStyle: {
    shadowOffset: {
      width: 0,
      height: 1,
    },
    height: 0.5,
    elevation: 2,
    shadowRadius: 1.51,
    shadowOpacity: 0.16,
    marginBottom: WP('1'),
    shadowColor: AppColors.Neutrals.Gray1,
    backgroundColor: AppColors.Neutrals.White,
  },
  noShadowStyle: {
    height: 0.5,
    marginTop: WP('3'),
    marginBottom: WP('1'),
    backgroundColor: AppColors.Neutrals.White,
  },
});

export {AppHeader};
