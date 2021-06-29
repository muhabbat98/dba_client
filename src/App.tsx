import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
//import Admin from './admin';
import MainLoader from './components/main-loader';
import Main from './pages/main';
import AdminProtectedRoute from './admin/components/admin-protected-route';
import './App.css';

const Admin = lazy(() => import('./admin'));

function App() {
  return (
    <div>
      <Switch>
        <AdminProtectedRoute path="/admin">
          <Suspense fallback={<MainLoader />}>
            <Admin />
          </Suspense>
        </AdminProtectedRoute>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
