export default function Login({ switchMode, goForgot, goContact }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Welcome Back
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username or Email"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />

        <div className="flex justify-between text-sm text-white/70 items-center">
          <label className="flex items-center gap-2 cursor-pointer">
            <input type="checkbox" className="accent-sky-400" />
            Remember me
          </label>
          <button
            onClick={goForgot}
            type="button"
            className="hover:text-sky-300 transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="mt-3 bg-gradient-to-r from-sky-400 to-blue-500 py-2.5 rounded-md font-medium hover:scale-[1.02] transition-transform shadow-sm"
        >
          Login
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-white/75">
        Don’t have an account?{" "}
        <button
          onClick={switchMode}
          className="underline text-sky-300 hover:text-sky-200 transition-colors"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
}
