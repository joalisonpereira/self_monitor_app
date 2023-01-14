import {ActivityItemProps} from 'src/pages/Activity/ActivityItem';
import {v4} from 'uuid';
import {faker} from '@faker-js/faker';

export function generateActivity(
  customProps?: Partial<ActivityItemProps['item']>,
): ActivityItemProps['item'] {
  return {
    id: v4(),
    title: faker.animal.bird(),
    category: 'Urgent',
    doneAt: new Date(),
    ...customProps,
  };
}
