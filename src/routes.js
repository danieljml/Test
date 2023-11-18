import App from "./App";
import { Home, Projects, Services, Contact } from "./pages";
import { Route } from 'react-router-dom'

const routes = defineConfig({
  routes: [
    {
      path: '/',
      component: () => (
        <App>
          <Route path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/services" component={Services} />
          <Route path="/contact" component={Contact} />
        </App>
      ),
    },
  ],
});

export default routes;
