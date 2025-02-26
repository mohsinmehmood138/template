import React, {useState, ReactNode} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
  TouchableOpacity,
  KeyboardTypeOptions,
  TextInputProps,
} from 'react-native';
import {
  WP,
  isIOS,
  appSVG,
  AppColors,
  AppFontSize,
  AppFontsFamily,
} from '@shared/exporter';

interface AppInputProps extends TextInputProps {
  touched?: any;
  label?: string;
  value?: string;
  icon?: ReactNode;
  editable?: boolean;
  rightText?: string;
  errorMessage?: any;
  maxLength?: number;
  multiline?: boolean;
  leftIcon?: ReactNode;
  placeholder?: string;
  isRequired?: boolean;
  rightIcon?: ReactNode;
  secureTextEntry?: boolean;
  onEndEditing?: () => void;
  rightIconPress?: () => void;
  onSubmitEditing?: () => void;
  container?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  keyboardType?: KeyboardTypeOptions;
  onChangeText: (text: string) => void;
  inputContainerStyle?: StyleProp<ViewStyle>;
  rightIconContainerStyle?: StyleProp<ViewStyle>;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
}

const AppInput: React.FC<AppInputProps> = ({
  label,
  value,
  touched,
  leftIcon,
  rightText,
  maxLength,
  rightIcon,
  inputStyle,
  placeholder,
  onChangeText,
  onEndEditing,
  rightIconPress,
  editable = true,
  onSubmitEditing,
  errorMessage = '',
  multiline = false,
  isRequired = true,
  inputContainerStyle,
  rightIconContainerStyle,
  secureTextEntry = false,
  autoCapitalize = 'none',
  keyboardType = 'default',
  textAlignVertical = 'auto',
}) => {
  const [isFocused, setIsFocused] = useState(touched);
  const [showPass, setShowPass] = useState(secureTextEntry);
  const inputRightIcon =
    rightIcon !== true ? rightIcon : appSVG.NotificationIcon;

  return (
    <View style={styles.container}>
      <View style={styles.labelContainer}>
        <Text style={styles.dropDownLabel}>{label}</Text>
        {isRequired && <Text style={styles.asterisk}>*</Text>}
      </View>
      <View
        style={[
          inputContainerView(touched && errorMessage),
          inputContainerStyle,
        ]}>
        {leftIcon}

        <TextInput
          placeholder={placeholder}
          value={value}
          editable={editable}
          placeholderTextColor={AppColors.Neutrals.Gray1}
          onChangeText={onChangeText}
          style={[AppInputStyle(!!rightIcon, !!rightText), inputStyle]}
          maxLength={maxLength}
          multiline={multiline}
          secureTextEntry={showPass}
          onEndEditing={onEndEditing}
          onSubmitEditing={onSubmitEditing}
          keyboardType={keyboardType}
          autoCapitalize={autoCapitalize}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          textAlignVertical={textAlignVertical}
        />
        {rightIcon && (
          <TouchableOpacity
            activeOpacity={0.7}
            onPress={rightIconPress}
            style={rightIconContainerStyle}>
            {inputRightIcon}
          </TouchableOpacity>
        )}
        {rightText && <Text style={styles.rightText}>{rightText}</Text>}
      </View>
      {touched && errorMessage && (
        <Text style={styles.errorTxtStyle}>{errorMessage}</Text>
      )}
    </View>
  );
};

function inputContainerView(isError: boolean): ViewStyle {
  return {
    position: 'relative',
    width: '100%',
    borderWidth: 1,
    height: WP('12'),
    marginTop: WP('2'),
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: WP('3'),
    marginBottom: WP('2'),
    justifyContent: 'space-between',
    borderColor: AppColors.Neutrals.Gray3,
    paddingHorizontal: isIOS() ? WP('4') : WP('3'),
  };
}

function AppInputStyle(rightIcon: boolean, rightText: boolean) {
  return {
    height: WP('14'),
    color: AppColors.Neutrals.Black,
    width: rightIcon
      ? rightIcon
        ? '90%'
        : '100%'
      : rightText
      ? '70%'
      : '100%',
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontsFamily.PlusJakartaSans_Medium,
  } as TextStyle;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
  labelStyle: {
    position: 'absolute',
    marginHorizontal: WP('4'),
    fontFamily: AppFontsFamily.PlusJakartaSans_Regular,
  },
  rightText: {
    position: 'absolute',
    right: WP('4'),
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_16,
    fontFamily: AppFontsFamily.PlusJakartaSans_Regular,
  },
  errorTxtStyle: {
    marginVertical: WP('1'),
    alignSelf: 'flex-start',
    color: AppColors.Neutrals.Red,
  },
  labelContainer: {
    marginTop: WP('3'),
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownLabel: {
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontsFamily.Inter_Medium,
  },
  asterisk: {
    marginLeft: WP('1'),
    color: AppColors.Neutrals.Red,
    fontSize: AppFontSize.FONT_SIZE_16,
  },
});

export {AppInput};
