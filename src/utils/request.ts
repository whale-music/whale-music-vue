import ky from "ky";

const _http = ky.create({
  prefixUrl: "http://localhost",
});

function removeLeadingSlash(str: string) {
  if (str.startsWith("/")) {
    return str.substring(1);
  }
  return str;
}

class Request {
  get<T>(url: string): Promise<T> {
    const _url = removeLeadingSlash(url);
    return _http.get(_url).json();
  }

  post<T>(url: string, body: any): Promise<T> {
    const _url = removeLeadingSlash(url);
    return _http.post(_url, { body: body }).json();
  }
}

export const http = new Request();
