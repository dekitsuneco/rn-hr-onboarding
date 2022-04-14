import React, { ReactElement } from 'react';
import { ExternalImage } from '../external-image';
import { createStyles, variables } from '../styles';
import { StyleProp, View, ViewStyle } from 'react-native';
import { AppText, TextTheme } from '../text';
import { Icon } from '../icon';

interface Props {
  uri: string;
  button: React.ReactNode;
  title: string;
  subTitle: string;
  blocked?: boolean;
  style?: StyleProp<ViewStyle>;
  web?: boolean;
}

export function ScriptCard({ uri, button, title, subTitle, blocked, style, web }: Props): ReactElement {
  return (
    <View style={[scriptCardCtyle.container, style]}>
      <ExternalImage uri={uri} style={[scriptCardCtyle.image, blocked && scriptCardCtyle.blocked]} />
      <View style={scriptCardCtyle.tabs}>
        {web && <Icon name='tasks' style={scriptCardCtyle.tasksIcon} />}
        <View style={[scriptCardCtyle.textContainer, blocked && scriptCardCtyle.blocked]}>
          <AppText theme={TextTheme.SMALL} style={scriptCardCtyle.title}>
            {title}
          </AppText>
          <AppText theme={TextTheme.SMALLEST}>{subTitle}</AppText>
        </View>
        {button}
      </View>
    </View>
  );
}

const scriptCardCtyle = createStyles({
  container: {
    width: '100%',
    maxWidth: 327,
    padding: 10,
    backgroundColor: 'white',
    margin: 8,
    borderRadius: 10,
    shadowColor: variables.color.boxShadow,
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 20,
    elevation: 20
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
  title: {
    fontWeight: '700'
  },
  blocked: {
    opacity: 0.5
  },
  tasksIcon: {
    marginRight: 16
  }
});
