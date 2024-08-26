import Footer from "../components/Footer/Footer.jsx";
import Header from "../components/Header/Header";
import { data } from "../helper/data.js";

function HomePage() {
  return (
    <div>
      <Header data={data} />
      <Footer/>
    </div>
  );
}

export default HomePage;
