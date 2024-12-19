import BestPost from "@/components/bestPost/page";

import { Hero } from "@/components/hero/page";
import PopularCategories from "@/components/popularCategories/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <BestPost />
      <PopularCategories />
    </div>
  );
}
