export const checkUSer = (user: any) => {
  if (
    user.accessToken &&
    user.tokenType &&
    user.id &&
    user.roles === 'ROLE_ADMIN'
  ) {
    return true;
  }

  return false;
};
