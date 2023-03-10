import Header from "../../components/Header";
import Navbar from "../../components/Navbar";
import SearchRestaurantCard from "../../components/search/SearchRestaurantCard";
import SearchSidebar from "../../components/search/SearchSidebar";

export default function Search() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSidebar />
          <div className="w-5/6">
            <SearchRestaurantCard />
          </div>
        </div>
      </main>
    </main>
  );
}
