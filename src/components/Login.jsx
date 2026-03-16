import { useState } from "react";

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (isRegister) {
      // Register
      const userData = { email, password };
      localStorage.setItem("user", JSON.stringify(userData));
      alert("Registered Successfully! Now Login.");
      setIsRegister(false);
    } else {
      // Login
      if (
        storedUser &&
        email === storedUser.email &&
        password === storedUser.password
      ) {
        localStorage.setItem("isLoggedIn", "true");
        onLogin();
      } else {
        alert("Invalid Credentials");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 background: linear-gradient(to right, rgb(15, 23, 42), rgb(88, 28, 135), rgb(15, 23, 42));">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-md p-8 rounded-xl shadow-lg"
      >
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
          {isRegister ? "Register" : "Login"}
        </h2>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 border mb-4 rounded-md"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border mb-6 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-md font-semibold transition">
          {isRegister ? "Register" : "Login"}
        </button>

        <p
          onClick={() => setIsRegister(!isRegister)}
          className="text-center text-blue-600 mt-4 cursor-pointer"
        >
          {isRegister
            ? "Already have an account? Login"
            : "Don't have an account? Register"}
        </p>
      </form>
    </div>
  );
};

export default Login;