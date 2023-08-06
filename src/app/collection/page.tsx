import Collection from "./components/Collection/Collection";
import Header from "./components/Header/Header";
import SearchBar from "./components/Header/SearchBar/SearchBar";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <Header />
      <SearchBar />
      <Collection />
    </main>
  );
}
