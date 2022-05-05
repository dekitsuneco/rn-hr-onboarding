import { createStyles, variables } from '@styles';
import React, { ReactNode } from 'react';
import { View } from 'react-native';
import { AnyStyle } from 'ui-kit/styles';
import { AppText } from 'ui-kit/text';

export type FormSectionProps = {
  title: string;
  children?: ReactNode;
};

export function FormSection({ title, children }: FormSectionProps): JSX.Element {
  return (
    <View style={style.column}>
      <AppText style={style.formSubtitle}>{title}</AppText>
      {children}
    </View>
  );
}

const style = createStyles({
  formSubtitle: {
    marginBottom: 24,
    marginTop: 40,
    textTransform: 'uppercase'
  },
  [`@media (min-width: ${variables.breakpoints.desktop})`]: {
    column: {
      flexBasis: '33%',
      paddingHorizontal: '2rem',
      maxWidth: '33%'
    }
  } as AnyStyle
});
