import { EntityService } from 'features/data/base-entity/service';
import { FormikProps, FormikValues } from 'formik';
import { BaseEntity } from 'features/data/base-entity/models';
import { Select, SelectOption } from '@shared/select';
import { useSelector } from 'react-redux';
import { entityStoreSelectors } from 'features/data/base-entity/store';
import { PaginationRequest } from 'features/data/pagination';
import React, { useState } from 'react';
import { ViewStyle } from 'react-native';

export function EntitySelect<
  TEntity extends BaseEntity = BaseEntity,
  TEntityService extends EntityService = EntityService,
  TSearchRequest extends Record<string, any> = PaginationRequest,
  TFormikValues = FormikValues
>(props: {
  entityService: TEntityService;
  searchParams?: TSearchRequest;
  fieldName: keyof TFormikValues & string;
  formik: FormikProps<TFormikValues>;
  placeholder: string;
  mapToOption: (entity: TEntity) => SelectOption;
  triggerContainerStyle?: ViewStyle;
  optionsContainerStyle?: ViewStyle;
}): JSX.Element {
  const {
    entityService,
    searchParams,
    fieldName,
    formik,
    mapToOption,
    placeholder,
    triggerContainerStyle,
    optionsContainerStyle
  } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [itemsIDs, setItemsIDs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const items: Array<TEntity> = useSelector(entityStoreSelectors[entityService.entityName].items(itemsIDs) as any);
  const options = items.map(mapToOption);

  const fetchItems = (): void => {
    setIsLoading(true);
    entityService
      .search(searchParams)
      .forEach((response) => setItemsIDs(response.data.map((item) => item.id)))
      .then(() => {
        setIsLoading(false);
        setErrorMessage('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
        setIsLoading(false);
      });
  };

  return (
    <Select
      message={errorMessage}
      triggerContainerStyle={triggerContainerStyle}
      optionsContainerStyle={optionsContainerStyle}
      isLoading={isLoading}
      options={options}
      onPress={fetchItems}
      formik={formik}
      name={fieldName}
      placeholder={placeholder}
    />
  );
}
