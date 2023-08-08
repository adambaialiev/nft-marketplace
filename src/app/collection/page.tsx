import Collection from "./components/Collection/Collection";
import Header from "../_components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <SearchBar />
      <Collection />
    </main>
  );
}
