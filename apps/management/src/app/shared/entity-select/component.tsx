import { EntityService } from 'features/data/base-entity/service';
import { FormikProps, FormikValues } from 'formik';
import { BaseEntity } from 'features/data/base-entity/models';
import { Select, SelectOption } from '@shared/select';
import { useSelector } from 'react-redux';
import { entityStoreSelectors } from 'features/data/base-entity/store';
import { PaginationRequest } from 'features/data/pagination';
import React, { useState } from 'react';
import { map, tap } from 'rxjs/operators';

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
}): JSX.Element {
  const { entityService, searchParams, fieldName, formik, mapToOption, placeholder } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [itemsIDs, setItemsIDs] = useState([]);
  const items: Array<TEntity> = useSelector(entityStoreSelectors[entityService.entityName].items(itemsIDs) as any);
  const options = items.map(mapToOption);

  const fetchItems = (): void => {
    setIsLoading(true);
    entityService.search(searchParams).pipe(
      map((response) => response.data.map((item) => item.id)),
      tap((IDs) => {
        setItemsIDs(IDs);
        setIsLoading(false);
      })
    );
  };

  return <Select
    options={options}
    onPress={fetchItems}
    formik={formik}
    name={fieldName}
    placeholder={placeholder} />;
}
