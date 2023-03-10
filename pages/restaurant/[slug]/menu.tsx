import Link from "next/link";
import Navbar from "../../../components/Navbar";
import RestaurantHeader from "../../../components/restaurant/RestaurantHeader";
import RestaurantMenuCards from "../../../components/restaurant/RestaurantMenuCards";
import RestaurantTabs from "../../../components/restaurant/RestaurantTabs";

export default function RestaurantMenu() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[100%] rounded p-3 shadow">
            <RestaurantTabs />
            <RestaurantMenuCards />
          </div>
        </div>
      </main>
    </main>
  );
}
