import React, { ReactElement, useCallback } from 'react';
import { EntitySelect, EntitySelectProps } from '@shared/entity-select';
import { User, UserService, userService } from 'features/data';
import { PaginationRequest } from 'features/data/pagination';
import { SelectOption } from '@shared/select';

type Props<TForm> = Partial<EntitySelectProps<User, UserService, PaginationRequest, TForm>>;

export function UserSelect<TForm>({
  name,
  placeholder,
  formik,
  optionsContainerStyle,
  triggerContainerStyle
}: Props<TForm>): ReactElement {
  const mapUserToOption = useCallback((user: User): SelectOption => {
    return {
      title: `${user.firstName} ${user.lastName}`,
      id: user.id
    };
  }, []);

  return (
    <EntitySelect
      name={name}
      placeholder={placeholder}
      formik={formik}
      optionsContainerStyle={optionsContainerStyle}
      triggerContainerStyle={triggerContainerStyle}
      entityService={userService}
      mapToOption={mapUserToOption}
    />
  );
}
