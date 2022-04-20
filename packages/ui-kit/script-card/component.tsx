import React, { ReactElement } from 'react';
import { ExternalImage } from '../external-image';
import { createStyles, variables } from '../styles';
import { StyleProp, View, ViewStyle, TouchableOpacity } from 'react-native';
import { AppText, TextTheme } from '../text';
import { Icon } from '../icon';

interface Props {
  imageURL: string;
  contentRight: React.ReactNode;
  title: string;
  subtitle: string;
  isBlocked?: boolean;
  style?: StyleProp<ViewStyle>;
  isDraggable?: boolean;
}

export function ScriptCard({
  imageURL,
  contentRight,
  title,
  subtitle,
  isBlocked,
  style: elementStyle,
  isDraggable
}: Props): ReactElement {
  return (
    <TouchableOpacity style={[style.container, elementStyle]} delayPressIn={40}>
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
    </TouchableOpacity>
  );
}

const style = createStyles({
  container: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8
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
