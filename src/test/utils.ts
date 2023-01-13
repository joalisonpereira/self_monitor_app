import {ActivityItemProps} from 'src/pages/Activity/ActivityItem';
import {v4} from 'uuid';

export function generateActivity(): ActivityItemProps['item'] {
  return {
    id: v4(),
    title: 'mockItem',
    category: 'Urgent',
    doneAt: new Date(),
  };
}
