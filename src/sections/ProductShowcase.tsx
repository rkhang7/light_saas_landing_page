import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";

export const ProductShowcase = () => {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="container">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title">
            A more efficient way to track progress
          </h2>
          <p className="section-description">
            Effortlessly turn your ideas into a fully functional, reponsive,
            SaaS website in just minutes with this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Showcase" className="mt-10" />
          <Image
            src={pyramidImage}
            alt="Decorative Pyramid"
            height={262}
            width={262}
            className="absolute -right-36 -top-32 hidden md:block"
          />
          <Image
            src={tubeImage}
            alt="Decorative Tube"
            height={248}
            width={248}
            className="absolute bottom-24 -left-36 hidden md:block"
          />
        </div>
      </div>
    </section>
  );
};
