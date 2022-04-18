import { useEffect, useState } from "react";

const TypeAhead = () => {
  const [myData, setMyData] = useState([{ name: "name500" }]);
  const [input, setInput] = useState(""); // '' is the initial state value
  let bInit = true;
  useEffect(() => {
    if (bInit) {
      bInit = false;
      const dataUrl =
        "https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words";
      //"https://61330e48ab7b1e001799b624.mockapi.io/api/search/users";
      fetch(dataUrl)
        .then((res) => {
          console.log("fetch step1");
          return res.json();
        })
        .then((data) => {
          setMyData(data);
          console.log("fetch ret myData", myData);
        });
    }
    if (myData != []) {
      console.log("KK2: data", JSON.stringify(myData));
    }
  }, [myData]);

  return (
    <div>
      Kumar Krishnamoorthy
      <input
        value={input}
        onInput={(e) => setInput(e.target.value)}
        width="30"
      />
      <br />
      {input.length >= 3
        ? myData
            .filter((item) => {
              return item.name.includes(input);
            })
            .map((item) => {
              return <div className="highlight">{item.name}</div>;
            })
        : "(waiting for input)"}
    </div>
  );
};
export default TypeAhead;
