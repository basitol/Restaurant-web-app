import { Homepage, Navbar, Footer } from "./components";
import { About, Contact, Product } from "./pages";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/product" exact>
          <Product />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
      </Switch>
      <<Footer />
    </Router>
  );
}

export default App;
