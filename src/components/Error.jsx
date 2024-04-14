import Header from "../UI/Header";
import Footer from "./Footer";

const ErrorComponent = () => {
  return (
    <>
      <Header />{" "}
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
        role="alert"
      >
        <strong className="font-bold">Error:</strong>
        <span className="block sm:inline">Plz type a correct City</span>
      </div>
      <Footer />
    </>
  );
};

export default ErrorComponent;
