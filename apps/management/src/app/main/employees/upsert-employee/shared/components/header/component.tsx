import React, { ReactElement } from 'react';
import { AppHeader } from '@app/main/shared/app-header';
import { User } from 'features/data';

interface Props {
  editableUser?: User;
}

export function UpserEmployeHeader({ editableUser }: Props): ReactElement {
  return <AppHeader titleContent={editableUser && editableUser.firstName + ' ' + editableUser.lastName} />;
}
