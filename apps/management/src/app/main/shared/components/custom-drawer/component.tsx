import { DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import React, { ReactElement } from 'react';
import { View } from 'react-native';
import { Icon } from 'ui-kit/icon';
import { createStyles } from 'ui-kit/styles';
import { useTranslation } from 'utils/i18n';
import { Icons } from '../../../../../../../../packages/assets/icons/icons';
import { CurrentUserItem } from './current-user-item/component';
import { CustomDrawerItem } from './custom-drawer-item/component';
import { customDrawerFacade } from './facade';

export function CustomDrawerPanel(props: DrawerContentComponentProps): ReactElement {
  const translate = useTranslation('MAIN.NAVIGATION');

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
        <CurrentUserItem />
        <CustomDrawerItem
          label={translate('BUTTON_LOGOUT')}
          icon='logout'
          onPress={() => {
            customDrawerFacade.popToTop();
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
