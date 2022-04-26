import React, { ReactElement, useMemo } from 'react';
import { View } from 'react-native';
import { Script } from 'features/data';
import { ScriptCard } from 'ui-kit/script-card';
import { useTranslation } from 'utils/i18n';
import { variables, commonStyle } from '@styles';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { Icon } from 'ui-kit/icon';
import { Card } from 'ui-kit/card';
import { AppText, TextTheme } from 'ui-kit/text';
import { appNavigationService } from 'features/navigation';
import { scriptsFacade } from './facade';
import { ScrollView } from 'react-native-gesture-handler';
import { ScriptsActionsMenu } from '../shared/components/scripts-actions-menu';

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

  const renderedAddScriptCard = useMemo(
    () => (
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
    ),
    []
  );

  const contentRight = (
    <ScriptsActionsMenu
      optionProps={[
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
    />
  );

  return (
    <View style={[style.wrapper, fakeScriptData.length !== 0 && style.clearMargin]}>
      <ScrollView contentContainerStyle={[commonStyle.wrapper, style.listContainer]}>
        <View style={style.cardContainer}>{renderedAddScriptCard}</View>
        {fakeScriptData.map((item) => (
          <View style={style.cardContainer} key={item.id}>
            <ScriptCard
              style={style.card}
              imageURL={item.logo}
              contentRight={contentRight}
              title={item.title}
              subtitle={translate('TEXT_SUBTITLE', { tasksTotal: item.tasksTotal })}
              isDraggable={true}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const style = createStyles({
  wrapper: {
    alignItems: 'center'
  },
  listContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  clearMargin: {
    margin: -8
  },
  cardContainer: {
    flexBasis: '100%',
    maxWidth: '100%'
  },
  card: {
    margin: 8,
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
  [`@media (min-width: ${variables.breakpoints.tablet})`]: {
    wrapper: {
      alignItems: 'stretch'
    },
    listContainer: {
      paddingVertical: 40
    },
    cardContainer: {
      flexBasis: '50%',
      maxWidth: '50%'
    }
  } as AnyStyle,
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    cardContainer: {
      flexBasis: '33%',
      maxWidth: '33%'
    }
  } as AnyStyle
});
