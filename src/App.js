import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState([]);
  const [examine, setExamine] = useState([]);
  const [backToHuman, setBackToHuman] = useState([]);

  const addHandler = (e) => {
    e.preventDefault();

    setInput([
      ...input,
      {
        id: input.length,
        name: value,
        category: "listed",
      },
    ]);
  };

  console.log(input, "--InputData");

  const toExamining = (id, name) => {
    setInput(input.filter((pet) => pet.id !== id));
    setExamine([
      ...examine,
      {
        id: id,
        name: name,
        category: "examining",
      },
    ]);
  };

  console.log(examine, "--ExamineData");

  const toHuman = (id, name) => {
    setExamine(examine.filter((pet) => pet.id !== id));
    setBackToHuman([
      ...backToHuman,
      {
        id: id,
        name: name,
        category: "hooman",
      },
    ]);
  };

  return (
    <div className="App">
      <div className="flex justify-between">
        <p className="my-3 text-[22px] font-bold ml-6">Pet Manager 3000</p>
        <div className="flex items-center space-x-4 mr-6">
          <p>Dog Name:</p>
          <form onSubmit={addHandler}>
            <input
              className="border-2"
              name="input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              required
            />
            <button className="bg-blue-300 rounded-lg py-1 px-4" type="submit">
              Add pet
            </button>
          </form>
        </div>
      </div>
      <div className="">
        <div className="grid grid-cols-3 text-center mt-6 mx-6 space-x-1">
          <div className="">
            <div className="border-2 border-black">Listed</div>
            <div className="border-2 border-black pb-[250px] h-[70%]">
              {input &&
                input
                  .filter((pets) => pets.category === "listed")
                  .map((pet) => (
                    <div className="flex justify-between items-center mx-3 mt-2 border-2">
                      <p className="text-[20px]" key={pet.id}>
                        {pet.name}
                      </p>
                      <button
                        className="bg-blue-500 py-1 px-3 border-l-2 "
                        onClick={() => toExamining(pet.id, pet.name)}
                      >
                        Next
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          <div className="">
            <div className="border-2 border-black">Examining</div>
            <div className="border-2 border-black pb-[250px] h-[70%]">
              {examine &&
                examine
                  .filter((pets) => pets.category === "examining")
                  .map((pet) => (
                    <div className="flex justify-between items-center mx-3 mt-2 border-2">
                      <p className="text-[20px]" key={pet.id}>
                        {pet.name}
                      </p>
                      <button
                        className="bg-blue-500 py-1 px-3 border-l-2 "
                        onClick={() => toHuman(pet.id, pet.name)}
                      >
                        Next
                      </button>
                    </div>
                  ))}
            </div>
          </div>
          <div className="">
            <div className="border-2 border-black">Finally Back to Hooman</div>
            <div className="border-2 border-black pb-[250px] h-[70%]">
              {backToHuman &&
                backToHuman
                  .filter((pets) => pets.category === "hooman")
                  .map((pet) => (
                    <div className="flex justify-between items-center mx-3 mt-2 border-2">
                      <p className="text-[20px]" key={pet.id}>
                        {pet.name}
                      </p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
