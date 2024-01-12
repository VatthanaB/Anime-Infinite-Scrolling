import { fetchAnime } from "./action";
import Main from "./main";

function Home() {
  const data = fetchAnime(1, "popularity");
  return (
    <main className="sm:p-16 py-16 px-8 flex flex-col gap-10">
      <Main />
    </main>
  );
}

export default Home;
