import { useCallback, useEffect, useState } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import PrivateLayout from 'layouts/PrivateLayout';

const PrivateRoute: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [validated, setValidated] = useState(false);

  const onPrivateNavigate = useCallback(() => {
    const user = localStorage.getItem('@Promo:user');
    const token = localStorage.getItem('@Promo:token');

    if (!user || !token) {
      localStorage.removeItem('@Promo:user');
      localStorage.removeItem('@Promo:token');
      navigate('/login');
    }

    setValidated(true);
  }, [navigate]);

  useEffect(() => {
    onPrivateNavigate();
  }, [onPrivateNavigate, pathname]);

  if (!validated) return null;
  return (
    <PrivateLayout>
      <Outlet />
    </PrivateLayout>
  );
};

export default PrivateRoute;
