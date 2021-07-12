import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//import Admin from './admin';
import MainLoader from './components/main-loader';
import Main from './pages/main';
import AdminProtectedRoute from './admin/components/admin-protected-route';
import './App.css';
import { useError } from './hooks';

const Admin = lazy(() => import('./admin'));
const Old = lazy(() => import('./admin2'));

function App() {
  return (
    <div>
      <Switch>
        <AdminProtectedRoute path="/admin">
          <Suspense fallback={<MainLoader />}>
            <Admin />
          </Suspense>
        </AdminProtectedRoute>
        <AdminProtectedRoute path="/admin2">
          <Suspense fallback={<MainLoader />}>
            <Old />
          </Suspense>
        </AdminProtectedRoute>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
