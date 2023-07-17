import { BrowserRouter, Route, Routes as RoutesW } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import RouteWrapper from './Route';
import Course from '../pages/Course';

export default function Routes() {
  return (
    <BrowserRouter basename="/">
      <RoutesW>
        <Route path="/" element={<RouteWrapper isPrivate element={<Home />} />} />
        <Route path="/login" element={<RouteWrapper element={<Login />} />} />
        <Route path="/register" element={<RouteWrapper element={<Register />} />} />
        <Route path="/courses" element={<RouteWrapper isPrivate element={<Course />} />} />
      </RoutesW>
    </BrowserRouter>
  );
}
