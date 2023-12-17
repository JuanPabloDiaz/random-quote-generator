import { useState, useEffect } from "react"; // Hooks to consume the API
// import Card from "../../Components/Card";
import Layout from "../../Components/Layout";
// import ProductDetail from "../../Components/ProductDetail";

const Home = () => {
  // UseState is a hook to add the info from the API to the state
  const [endpoints, setEndpoints] = useState([]); // State to store the data from the dummy API. It's an empty array because the data is an array of objects

  // UseEffect is a hook to fetch the data from the API
  useEffect(() => {
    // fetch("https://api.quotable.io/random")
    fetch("https://api.quotable.io/quotes/random")
      .then((response) => response.json())
      .then((json) => {
        console.log("Data from API: ", json); // Log the data
        setEndpoints(json); // Add the data to the state (setEndpoints)
      });
  }, []);

  return (
    <Layout>
      <div className="flex flex-col justify-center items-center gap-4 w-screen h-screen">
        <h1 className="text-2xl font-bold">Quote Generator</h1>
        <div className="flex flex-col justify-normal items-start gap-3 shadow-md shadow-black rounded-lg p-6 m-6 bg-slate-300/20 w-[700px] h-48">
          {console.log("id: ", endpoints[0]?._id)}
          <p>{endpoints[0]?.content}</p>
          <p>{endpoints[0]?.lenght}</p>
          <p>{endpoints[0]?.author}</p>
          <p>{endpoints[0]?.tags}</p>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
