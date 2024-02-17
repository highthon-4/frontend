export type Response<T> = {
  header: {
    result: string;
    message: string;
  };
  body: T;
};
