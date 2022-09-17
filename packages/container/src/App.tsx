import {
  StylesProvider,
  createGenerateClassName
} from '@material-ui/core/styles';
import { RouterProvider } from 'react-router-dom';
import { Router } from '@remix-run/router';
import { Provider } from 'react-redux';
import 'antd/dist/antd.min.css';
import { store } from './app/store';

// Here instead of importing a react component and using it here
// we call the mount function because the idea behind micro FEs
// is to have close to zero dependencies between remotes
// here it happens that the container is a react app
// but if it were another app them using a react component would not work

const generateClassName = createGenerateClassName({ productionPrefix: 'ct' });

interface IAppProps {
  router: Router;
}

export const App: React.FC<IAppProps> = ({ router }) => {
  return (
    <StylesProvider generateClassName={generateClassName}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </StylesProvider>
  );
};
