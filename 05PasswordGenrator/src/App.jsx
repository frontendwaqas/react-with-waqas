/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { useCallback, useEffect, useState } from "react";

function App() {
  const [length, setLength] = useState(9);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [chaAllowed, setChaAllowed] = useState(false);
  const [password, setpassword] = useState();
  const passwordRef = useRef(null);
  const passwordGenrator = useCallback(() => {
    let password = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (numberAllowed) str += "!@#$%^&*()_+-=[]{}|";
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      password += str.charAt(char);
    }
    setpassword(password);
  }, [setpassword, length, numberAllowed, chaAllowed]);

  const copy = useCallback(() => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenrator();
  }, [setpassword, length, numberAllowed, chaAllowed, passwordGenrator]);
  return (
    <>
      <div
        className=" py-4
       mx-auto px-4 my-8 bg-gray-500 text-orange-400 w-full max-w-md rounded-lg "
      >
        <div className="flex shadow overflow-hidden mb-4">
          <input
            type="text"
            className=" rounded-sm outline-none w-full py-1 px-3"
            value={password}
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copy}
            className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input
              className="cursor-pointer"
              min={6}
              max={100}
              value={length}
              type="range"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label htmlFor="">Length : {length} </label>
          </div>
          <div className="flrx item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numberAllowed}
              onChange={() => {
                setNumberAllowed(!numberAllowed);
              }}
            />
            <label htmlFor="">Number</label>
          </div>
          <div className="flrx item-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={chaAllowed}
              onChange={() => {
                setChaAllowed(!chaAllowed);
              }}
            />
            <label htmlFor="">Char</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
