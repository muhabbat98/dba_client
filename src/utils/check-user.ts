export const checkUSer = (user: any) => {
  if (
    (user.accessToken &&
      user.tokenType &&
      user.id &&
      user.roles === 'ROLE_BUYER') ||
    user.roles === 'ROLE_SELLER'
  ) {
    return true;
  }

  return false;
};
