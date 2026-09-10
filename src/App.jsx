import AppRouter from "./router/AppRouter";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import "./_App.scss";

function App() {
  return (
    <>
      <div className="layout-app">
        <Header />
        <AppRouter />
      </div>
      <Footer />
    </>
  );
}

export default App;
