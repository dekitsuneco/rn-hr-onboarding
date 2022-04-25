import React, { ReactElement } from 'react';
import { FlatList, View } from 'react-native';
import { Script } from 'features/data';
import { ScriptCard } from 'ui-kit/script-card';
import { useTranslation } from 'utils/i18n';
import { variables, commonStyle } from '@styles';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { useScreenDimensions } from 'modules/use-screen-dimensions';
import { AppButton } from 'ui-kit/button';
import { Icon } from 'ui-kit/icon';
import { Card } from 'ui-kit/card';
import { AppText, TextTheme } from 'ui-kit/text';
import { appNavigationService } from 'features/navigation';
import { Dropdown } from 'ui-kit/dropdown';
import { scriptsFacade } from './facade';

const fakeScriptData: Array<Script> = [
  {
    id: '1',
    title: 'Office Intro – Omsk',
    tasksTotal: 3,
    completed: 3,
    status: 'done',
    logo: 'https://i.pinimg.com/originals/b1/97/cb/b197cb2c35746b1a9ccba62d3fd3da53.jpg',
    tasks: [
      {
        id: '1',
        title: 'Essentials',
        isCompleted: true
      },
      {
        id: '12',
        title: 'Video Intro',
        isCompleted: true
      },
      {
        id: '122',
        title: 'Coding Environment and Software',
        isCompleted: true
      }
    ]
  },
  {
    id: '2',
    title: 'Work Tools',
    tasksTotal: 2,
    completed: 1,
    status: 'process',
    logo: 'https://yt3.ggpht.com/ytc/AKedOLTWwBXHqH8wiMcz9dBpLK7X_Vwl2SVFKTtA-sKA=s900-c-k-c0x00ffffff-no-rj',
    tasks: [
      {
        id: '123',
        title: 'IDEs',
        isCompleted: true
      },
      {
        id: '1234',
        title: 'Video Intro',
        isCompleted: false
      }
    ]
  },
  {
    id: '3',
    title: 'Meet Your Colleagues',
    tasksTotal: 3,
    completed: 0,
    status: 'blocked',
    logo: 'https://learncode.net/wp-content/uploads/2018/07/React-native.jpg',
    tasks: [
      {
        id: '12345',
        title: 'Linters',
        isCompleted: false
      },
      {
        id: '12356',
        title: 'Debugging Tools',
        isCompleted: false
      },
      {
        id: '123567',
        title: 'Internal Solutions',
        isCompleted: false
      }
    ]
  }
]; //TODO This is temporary fake data

export function ScriptsListScreen(): ReactElement {
  const translate = useTranslation('MAIN.SCRIPTS.SCRIPTS_LIST');
  const { isTablet, isDesktop } = useScreenDimensions();

  const addScript = (
    <Card
      style={[commonStyle.flexCenter, style.addScript, style.card]}
      onPress={() => appNavigationService.navigate('NewScript')}>
      <View style={style.addScriptContainer}>
        <Icon name='plus' stroke={variables.color.primary} />
        <AppText
          style={style.addScriptText}
          isBold
          theme={TextTheme.MEDIUM}>
          {translate('CARD_TITLE_ADD_SCRIPT')}
        </AppText>
      </View>
    </Card>
  );

  const contentRight = (
    <Dropdown
      alignTo='right'
      optionsProps={[
        {
          title: translate('BUTTON_DROPDOWN_EDIT'),
          icon: <Icon name='edit' />,
          onSelect: scriptsFacade.editScript
        },
        {
          title: translate('BUTTON_DROPDOWN_DELETE'),
          icon: <Icon name='delete' />,
          onSelect: scriptsFacade.deleteScript
        }
      ]}
      renderTrigger={(props) => (
        <View>
          <AppButton
            style={{ paddingVertical: 12, paddingHorizontal: 12 }}
            theme='secondary'
            leftIcon={<Icon name='moreSquare' stroke={variables.color.primary} />}
            {...props}
          />
        </View>
      )}
    />
  );

  return (
    <View
      style={[
        style.wrapper,
        fakeScriptData.length === 0 && commonStyle.mb0,
        (fakeScriptData.length === 0 || !isTablet) && commonStyle.mr0
      ]}>
      <FlatList
        contentContainerStyle={[commonStyle.wrapper, style.listContainer]}
        horizontal={false}
        numColumns={isDesktop ? 3 : isTablet ? 2 : 1}
        data={[{} as Script, ...fakeScriptData]}
        keyExtractor={(item) => item?.id || '-1'}
        renderItem={({ item, item: { tasksTotal }, index }) => (
          <View style={style.cardContainer}>
            {index === 0 ? (
              addScript
            ) : (
              <ScriptCard
                style={style.card}
                imageURL={item.logo}
                contentRight={contentRight}
                title={item.title}
                subtitle={translate('TEXT_SUBTITLE', { tasksTotal })}
                isDraggable={true}
              />
            )}
          </View>
        )}
      />
    </View>
  );
}

const style = createStyles({
  wrapper: {
    alignItems: 'center',
    marginBottom: -16,
    marginRight: -16
  },
  listContainer: {
    paddingVertical: 40
  },
  cardContainer: {
    width: 325,
    marginRight: 16,
    marginBottom: 16
  },
  card: {
    height: 295
  },
  addScript: {
    padding: 10,
    justifyContent: 'center'
  },
  addScriptContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: variables.color.backgroundSecondary,
    borderRadius: 10
  },
  addScriptText: {
    color: variables.color.primary,
    marginLeft: 12
  },
  [`@media (max-width: ${variables.breakpoints.tablet})`]: {
    wrapper: {
      alignItems: 'stretch'
    },
    listContainer: {
      paddingVertical: 16
    },
    cardContainer: {
      width: '100%'
    }
  } as AnyStyle
});
