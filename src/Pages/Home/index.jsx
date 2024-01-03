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
      <div className="flex h-screen w-screen flex-col items-center justify-center gap-4 p-2">
        <h1 className="text-2xl font-bold text-white/80 sm:text-3xl md:text-4xl">
          Quote Generator
        </h1>
        <div className="m-6 flex min-h-[180px] w-full flex-col items-start justify-around gap-6 rounded-lg bg-[#333333] p-6 text-white/90 shadow-md shadow-[#666666] sm:w-[500px] md:w-[600px] lg:w-[700px]">
          <p className="text-xl font-semibold text-[#F8F9FA] sm:text-xl md:text-2xl">
            {endpoints[0]?.content}
          </p>
          <p className="sm:text-md text-sm font-normal text-[#999999] md:text-lg">
            - {endpoints[0]?.author} -
          </p>
        </div>
        <button
          onClick={fetchQuote}
          className="rounded bg-[#666666] px-4 py-2 font-bold text-white transition duration-300 hover:bg-[#999999]"
        >
          New Quote
        </button>
        <div className="fixed bottom-10 flex w-5/6 justify-end gap-2">
          <p className="sm:text-md text-sm font-normal text-[#5f5f5f] md:text-lg">
            Developed by:
          </p>
          <span className="sm:text-md text-sm font-normal text-[#999999] transition duration-300 hover:text-[#F8F9FA] md:text-lg">
            <a href="https://jpdiaz.dev/">Juan Diaz</a>
          </span>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
