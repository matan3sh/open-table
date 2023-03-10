import Navbar from "../../../components/Navbar";
import RestaurantDescription from "../../../components/restaurant/RestaurantDescription";
import RestaurantHeader from "../../../components/restaurant/RestaurantHeader";
import RestaurantImages from "../../../components/restaurant/RestaurantImages";
import RestaurantRating from "../../../components/restaurant/RestaurantRating";
import RestaurantReservation from "../../../components/restaurant/RestaurantReservation";
import RestaurantReviews from "../../../components/restaurant/RestaurantReviews";
import RestaurantTabs from "../../../components/restaurant/RestaurantTabs";
import RestaurantTitle from "../../../components/restaurant/RestaurantTitle";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader />
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantTabs />
            <RestaurantTitle />
            <RestaurantRating />
            <RestaurantDescription />
            <RestaurantImages />
            <RestaurantReviews />
          </div>
          <RestaurantReservation />
        </div>
      </main>
    </main>
  );
}
