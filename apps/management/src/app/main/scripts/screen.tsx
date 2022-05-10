import React, { ReactElement, useCallback, useEffect, useMemo } from 'react';
import { View } from 'react-native';
import { ScriptCard } from 'ui-kit/script-card';
import { useTranslation } from 'utils/i18n';
import { variables, commonStyle } from '@styles';
import { AnyStyle, createStyles } from 'ui-kit/styles';
import { Icon } from 'ui-kit/icon';
import { Card } from 'ui-kit/card';
import { AppText, TextTheme } from 'ui-kit/text';
import { appNavigationService } from 'features/navigation';
import { scriptsListFacade } from './facade';
import { ScrollView } from 'react-native-gesture-handler';
import { ScriptsActionsMenu } from '../shared/components/scripts-actions-menu';
import { PaginationListFooter } from '../shared/components/pagination-list-footer';
import { alertService } from 'features/alert';
import { Script } from 'features/data';

export function ScriptsListScreen(): ReactElement {
  const translate = useTranslation('MAIN.SCRIPTS.SCRIPTS_LIST');
  const { items, isLoading, pagination } = scriptsListFacade;

  const handlePageSelect = (page: number): void => {
    scriptsListFacade.loadItems(page, true);
  };

  const handleShowMorePress = (): void => {
    scriptsListFacade.loadItems(pagination.currentPage + 1);
  };

  useEffect(() => {
    handlePageSelect(1);
  }, []);

  const memoizedFooter = useMemo(() => {
    return (
      <View style={style.footer}>
        {pagination.lastPage > 1 && (
          <PaginationListFooter
            currentPage={pagination.currentPage}
            numberOfPages={pagination.lastPage}
            isLoading={isLoading}
            onPageSelect={handlePageSelect}
            onShowMorePress={handleShowMorePress}
          />
        )}
      </View>
    );
  }, [pagination.lastPage, isLoading, pagination.currentPage]);

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

  const contentRight = useCallback(
    (item: Script) => (
      <ScriptsActionsMenu
        optionProps={[
          {
            title: translate('BUTTON_DROPDOWN_EDIT'),
            icon: <Icon name='edit' />,
            onSelect: scriptsListFacade.editScript
          },
          {
            title: translate('BUTTON_DROPDOWN_DELETE'),
            icon: <Icon name='delete' stroke={variables.color.black} />,
            onSelect: () => alertService.confirm({
              title: translate('TITLE_ALERT_DELETE', { scriptTitle: item.title }),
              message: translate('MESSAGE_ALERT_DELETE', { scriptTitle: item.title }),
              onConfirm: () => scriptsListFacade.deleteItem(item),
              confirmButtonText: translate('TEXT_BUTTON_CONFIRM'),
              cancelButtonText: translate('TEXT_BUTTON_CANCEL'),
              confirmButtonStyle: 'destructive',
              options: {
                cancelable: true
              }
            })
          }
        ]}
      />
    ),
    []
  );

  return (
    <View style={[style.wrapper, items.length !== 0 && style.clearMargin]}>
      <ScrollView
        contentContainerStyle={[commonStyle.wrapper, style.listContainer]}
        showsVerticalScrollIndicator={false}>
        <View style={style.cardContainer}>{renderedAddScriptCard}</View>
        {items.map((item) => (
          <View style={style.cardContainer} key={item.id}>
            <ScriptCard
              style={style.card}
              mediaID={item.coverID}
              contentRight={contentRight(item)}
              title={item.title}
              subtitle={translate('TEXT_SUBTITLE', { tasksTotal: 3 })}
              isDraggable={true}
            />
          </View>
        ))}
        {memoizedFooter}
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
    height: 300,
    flex: 1
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
  footer: {
    width: '100%'
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
