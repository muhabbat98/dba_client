import { useSelector } from './useSelector';

export enum UserRole {
  BUYER,
  SELLER,
}

interface UserRoleType {
  isBuyer: boolean;
  userRole: UserRole;
}

export const useRole = (): UserRoleType => {
  const { roles } = useSelector((state) => state.user);
  let isBuyer: boolean;
  let userRole: UserRole;

  if (roles === 'ROLE_BUYER') {
    isBuyer = true;
    userRole = UserRole.BUYER;
  } else {
    isBuyer = false;
    userRole = UserRole.SELLER;
  }

  return {
    isBuyer,
    userRole,
  };
};
