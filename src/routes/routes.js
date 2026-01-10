import Home from '../pages/Home';
import SM from '../pages/SM';
import SS from '../pages/SS';
import Contrato from '../pages/Contrato';

const routes = [
  {
    path: '/',
    element: <Home />,
    name: 'Home'
  },
  {
    path: '/sm',
    element: <SM />,
    name: 'SM'
  },
  {
    path: '/ss',
    element: <SS />,
    name: 'SS'
  },
  {
    path: '/contrato',
    element: <Contrato />,
    name: 'Contrato'
  }
];

export default routes;
