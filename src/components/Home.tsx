import axios from "axios";
import { useEffect, useState } from "react";

let timerId: number;
const debounce = (fn: () => any, delay: number) => {
  return (...args: any) => {
    clearTimeout(timerId);
    timerId = setTimeout(fn, delay, [...args]);
  };
};

const fetch = (url: string, options?: any) => {
  console.log("Fetching", url);
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Fetch Resolved");
      resolve(`response - ${Math.floor(Math.random() * 1000)}`);
    }, 2000);
  });
};

const HomeComponent = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState<any>();

  const changeHandler = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setSearchTerm(target.value);
  };

  const fetchData = debounce(() => {
    axios
        .post(`http://localhost:3030/?query=${searchTerm}`)
        .then((result) => {
          // console.log('SUCCESS', result.data)
          setSearchResult(result.data);
        })
        .catch((e) => console.log('UH OH', e));
  }, 500);

  useEffect(() => {
    if (searchTerm) {
      fetchData();
    }
  }, [searchTerm]);

  useEffect(() => {
    console.log('results: ', searchResult);
  }, [searchResult]);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>

      {/* <label>
        Search
        <input type="text" value={searchTerm} onChange={changeHandler} />
      </label> */}

      <div>Debounced Response: {searchResult?.data || "falafel"}</div>
    </div>
  );
};
export default HomeComponent;
