import { navigationConfig } from './navigationConfig';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      {navigationConfig.map((navItem) => (
        <Route key={navItem.path} path={navItem.path} element={navItem.element} />
      ))}
    </Routes>
  );
};

export default AppRouter;
