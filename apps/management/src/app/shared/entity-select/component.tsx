import { EntityService } from 'features/data/base-entity/service';
import { FormikProps, FormikValues } from 'formik';
import { BaseEntity } from 'features/data/base-entity/models';
import { Select, SelectOption } from '@shared/select';
import { useSelector } from 'react-redux';
import { entityStoreSelectors } from 'features/data/base-entity/store';
import { PaginationRequest } from 'features/data/pagination';
import React, { useState } from 'react';

export function EntitySelect<
  TEntity extends BaseEntity = BaseEntity,
  TEntityService extends EntityService = EntityService,
  TSearchRequest extends Record<string, any> = PaginationRequest
>(props: {
  entityService: TEntityService;
  searchParams: TSearchRequest;
  fieldName: string;
  formik: FormikProps<FormikValues>;
  mapToOption: (entity: TEntity) => SelectOption;
}): JSX.Element {
  const { entityService, searchParams, fieldName, formik, mapToOption } = props;

  const [isLoading, setIsLoading] = useState(false);
  const [itemsIDs, setItemsIDs] = useState([]);
  const items: Array<TEntity> = useSelector(entityStoreSelectors[entityService.entityName].items(itemsIDs) as any);
  const options = items.map(mapToOption);

  return <Select options={options} />;
}
