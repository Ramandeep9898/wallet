import "./home.css";
import { Header } from "../../components/Header.component/Header";
import { Aside } from "../../components/Aside.component/Aside";

export const Home = () => {
  return (
    <>
      <div className="contanier">
        <Header />
        <Aside />
      </div>
    </>
  );
};
