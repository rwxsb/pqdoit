export enum Status {
  None = 'None',
  Loading = 'Loading',
  Successful = 'Successful',
  Failed = 'Failed',
}

export interface IState {
  status: Status;
  isError: boolean;
  error: string;
}
