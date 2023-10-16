function handleResponse(req, res): void {
  const body = res.data ?? {};

  res.send(body);
}

export { handleResponse };
