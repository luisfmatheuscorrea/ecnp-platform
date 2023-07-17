/* eslint-disable import/named */
import { redirect } from 'react-router-dom';
import Layout from '../components/Layout';
// import Layout from '../components/Layout';

interface RouteSProps {
  isPrivate?: boolean;
  element: JSX.Element;
}

export default function RouteWrapper({ isPrivate, element }: RouteSProps) {
  const signed = { name: 'Luís', perfil: 'admin', token: 'a7s8a7f8wd87a6wda7wf87a9bg8d9gudf8s6' };
  // const signed = JSON.parse(localStorage.getItem('logged') ?? '');

  if ((!signed || !signed.name || !signed.perfil || !signed.token) && isPrivate) {
    redirect('/login');
  }

  return signed ? <Layout>{element}</Layout> : element;
}
