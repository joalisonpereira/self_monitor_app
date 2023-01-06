import {ReactNode} from 'react';

export type CategoryTitle = 'Books' | 'Emails' | 'Work' | 'Urgent';

export interface CategoryProps {
  title: CategoryTitle;
  color: string;
  Icon: ReactNode;
}

export interface ActivityProps {
  id: string;
  title: string;
  doneAt: Date | null;
  category: CategoryTitle;
}
