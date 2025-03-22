import { useLocalStorage } from "./useLocalStorage";

const UseuseLocalStorHook = () => {
  const [name, setName] = useLocalStorage("name", "");

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Name in local storage: {name}</p>
    </div>
  );
};

export default UseuseLocalStorHook;
