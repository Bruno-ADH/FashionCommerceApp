import { Tabs } from 'expo-router';
import colors from '@/constants/colors';

import HomeActive from '@/assets/icons/home-active.svg';
import HomeInactive from '@/assets/icons/home-inactive.svg';
import ExploreActive from '@/assets/icons/explore-active.svg';
import ExploreInactive from '@/assets/icons/explore-inactive.svg';
import NotificationActive from '@/assets/icons/notification-active.svg';
import NotificationInactive from '@/assets/icons/notification-inactive.svg';
import ProfileActive from '@/assets/icons/profile-active.svg';
import ProfileInactive from '@/assets/icons/profile-inactive.svg';
import { SvgProps } from 'react-native-svg';
import { Text } from 'react-native';

export default function Layout() {

  return (
    <Tabs
          screenOptions={({ route }) => ({
            headerShown: false,
            tabBarStyle: {borderTopColor: colors.textColor, borderTopWidth: 0.5 },
            animation: "shift",
            tabBarIcon: ({ focused, color, size }) => {
              let IconComponent;

              switch (route.name) {
                case 'home':
                  IconComponent = focused ? HomeActive : HomeInactive;
                  break;
                case 'explore':
                  IconComponent = focused ? ExploreActive : ExploreInactive;
                  break;
                case 'notification':
                  IconComponent = focused ? NotificationActive : NotificationInactive;
                  break;
                case 'profile':
                  IconComponent = focused ? ProfileActive : ProfileInactive;
                  break;
                default:
                  return null;
              }

              return <IconComponent width={22} height={22} />;
            },
            tabBarLabel: ({ focused, color, children, position }) =>
              (<Text style={{
                      fontFamily: "RobotoR",
                      fontSize: 12,
                      color: focused ? colors.primary : colors.textColor,
                  }}
              >
                  {children}
              </Text>),
          })}
        >
          <Tabs.Screen
            name="home"
            options={{
              title: 'Home'
            }}
          />
          <Tabs.Screen
            name="explore"
            options={{
              title: 'Explore'
            }}
          />
          <Tabs.Screen
            name="notification"
            options={{
              title: 'Notification'
            }}
          />
          <Tabs.Screen
            name="profile"
            options={{
              title: 'Profile'
            }}
          />
        </Tabs>
  );
}
