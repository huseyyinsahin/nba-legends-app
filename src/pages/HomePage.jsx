import Header from "../components/Header/Header";
import { data } from "../helper/data.js";

function HomePage() {
  return (
    <div>
      <Header data={data} />
    </div>
  );
}

export default HomePage;
