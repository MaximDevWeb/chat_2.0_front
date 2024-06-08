import type { UseFetchOptions } from "#app";

const useApi = () => {
  return new Api();
};

type ApiMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";

class Api {
  private method: ApiMethod = "GET";
  private body: object | undefined = undefined;
  private immediate = true;

  public setMethod = (method: ApiMethod) => {
    this.method = method;

    return this;
  };

  public setBody = (body: object) => {
    this.body = body;

    return this;
  };

  public disableImmediate = () => {
    this.immediate = false;
    return this;
  };

  public use(url: string) {
    const cnf = useRuntimeConfig();

    const config: UseFetchOptions<any> = {};
    config.method = this.method;
    config.body = this.body;
    config.immediate = this.immediate;
    config.baseURL = cnf.public.baseUrl;

    return useLazyFetch(url, config);
  }
}

export { useApi };
