import {ActivityItemProps} from 'src/pages/Activity/ActivityItem';
import {v4} from 'uuid';

export function generateActivity(
  customProps?: Partial<ActivityItemProps['item']>,
): ActivityItemProps['item'] {
  return {
    id: v4(),
    title: 'mockItem',
    category: 'Urgent',
    doneAt: new Date(),
    ...customProps,
  };
}
