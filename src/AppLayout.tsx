import { ToastContainer } from 'react-toastify';
import AppRouter from 'src/routing/AppRouter';
import AppHeader from 'src/common/components/AppHeader/AppHeader';

const AppLayout = () => {
  return (
    <>
      <AppHeader />
      <main className="appLayout">
        <AppRouter />
      </main>
      <ToastContainer closeOnClick pauseOnHover theme="colored" />
    </>
  );
};

export default AppLayout;
