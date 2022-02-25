import { Footer } from "../../common/Footer";
import { Header } from "../../common/Header";
import { Main } from "../../common/Main";

export const TheLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Main />
      </main>
      <Footer />
    </div>
  );
};
