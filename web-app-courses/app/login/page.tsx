"use client";

import { signIn } from "next-auth/react";

const LoginPage = () => {
  const handleLogin = () => {
    signIn("google"); // Ini akan menggunakan provider Google
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-6 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <button
          onClick={handleLogin}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
