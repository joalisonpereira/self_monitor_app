import {ActivityProps} from 'src/common/types';
import create from 'zustand';

export interface UseTodos {
  activities: ActivityProps[];
  add: (activity: ActivityProps) => void;
  close: (id: string) => void;
}

export const useActivities = create<UseTodos>((set, get) => ({
  activities: [],
  add: activity => set({activities: get().activities.concat(activity)}),
  close: id => {
    set({
      activities: get().activities.map(item => {
        if (item.id === id) {
          return {...item, doneAt: item.doneAt ? null : new Date()};
        }

        return item;
      }),
    });
  },
}));
