import { Subject } from 'rxjs';
import { useEffect, useState } from 'react';

export const useComponentLifecycle = (): { destroyed$: Subject<void> } => {
  const [destroyed$] = useState<Subject<void>>(new Subject());

  useEffect(() => {
    return () => {
      destroyed$.next();
      destroyed$.complete();
    };
  }, []);

  return { destroyed$ };
};
