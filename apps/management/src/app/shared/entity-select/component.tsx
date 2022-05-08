import { EntityService } from 'features/data/base-entity/service';
import { FormikValues } from 'formik';
import { BaseEntity } from 'features/data/base-entity/models';
import { Select, SelectOption, SelectProps } from '@shared/select';
import { useSelector } from 'react-redux';
import { entityStoreSelectors } from 'features/data/base-entity/store';
import { PaginationRequest } from 'features/data/pagination';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { catchError, finalize, lastValueFrom, takeUntil, tap, throwError } from 'rxjs';
import { useComponentLifecycle } from 'utils/use-component-lifecycle';

export interface EntitySelectProps<
  TEntity extends BaseEntity = BaseEntity,
  TEntityService extends EntityService = EntityService,
  TSearchRequest extends Record<string, any> = PaginationRequest,
  TFormikValues = FormikValues
> extends SelectProps<TFormikValues> {
  entityService: TEntityService;
  searchParams?: TSearchRequest;
  mapToOption: (entity: TEntity) => SelectOption;
}

export function EntitySelect<
  TEntity extends BaseEntity = BaseEntity,
  TEntityService extends EntityService = EntityService,
  TSearchRequest extends Record<string, any> = PaginationRequest,
  TFormikValues = FormikValues
>({
  entityService,
  searchParams,
  name,
  formik,
  mapToOption,
  placeholder,
  triggerContainerStyle,
  optionsContainerStyle
}: EntitySelectProps<TEntity, TEntityService, TSearchRequest, TFormikValues>): JSX.Element {
  const [isLoading, setIsLoading] = useState(false);
  const [itemsIDs, setItemsIDs] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const items: Array<TEntity> = useSelector(entityStoreSelectors[entityService.entityName].items(itemsIDs) as any);
  const options = useMemo(() => {
    return items.map(mapToOption);
  }, [items, mapToOption]);

  const { destroyed$ } = useComponentLifecycle();

  const fetchItems = useCallback(() => {
    return lastValueFrom(
      entityService.search(searchParams).pipe(
        tap((response) => {
          setItemsIDs(response.data.map((item) => item.id));
          setErrorMessage('');
        }),
        catchError((error) => {
          setErrorMessage(error.message);

          return throwError(() => error);
        }),
        finalize(() => setIsLoading(false)),
        takeUntil(destroyed$)
      )
    );
  }, [searchParams]);

  useEffect(() => {
    fetchItems();
  }, [searchParams]);

  return (
    <Select
      message={errorMessage}
      triggerContainerStyle={triggerContainerStyle}
      optionsContainerStyle={optionsContainerStyle}
      isLoading={isLoading}
      options={options}
      onPress={fetchItems}
      formik={formik}
      name={name}
      placeholder={placeholder}
    />
  );
}
