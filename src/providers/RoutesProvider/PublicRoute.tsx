import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import PublicLayout from 'layouts/PublicLayout';

const PublicRoute: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [validated, setValidated] = useState(false);

  const onPublicNavigate = useCallback(() => {
    const user = localStorage.getItem('@Promo:user');
    const token = localStorage.getItem('@Promo:token');

    if (user && token) {
      return navigate('/dashboard');
    }

    localStorage.removeItem('@Promo:user');
    localStorage.removeItem('@Promo:token');
    setValidated(true);
  }, [navigate]);

  useEffect(() => {
    onPublicNavigate();
  }, [onPublicNavigate, pathname]);

  if (!validated) return null;
  return (
    <PublicLayout>
      <Outlet />
    </PublicLayout>
  );
};

export default PublicRoute;
