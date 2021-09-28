import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { GlobalProvider } from './context/globalState';
import { getRouterConfig } from './routes/router';

function App() {
  const getRouters = () => {
    return getRouterConfig().map((route, index) => {
      const props = {
        path: route.path,
        exact: route.exact,
        component: route.component,
      };
      return <Route key={index} {...props} />;
    });
  };

  return (
    <GlobalProvider>
      <BrowserRouter>
        <Switch>{getRouters()}</Switch>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
