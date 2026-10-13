import Navbar from "../Navbar";
import Footer from "../Footer";
import gallery1 from "../../assets/imgs/gallery_1.jpeg";
import gallery2 from "../../assets/imgs/gallery_2.jpeg";
// import gallery3 from "../../assets/imgs/gallery3.webp";
// import gallery4 from "../../assets/imgs/gallery4.webp";
// import gallery5 from "../../assets/imgs/gallery5.webp";
// import gallery6 from "../../assets/imgs/gallery6.webp";
// import gallery7 from "../../assets/imgs/gallery7.webp";
// import gallery9 from "../../assets/imgs/gallery9.webp";

function GalleryPage() {
  const images = [
    { src: gallery1, label: "" }, // Replace with actual URLs and labels
    { src: gallery2, label: "" },
    // { src: gallery3, label: "Formal Dining" },
    // { src: gallery4, label: "Recreational Area" },
    // { src: gallery7, label: "Bedroom" },
    // { src: gallery5, label: "Recreational Area (2)" },
    // { src: gallery6, label: "Kitchen" },
    // { src: gallery9, label: "Bathroom" },
  ];
  return (
    <div>
      <Navbar />
      <section className="p-[5%] ">
        <div className="">
          {/* home */}
          <div className="text-text-color text-center md:mb-10 mb-5">
            <h1 className="text-xl coustard-regular">A Place Like Home.</h1>
            <p className="text-sm  open-sans pt-2 leading-6">
              Choosing an assisted living home for yourself or a loved one is an important decision, and it’s natural to have questions along the way. At Loving Hearts Senior Living, we understand how important it is to find a place where you feel comfortable, supported, and cared for. If you’re considering us for your loved one’s care, we welcome your questions and invite you to reach out. We’re here to help guide you through the process and provide the information you need to make the best decision for your family.
            </p>
          </div>
          <div className="gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative group">
                {/* Image */}
                <img
                  src={image.src}
                  alt={image.label}
                  className="w-full h-100 object-cover rounded-lg mb-8"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                  <span className="text-white text-lg font-semibold">
                    {image.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default GalleryPage;
