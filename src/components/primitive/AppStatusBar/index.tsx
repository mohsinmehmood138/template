import React from 'react';
import {StatusBar, StatusBarStyle} from 'react-native';

interface AppStatusBarProps {
  translucent?: boolean;
  barStyle: StatusBarStyle;
  backgroundColor?: string;
}
const AppStatusBar: React.FC<AppStatusBarProps> = ({
  barStyle,
  backgroundColor,
  translucent = false,
}) => {
  return (
    <StatusBar
      backgroundColor={backgroundColor}
      barStyle={barStyle}
      translucent={translucent}
    />
  );
};
export {AppStatusBar};
