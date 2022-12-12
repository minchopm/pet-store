import constate from 'constate';

export const [Provider, usePets, useUsers] = constate(
  props => props,
  ({ context }) => context,
  ({ context }) => context,
);
