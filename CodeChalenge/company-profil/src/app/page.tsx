import { Footer } from "@/components/footer/page";
import { Hero } from "@/components/hero/page";
import { ProductsAndServices } from "@/components/layananDanProducts/page";

import { TentangKami } from "@/components/testimony/page";
import { Tinjauan } from "@/components/tinjauanPerusahaan/page";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Tinjauan />
      <ProductsAndServices />
      <TentangKami />
      <Footer />
    </div>
  );
}
