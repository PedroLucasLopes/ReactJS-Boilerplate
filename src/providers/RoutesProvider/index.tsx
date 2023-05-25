import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import PrivateRouteNoLayout from './PrivateRouteNoLayout';

const RoutesProvider: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>{/* Public Routes */}</Route>
        <Route element={<PrivateRoute />}>{/* Private Routes */}</Route>
        <Route element={<PrivateRouteNoLayout />}>
          {/* Private Routes No Layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesProvider;
