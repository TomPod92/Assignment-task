import ErrorPage from 'src/common/components/ErrorPage/ErrorPage';
import { navigationConfig } from './navigationConfig';
import { Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Routes>
      {navigationConfig.map((navItem) => (
        <Route key={navItem.path} path={navItem.path} element={navItem.element} />
      ))}
      <Route path="*" element={<ErrorPage errorMessage="Page not found" />} />
    </Routes>
  );
};

export default AppRouter;
