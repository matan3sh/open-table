import Link from "next/link";
import Card from "./Card";

export default function Cards() {
  return (
    <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
      <Link href="/restaurant/milestones-grill">
        <Card />
      </Link>
    </div>
  );
}
