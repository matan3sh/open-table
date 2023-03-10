import Navbar from "../../../components/Navbar";
import RestaurantHeader from "../../../components/restaurant/RestaurantHeader";
import RestaurantImages from "../../../components/restaurant/RestaurantImages";
import RestaurantReservation from "../../../components/restaurant/RestaurantReservation";
import RestaurantReviews from "../../../components/restaurant/RestaurantReviews";
import RestaurantTabs from "../../../components/restaurant/RestaurantTabs";

export default function RestaurantDetails() {
  return (
    <main className="bg-gray-100 min-h-screen w-screen">
      <main className="max-w-screen-2xl m-auto bg-white">
        <Navbar />
        <RestaurantHeader />
        {/* DESCRIPTION PORTION */}
        <div className="flex m-auto w-2/3 justify-between items-start 0 -mt-11">
          <div className="bg-white w-[70%] rounded p-3 shadow">
            <RestaurantTabs />
            {/* TITLE */}
            <div className="mt-4 border-b pb-6">
              <h1 className="font-bold text-6xl">Milesstone Grill</h1>
            </div>
            {/* TITLE */}
            {/* RATING */}
            <div className="flex items-end">
              <div className="ratings mt-2 flex items-center">
                <p>*****</p>
                <p className="text-reg ml-3">4.9</p>
              </div>
              <div>
                <p className="text-reg ml-4">600 Reviews</p>
              </div>
            </div>
            {/* RATING */}
            {/* DESCRIPTION */}
            <div className="mt-4">
              <p className="text-lg font-light">
                The classics you love prepared with a perfect twist, all served
                up in an atmosphere that feels just right. That’s the Milestones
                promise. So, whether you’re celebrating a milestone, making the
                most of Happy Hour or enjoying brunch with friends, you can be
                sure that every Milestones experience is a simple and perfectly
                memorable one.
              </p>
            </div>
            {/* DESCRIPTION */}
            <RestaurantImages />
            <RestaurantReviews />
          </div>
          <RestaurantReservation />
        </div>
      </main>
    </main>
  );
}
