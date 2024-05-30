import {useCallback, useEffect, useRef, useState} from 'react';

const App = () => {
  const passwordRef = useRef ();

  const [length, setLength] = useState (6);
  const [password, setPassword] = useState ('');
  const [numberAllowed, setNumberAllowed] = useState (false);
  const [characterAllowed, setCharacterAllowed] = useState (false);

  const passwordGenerator = useCallback (
    () => {
      let pass = '';
      let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

      if (numberAllowed) str += '0123456789';
      if (characterAllowed) str += '!@#$%^&*()_++{}~[]';

      for (let i = 1; i <= length; i++) {
        let char = Math.floor (Math.random () * str.length + 1);
        pass += str.charAt (char);
      }
      setPassword (pass);
    },
    [length, numberAllowed, characterAllowed, setPassword]
  );

  const copyPassword = useCallback (
    () => {
      passwordRef.current.select ();
      passwordRef.current.setSelectionRange (0, 15);
      window.navigator.clipboard.writeText (password);
    },
    [password]
  );

  useEffect (
    () => {
      passwordGenerator ();
    },
    [length, numberAllowed, characterAllowed, passwordGenerator]
  );

  return (
    <div className="bg-black w-full h-screen  text-white flex justify-center items-center flex-col ">
      <div>
        <h1 className="text-2xl tracking-wider">REACT PASSWORD GENERATOR</h1>
        <div className="input-field  bg-white my-4 flex">
          <input
            type="text"
            name="password"
            className="py-3  text-black px-7 w-full"
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className="px-6 text-white bg-blue-600 hover:bg-blue-500 font-bold tracking-widest"
          >
            COPY
          </button>
        </div>
        <div className="flex gap-3">
          <input
            type="range"
            min={6}
            max={30}
            className="text-white"
            value={length}
            onChange={e => setLength (e.target.value)}
          />
          Length :
          {length}

          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => setNumberAllowed (prev => !prev)}
          />
          <span>Numbers</span>

          <input
            type="checkbox"
            defaultChecked={characterAllowed}
            onChange={() => setCharacterAllowed (prev => !prev)}
          />
          <span>Characters</span>
        </div>
        <div />
      </div>
    </div>
  );
};

export default App;
