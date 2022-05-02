import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';
import { Icons } from 'assets/icons';
import { customDrawerFacade } from './facade';
import { CustomDrawerItem, CurrentUserItem } from './components';

export function CustomDrawerPanel(props: DrawerContentComponentProps): JSX.Element {
  const translate = useTranslation('MAIN.NAVIGATION');
  const { profile } = customDrawerFacade;

  return (
    <View style={style.container}>
      <Icon name='logoManagement' style={style.logo} />
      <View style={style.menu}>
        <DrawerContentScrollView {...props}>
          {props.state.routeNames.map((route) => (
            <CustomDrawerItem
              key={route}
              label={translate(route.toLocaleUpperCase())}
              onPress={() => {
                customDrawerFacade.navigateToScreen(route);
              }}
              isActive={customDrawerFacade.isActiveScreen(route)}
              icon={route.toLowerCase() as keyof typeof Icons}
            />
          ))}
        </DrawerContentScrollView>
        <CurrentUserItem firstName={profile?.firstName} lastName={profile?.lastName} />
        <CustomDrawerItem
          label={translate('BUTTON_LOGOUT')}
          icon='logout'
          onPress={() => {
            customDrawerFacade.unauthorize();
          }}
        />
      </View>
    </View>
  );
}

const style = createStyles({
  container: {
    flex: 1,
    paddingVertical: 40
  },
  logo: {
    alignSelf: 'center',
    marginBottom: 80
  },
  menu: {
    flex: 1,
    marginLeft: 30
  },
  '@media (max-width: 768)': {
    container: {
      paddingVertical: 20
    },
    logo: {
      marginBottom: 40
    }
  }
});
