import { useSelector } from './useSelector';

export enum UserRole {
  BUYER = 'ROLE_BUYER',
  SELLER = 'ROLE_SELLER',
  ADMIN = 'ROLE_ADMIN',
  MODERATOR = 'ROLE_MODERATOR',
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
  } else if (roles === 'ROLE_ADMIN') {
    isBuyer = false;
    userRole = UserRole.ADMIN;
  } else if (roles === 'ROLE_MODERATOR') {
    isBuyer = false;
    userRole = UserRole.MODERATOR;
  } else {
    isBuyer = false;
    userRole = null;
  }

  return {
    isBuyer,
    userRole,
  };
};
