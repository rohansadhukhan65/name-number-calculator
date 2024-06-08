import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [text, setText] = useState("");
  const [calculation, setCalculation] = useState("");
  const [result, setResult] = useState<number | null>();
  const letterNumbers = [
    {
      num: 1,
      letterSmall: "a",
      letterCap: "A",
    },
    {
      num: 1,
      letterSmall: "i",
      letterCap: "I",
    },
    {
      num: 1,
      letterSmall: "j",
      letterCap: "J",
    },
    {
      num: 1,
      letterSmall: "q",
      letterCap: "Q",
    },
    {
      num: 1,
      letterSmall: "y",
      letterCap: "Y",
    },
    {
      num: 2,
      letterSmall: "b",
      letterCap: "B",
    },
    {
      num: 2,
      letterSmall: "k",
      letterCap: "K",
    },
    {
      num: 2,
      letterSmall: "r",
      letterCap: "R",
    },
    {
      num: 3,
      letterSmall: "c",
      letterCap: "C",
    },
    {
      num: 3,
      letterSmall: "g",
      letterCap: "G",
    },
    {
      num: 3,
      letterSmall: "l",
      letterCap: "L",
    },
    {
      num: 3,
      letterSmall: "s",
      letterCap: "S",
    },
    {
      num: 4,
      letterSmall: "d",
      letterCap: "D",
    },
    {
      num: 4,
      letterSmall: "m",
      letterCap: "M",
    },
    {
      num: 4,
      letterSmall: "t",
      letterCap: "T",
    },
    {
      num: 5,
      letterSmall: "e",
      letterCap: "E",
    },
    {
      num: 5,
      letterSmall: "h",
      letterCap: "H",
    },
    {
      num: 5,
      letterSmall: "n",
      letterCap: "N",
    },
    {
      num: 6,
      letterSmall: "u",
      letterCap: "U",
    },
    {
      num: 6,
      letterSmall: "v",
      letterCap: "V",
    },
    {
      num: 6,
      letterSmall: "w",
      letterCap: "W",
    },
    {
      num: 6,
      letterSmall: "x",
      letterCap: "X",
    },
    {
      num: 7,
      letterSmall: "o",
      letterCap: "O",
    },
    {
      num: 7,
      letterSmall: "z",
      letterCap: "Z",
    },
    {
      num: 8,
      letterSmall: "f",
      letterCap: "F",
    },
    {
      num: 8,
      letterSmall: "p",
      letterCap: "P",
    },
  ];

  const inputOnChangeHandler = (e: any) => {
    const { value } = e.target;
    const strArry = value.replaceAll(/\s+/g, "").split("");
    const calculationArray = strArry.map((i: any) => {
      const { num }: any = letterNumbers.find(
        (v) => v.letterSmall === i || v.letterCap === i
      );
      return num;
    });
    let calculationStr: string = "";
    calculationArray.map((v: any) => {
      calculationStr += `${calculationStr !== "" ? "+" : ""}${v}`;
    });
    let result: number |null = null
    calculationArray.map((v: any) => {
      result += v;
    });
    setText(value);
    setCalculation(calculationStr);
    setResult(result)
  };

  return (
    <div className="h-[100dvh] w-full flex items-center justify-center">
      <div className="bg-blue-800 w-[33rem] text-center text-white rounded-xl p-10 shadow-xl">
        <h1 className="text-3xl text-center font-bold">
          Name Number Calculator
        </h1>
        <div className="my-5 flex justify-center items-center w-full">
          <input
            onChange={inputOnChangeHandler}
            type="text"
            placeholder="Enter The Text"
            className="p-3 rounded-xl shadow border-blue-900 w-full my-5 text-black outline-none"
          />
        </div>
        <div className="my-5">
          <p className="font-bold text-3xl my-5">{text}</p>
          <p className="font-normal text-xl">{calculation}</p>
          <p className="font-bold text-3xl my-5">{result}</p>
        </div>
      </div>
    </div>
  );
}
