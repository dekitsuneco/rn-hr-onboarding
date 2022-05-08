import { Transform } from 'class-transformer';
import { DateTime } from 'luxon';

export function TransformDate(format?: 'SQL' | 'ISO', withTime: boolean = true): (target: any, key: string) => void {
  const toPlain = Transform(
    ({ value }) => {
      if (DateTime.isDateTime(value)) {
        const utcValue = value.toUTC();
        switch (format) {
          case 'SQL':
            return withTime ? utcValue.toSQL() : utcValue.toSQLDate();
          case 'ISO':
          default:
            return withTime ? utcValue.toISO() : utcValue.toISODate();
        }
      }

      return value;
    },
    { toPlainOnly: true }
  );

  const toClass = Transform(
    ({ value }) => {
      if (value) {
        switch (format) {
          case 'SQL':
            return DateTime.fromSQL(value);
          case 'ISO':
          default:
            return DateTime.fromISO(value);
        }
      }

      return value;
    },
    {
      toClassOnly: true
    }
  );

  return (target: any, key: string): void => {
    toPlain(target, key);
    toClass(target, key);
  };
}
