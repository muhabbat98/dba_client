import { useSelector } from './useSelector';

export enum UserRole {
  BUYER = 'ROLE_BUYER',
  SELLER = 'ROLE_SELLER',
}

interface UserRoleType {
  isBuyer: boolean;
  userRole: UserRole | null;
}

export const useRole = (): UserRoleType => {
  const { roles } = useSelector((state) => state.user);
  let isBuyer: any;
  let userRole: UserRole | null;

  if (roles === 'ROLE_BUYER') {
    isBuyer = true;
    userRole = UserRole.BUYER;
  } else if (roles === 'ROLE_SELLER') {
    isBuyer = false;
    userRole = UserRole.SELLER;
  } else {
    isBuyer = false;
    userRole = null;
  }

  return {
    isBuyer,
    userRole,
  };
};
