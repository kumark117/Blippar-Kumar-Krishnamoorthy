import { useEffect, useState } from "react";
let bInit = true;

const TypeAhead = () => {
  const [myData, setMyData] = useState(["name500", "name600"]);
  const [input, setInput] = useState(""); // '' is the initial state value
  useEffect(() => {
    if (bInit) {
      bInit = false;
      const dataUrl =
        "https://gist.githubusercontent.com/abhijit-paul-blippar/0f97bb6626cfa9d8989c7199f7c66c5b/raw/dcff66021fba04ee8d3c6b23a3247fb5d56ae3e5/words";
      
        fetch(dataUrl)
        .then((res) => {
          return res.text();
        })
        .then((data) => {
          let tmpArray = data.split("\n");
          alert("@@@FETCHED Data & split!"+tmpArray)
          setMyData(tmpArray);
        });
      }
    if (myData != []) {
      console.log("KK2: data", JSON.stringify(myData));
    }
  }, [myData]);          //console.log("fetch ret myData", myData);


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
              return item.includes(input);
            })
            .map((item) => {
              return <div className="highlight">{item}</div>;
            })
        : "(waiting for input)"}
    </div>
  );
};
export default TypeAhead;
