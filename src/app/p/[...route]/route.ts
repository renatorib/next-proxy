export async function GET(request: Request) {
  const url = new URL(request.url);
  const path = (url.pathname.substring("/p/".length) + url.search)
    // Need to do this cause next replace/redirect double slash
    // So https://foo.com becomes https:/foo.com
    // I still dont know how to remove this behavior
    .replaceAll(/https:\//g, "https://")
    .replaceAll(/http:\//g, "http://");

  return fetch(path, { ...request });
}
