import create from 'zustand';

const useSchedulerStore = create((set) => ({
  scheduledPickUps: [],
  location: '',
  scheduled: {},
  flexible: false,
  updateLocation: (passedlocation) =>
    set((state) => {
      return { location: passedlocation };
    }),
  updateDate: (date) =>
    set((state) => {
      return { scheduled: date };
    }),
  updateFlexibility: (boolean) =>
    set((state) => {
      return { flexible: boolean };
    }),
  createPickUp: (pickup) =>
    set((state) => {
      return { scheduledPickUps: pickup };
    }),
}));

export default useSchedulerStore;
