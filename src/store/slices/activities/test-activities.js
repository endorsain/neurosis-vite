export const activities = [
  {
    title: 'Canoa',
    createdAt: 231235115,
    month: {
      focus: 12342342,
      break: 123415125,
      get total() {
        return this.focus + this.break;
      },
    },
  },
  {
    title: 'Matematica',
    createdAt: 231235,
    month: {
      focus: 12342,
      break: 123125,
      get total() {
        return this.focus + this.break;
      },
    },
  },
];
