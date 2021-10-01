import "./_app.scss";
import Header from "./components/header/Header";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { Container } from "react-bootstrap";

import LoginScreen from "./screens/login/LoginScreen";
import HomeScreen from "./screens/home/HomeScreen";
import Sidebar from "./components/sidebar/Sidebar";
import CustomerScreen from "./screens/customer/CustomerScreen";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { loadLoginAdmin } from "./redux/actions/auth.action";
import MedicineScreen from "./screens/medicine/MedicineScreen";

// import apiKeys from "./config/key";
// import firebase from "firebase/app";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="app__container">
        <Sidebar />
        <Container fluid className="app__main">
          {children}
        </Container>
      </div>
    </>
  );
};

function App() {
  const { admin, loading } = useSelector((state) => state.auth);

  const history = useHistory();
  const dispatch = useDispatch();



  useEffect(() => {
    if (!admin) dispatch(loadLoginAdmin());
    if (!loading && !admin) {
      history.push("/login");
    }
  }, [admin, loading, history]);

  return (
    <Switch>
      <Route path="/login">
        <LoginScreen />
      </Route>
      <Route path="/" exact>
        <Layout>
          <HomeScreen />
        </Layout>
      </Route>
      <Route path="/customer" exact>
        <Layout>
          <CustomerScreen />
        </Layout>
      </Route>
      <Route path="/medicine" exact>
        <Layout>
          <MedicineScreen />
        </Layout>
      </Route>
      <Route>
        <Redirect to="/" />
      </Route>
    </Switch>
  );
}

export default App;
