import { RouteProp } from '@react-navigation/native';
import { RadioCard } from '@shared/radio-card';
import { commonStyle } from '@styles';
import React, { useState } from 'react';
import { View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AppButton } from 'ui-kit/button';
import { ExternalImage } from 'ui-kit/external-image';
import { createStyles, variables } from 'ui-kit/styles';
import { AppText, TextTheme } from 'ui-kit/text';
import { useTranslation } from 'utils/i18n';
import { OnboardingNavigationParams } from '../navigation';

interface Props {
  route?: RouteProp<OnboardingNavigationParams, 'Task'>;
}

export function TaskScreen({ route }: Props): JSX.Element {
  const translate = useTranslation('MAIN.ONBOARDING.TASK');
  const { title, description, answers, isCompleted } = route.params.task;
  const [radioArray, setRadioArray] = useState(answers);

  const handleCardPress = (id: string): void => {
    const newArray = radioArray.map((radio) => ({
      ...radio,
      selected: radio.id === id
    }));

    setRadioArray(newArray);
  };

  const mockWysiwyg = (
    <View>
      <AppText style={style.offset} theme={TextTheme.MEDIUM}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis vero, velit odit quas doloremque cumque?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, alias vel, autem omnis quo laboriosam
        aspernatur earum error, ad dolore nam praesentium aliquid maiores quis beatae nostrum doloribus in nemo.
      </AppText>
      <ExternalImage
        style={[style.offset, style.videoPlayer]}
        uri='https://s3.amazonaws.com/a.storyblok.com/f/64010/600x342/14cec677c6/what-is-onboarding-and-why-is-it-important-thumbnail.png'
      />
      <AppText theme={TextTheme.MEDIUM}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, repudiandae?
      </AppText>
    </View>
  );

  return (
    <View style={style.wrapper}>
      <ScrollView contentContainerStyle={[style.scrollContainer, !isCompleted && style.pb0]}>
        <View style={[commonStyle.wrapper, style.infoContainer]}>
          <AppText style={style.offset} theme={TextTheme.LARGEST}>
            {title}
          </AppText>
          <View style={style.wysiwygContainer}>{mockWysiwyg}</View>
          <View>
            <AppText style={style.answerGroupLabel} theme={TextTheme.SMALLEST}>
              {translate('LABEL_ANSWERS')}
            </AppText>
            {radioArray.map(({ id, title, selected }, index) => (
              <RadioCard
                key={id}
                title={title}
                style={[index < radioArray.length - 1 && style.radioCard]}
                isSelected={selected}
                onPress={() => handleCardPress(id)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
      {!isCompleted && (
        <View style={[commonStyle.wrapper, style.btnContainer]}>
          <AppButton title={translate('BUTTON_SUBMIT_ANSWER')} />
        </View>
      )}
    </View>
  );
}

const style = createStyles({
  wrapper: {
    flex: 1
  },
  scrollContainer: {
    paddingBottom: 95
  },
  pb0: {
    paddingBottom: 0
  },
  infoContainer: {
    paddingVertical: 40
  },
  videoPlayer: {
    height: 183,
    width: '100%',
    borderRadius: 10
  },
  offset: {
    marginBottom: 24
  },
  wysiwygContainer: {
    marginBottom: 40
  },
  answerGroupLabel: {
    marginBottom: '0.5rem'
  },
  btnContainer: {
    borderTopWidth: 1,
    borderColor: variables.color.backgroundTertiary,
    backgroundColor: variables.color.background,
    minHeight: 94,
    paddingVertical: '1rem'
  },
  radioCard: {
    marginBottom: '1rem'
  }
});
