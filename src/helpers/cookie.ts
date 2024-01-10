export const getCookie = (key: string) => {
  const cookieMatch = document.cookie.match(
    '(^|;)\\s*' + key + '\\s*=\\s*([^;]+)',
  );
  return cookieMatch ? cookieMatch.pop() : '';
};

export const clearCookie = (key: string) => {
  document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
};
