import React, { ReactElement } from 'react';
import { ExternalImage } from '../external-image';
import { createStyles } from '../styles';
import { StyleProp, View, ViewStyle } from 'react-native';
import { AppText, TextTheme } from '../text';
import { Icon } from '../icon';
import { Card } from '../card';

interface Props {
  imageURL: string;
  contentRight: React.ReactNode;
  title: string;
  subtitle: string;
  isBlocked?: boolean;
  style?: StyleProp<ViewStyle>;
  isDraggable?: boolean;
  onCardPress?: () => void;
}

export function ScriptCard({
  imageURL,
  contentRight,
  title,
  subtitle,
  isBlocked,
  style: elementStyle,
  isDraggable,
  onCardPress
}: Props): ReactElement {
  return (
    <Card
      style={[style.container, elementStyle]}
      disabled={isBlocked || !onCardPress}
      onPress={onCardPress}>
      <ExternalImage uri={imageURL} style={[style.image, isBlocked && style.blocked]} />
      <View style={style.tabs}>
        {isDraggable && <Icon name='tasks' style={style.tasksIcon} />}
        <View style={[style.textContainer, isBlocked && style.blocked]}>
          <AppText theme={TextTheme.SMALL} isBold>
            {title}
          </AppText>
          <AppText theme={TextTheme.SMALLEST}>{subtitle}</AppText>
        </View>
        {contentRight}
      </View>
    </Card>
  );
}

const style = createStyles({
  container: {
    padding: 10
  },
  image: {
    width: '100%',
    height: 209,
    borderRadius: 6
  },
  tabs: {
    marginTop: 16,
    marginHorizontal: 6,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1
  },
  blocked: {
    opacity: 0.5
  },
  tasksIcon: {
    marginRight: 16
  }
});
