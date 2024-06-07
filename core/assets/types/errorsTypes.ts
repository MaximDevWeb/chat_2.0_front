export type ErrorType = {
  data: {
    message: string;
    errors: {
      [key: string]: string[];
    };
    exception?: string;
    file?: string;
    line?: string;
    trace?: string;
  };
};
