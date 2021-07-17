import { useLocation } from 'react-router-dom';

export function useSellerPathname() {
  const { pathname } = useLocation();

  const isSeller = pathname.includes('seller');

  return {
    isSellerPath: isSeller,
  };
}
