import {StyleSheet} from 'react-native';
import {AppColors, AppFontsFamily, AppFontSize, WP} from '@src/shared/exporter';

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    paddingTop: WP('5'),
    alignItems: 'center',
    paddingHorizontal: WP('3'),
  },
  homeScreenText: {
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_18,
    fontFamily: AppFontsFamily.Inter_Bold,
  },
});
export default styles;
