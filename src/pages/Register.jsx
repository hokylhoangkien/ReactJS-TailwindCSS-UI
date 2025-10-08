export default function Register({ switchMode }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Sign Up
      </h2>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />
        <input
          type="text"
          placeholder="Username"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-sky-300 focus:bg-white/15 transition-all"
        />

        <div className="flex flex-col gap-2 mt-2">
          <label className="flex items-center gap-2 text-white/80 text-sm">
            <input type="checkbox" className="accent-sky-400" />
            Remember me
          </label>
          <label className="flex items-center gap-2 text-white/80 text-sm">
            <input type="checkbox" className="accent-sky-400" />I agree to the{" "}
            <span className="text-sky-300 underline">Terms of Service</span>
          </label>
        </div>

        <button
          type="submit"
          className="mt-3 bg-gradient-to-r from-sky-400 to-blue-500 py-2.5 rounded-md font-medium hover:scale-[1.02] transition-transform shadow-sm"
        >
          Sign Up
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-white/75">
        Already have an account?{" "}
        <button
          onClick={switchMode}
          className="underline text-sky-300 hover:text-sky-200 transition-colors"
        >
          Log In
        </button>
      </p>
    </div>
  );
}
