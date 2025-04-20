// components/TabIcon.tsx
import React from 'react';
import { View, Text } from 'react-native';
import colors from '@/constants/colors';

interface TabIconProps {
  focused: boolean;
  label: string;
  activeIcon: React.FC<any>;
  inactiveIcon: React.FC<any>;
}

const TabIcon: React.FC<TabIconProps> = ({ focused, label, activeIcon: Active, inactiveIcon: Inactive }) => {
  const Icon = focused ? Active : Inactive;

  return (
    <View style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: "red" }}>
      <Icon width={22} height={22} />
      <Text style={{ fontSize: 12, color: focused ? colors.primary : colors.textColor, fontFamily: "RobotoR" }}>{label}</Text>
    </View>
  );
};

export default TabIcon;
