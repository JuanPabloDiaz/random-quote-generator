import { useState, useEffect } from "react"; // Hooks to consume the API
import Layout from "../../Components/Layout";

const Home = () => {
  // UseState is a hook to add the info from the API to the state
  const [endpoints, setEndpoints] = useState([]); // State to store the data from the dummy API. It's an empty array because the data is an array of objects

  // // UseEffect is a hook to fetch the data from the API
  // useEffect(() => {
  //   // fetch("https://api.quotable.io/random")  <--- deprecated
  //   fetch("https://api.quotable.io/quotes/random")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log("Data from API: ", json); // Log the data
  //       setEndpoints(json); // Add the data to the state (setEndpoints)
  //     });
  // }, []);

  const fetchQuote = () => {
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API: ", json);
        setEndpoints(json);
      });
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4 w-screen h-screen">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80">
          Quote Generator
        </h1>
        <div className="flex flex-col justify-around items-start gap-6 shadow-md shadow-[#666666] rounded-lg p-6 m-6 bg-[#333333] text-white/90 w-full sm:w-[500px] md:w-[600px] lg:w-[700px] h-48">
          <p className="text-xl sm:text-xl md:text-2xl font-semibold text-[#F8F9FA]">
            {endpoints[0]?.content}
          </p>
          <p className="text-sm sm:text-md md:text-lg font-normal text-[#999999]">
            - {endpoints[0]?.author} -
          </p>
        </div>
        <button
          onClick={fetchQuote}
          className="bg-[#666666] hover:bg-[#999999] text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          New Quote
        </button>
        <div className="flex justify-end fixed bottom-10 w-5/6 gap-2">
          <p className="text-sm sm:text-md md:text-lg font-normal text-[#5f5f5f]">
            Developed by:
          </p>
          <span className="text-sm sm:text-md md:text-lg font-normal text-[#999999]">
            Juan Diaz
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
