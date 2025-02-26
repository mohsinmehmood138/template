import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Dropdown} from 'react-native-element-dropdown';
import {
  appSVG,
  AppColors,
  AppFontsFamily,
  AppFontSize,
  WP,
} from '@src/shared/exporter';

interface DropDownProps {
  data: Array<{label: string; value: string}>;
  value: string;
  touched?: any;
  label: string;
  style?: object;
  dropdownPosition?: 'auto' | 'top' | 'bottom';
  placeholder?: string;
  errorMessage?: any;
  disable?: boolean;
  onChange: (value: string) => void;
}

const AppCustomDropdown: React.FC<DropDownProps> = ({
  label,
  data,
  value,
  style,
  touched,
  onChange,
  errorMessage,
  dropdownPosition,
  disable,
  placeholder = 'Select an option',
}) => {
  const renderItem = (item: any) => {
    const isSelected = item.value === value;

    return (
      <View style={[styles.itemContainer, isSelected && styles.selectedItem]}>
        <Text style={[styles.itemText, isSelected && styles.selectedItemText]}>
          {item.label}
        </Text>
        {isSelected && (
          <View style={styles.iconContainer}>{appSVG.DropDownIcon}</View>
        )}
      </View>
    );
  };

  const handleSelect = (item: any) => {
    onChange(item.value);
  };

  return (
    <View style={[styles.dropDownContainer, style]}>
      <View style={styles.labelContainer}>
        <Text style={styles.dropDownLabel}>{label}</Text>
        <Text style={styles.asterisk}>*</Text>
      </View>
      <Dropdown
        dropdownPosition={dropdownPosition ? dropdownPosition : 'bottom'}
        style={styles.dropDownField}
        containerStyle={styles.dropdownListContainer}
        data={data}
        disable={disable}
        labelField="label"
        valueField="value"
        placeholder={placeholder}
        placeholderStyle={styles.placeholderText}
        value={value}
        onChange={handleSelect}
        renderItem={renderItem}
        selectedTextStyle={styles.selectedTextStyle}
        activeColor={AppColors.Secondary.LightGreen}
        itemContainerStyle={styles.itemContainerStyle}
        itemTextStyle={styles.itemText}
        flatListProps={{
          ListEmptyComponent: (
            <Text style={styles.noData}>No data available</Text>
          ),
        }}
      />
      {touched && errorMessage && (
        <Text style={styles.dropDownError}>{errorMessage}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  dropDownContainer: {
    marginVertical: WP('2'),
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dropDownLabel: {
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontsFamily.Inter_Medium,
  },
  noData: {
    textAlign: 'center',
    marginVertical: WP('4'),
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_14,
    fontFamily: AppFontsFamily.Inter_Medium,
  },
  asterisk: {
    marginLeft: WP('1'),
    color: AppColors.Neutrals.Red,
    fontSize: AppFontSize.FONT_SIZE_16,
  },
  dropDownField: {
    borderWidth: 1,
    height: WP('11'),
    marginTop: WP('3'),
    borderRadius: WP('3'),
    paddingHorizontal: WP('4'),
    fontSize: AppFontSize.FONT_SIZE_18,
    borderColor: AppColors.Neutrals.Gray3,
    backgroundColor: AppColors.Neutrals.White,
  },
  dropdownListContainer: {
    borderWidth: 1,
    borderRadius: WP('3'),
    borderColor: AppColors.Neutrals.Gray3,
    backgroundColor: AppColors.Neutrals.White,
    overflow: 'hidden',
  },
  placeholderText: {
    color: AppColors.Neutrals.Gray3,
    fontSize: AppFontSize.FONT_SIZE_16,
  },
  selectedTextStyle: {
    color: AppColors.Neutrals.Black,
    fontSize: AppFontSize.FONT_SIZE_16,
    textTransform: 'capitalize',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: WP('3'),
    paddingHorizontal: WP('4'),
    justifyContent: 'space-between',
  },
  itemContainerStyle: {
    padding: WP('2'),
  },
  selectedItem: {
    backgroundColor: AppColors.Secondary.LightGreen,
  },
  itemText: {
    fontSize: AppFontSize.FONT_SIZE_16,
    color: AppColors.Neutrals.Black,
    textTransform: 'capitalize',
    width: '90%',
  },
  selectedItemText: {
    color: AppColors.Neutrals.Black,
  },
  iconContainer: {
    marginLeft: WP('2'),
  },
  dropDownError: {
    marginTop: WP('2'),
    alignSelf: 'flex-start',
    color: AppColors.Neutrals.Red,
    fontSize: AppFontSize.FONT_SIZE_12,
  },
});

export default AppCustomDropdown;
