import Nav from "../components/Nav";
import image from "../assets/image.png";

const Home = () => {
  return (
    <div>
      <Nav />
      <div className="text-center mt-20">
        <img
          className="mx-auto h-16 w-16"
          src={image}
          alt="StockCheck Logo"
        />
        <h1 className="text-5xl text-black font-bold mt-5">
          Manage Your Stock Items
        </h1>
        <h1 className="text-5xl gradient-text font-bold mt-3">
          10x Faster <span className="text-black">with the help of </span>StockCheck
        </h1>
        <p className="text-black mt-4 text-xl">
          Never run out of essentials again! StockCheck helps you stay <br />
          organized and stocked up.
        </p>
        <button className="gradient-button px-10 py-3 rounded-xl mt-8 text-white font-medium hover:scale-105 transition-transform">
          Start Managing Now
        </button>
      </div>
    </div>
  );
};

export default Home;
