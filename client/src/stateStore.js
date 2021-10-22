import create from 'zustand';

const useSchedulerStore = create((set) => ({
  scheduledPickUps: [],
  createPickUp: (pickup) =>
    set((state) => {
      return { scheduledPickUps: pickup };
    }),
}));

export default useSchedulerStore;
