import { commonStyle } from '@styles';
import React, { useEffect } from 'react';
import { View, ScrollView } from 'react-native';
import { Avatar } from 'ui-kit/avatar';
import { AvatarTheme } from 'ui-kit/avatar/enums';
import { createStyles } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { MenuItemProps, MenuItem } from './shared/components';
import { profileFacade } from './facade';

export function ProfileScreen(): JSX.Element {
  useEffect(() => {
    profileFacade.init();
  }, []);

  const translate = useTranslation('MAIN.PROFILE');

  const menuItemsOptions: Array<MenuItemProps> = [
    {
      title: translate('TEXT_MENU_CHANGE_AVATAR'),
      icon: 'image',
      onPress: () => {
        alert('TODO');
      } //TODO
    },
    {
      title: translate('TEXT_MENU_EDIT'),
      icon: 'edit',
      onPress: () => {
        alert('TODO');
      } //TODO
    },
    {
      title: translate('TEXT_MENU_CHANGE_PASSWORD'),
      icon: 'password',
      onPress: () => {
        alert('TODO');
      } //TODO
    },
    {
      title: translate('TEXT_MENU_LOGOUT'),
      icon: 'logout',
      onPress: () => {
        profileFacade.unauthorize();
      }
    }
  ];

  const renderedMenu = menuItemsOptions.map(({ title, ...restProps }) => (
    <MenuItem
      key={title}
      title={title}
      {...restProps} />
  ));

  return (
    <ScrollView contentContainerStyle={[commonStyle.wrapper, style.screen]}>
      <View>
        <AppText theme={TextTheme.LARGEST}>{translate('TEXT_HEADER')}</AppText>
        <View style={style.avatarContainer}>
          <Avatar theme={AvatarTheme.LARGE} id={10} />
        </View>
        <View>{renderedMenu}</View>
      </View>
    </ScrollView>
  );
}

const style = createStyles({
  screen: {
    flex: 1,
    paddingTop: '1rem'
  },
  avatarContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: '3.75rem'
  }
});
