export type ScrollmagicEvent = {
  progress: number;
  state: string;
  scrollDirection: string
  type?: string;
  currentTarget: {
    $super: object;
    target: {
      $super: object,
    };
    namespace: string;
    timestamp: number;
    timeStamp: number
  };
};
