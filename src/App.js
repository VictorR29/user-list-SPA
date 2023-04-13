import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import { Home } from './pages/Home';
import { Login } from './pages/Login/Login';
import { Users } from './pages/Users/Users';
import { PrivateRoute } from './components/ProtectedRoutes/PrivateRoute';
import { PublicRoute } from './components/ProtectedRoutes/PublicRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/" element={<Home /> }/>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/users" element={
          <PrivateRoute redirecTo="/">
            <Users />
          </PrivateRoute>
        } />
       </Routes>
    </BrowserRouter>
  );
}

export default App;
