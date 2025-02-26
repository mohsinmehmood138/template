import {StyleSheet} from 'react-native';
import {AppColors, AppFontSize, AppFontsFamily} from '@shared/exporter';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: AppColors.Primary.LightBlue,
  },
  splashTextStyle: {
    color: AppColors.Neutrals.White,
    fontSize: AppFontSize.FONT_SIZE_48,
    fontFamily: AppFontsFamily.PlusJakartaSans_ExtraBold,
  },
});

export default styles;
