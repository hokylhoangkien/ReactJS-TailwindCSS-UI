export default function ForgotPassword({ goLogin }) {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center text-white drop-shadow-lg">
        Forgot Password
      </h2>

      <p className="text-center text-white/70 text-sm mb-6">
        Enter your email address and we’ll send you a reset link.
      </p>

      <form className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email Address"
          className="p-3 rounded-lg bg-white/10 border border-white/20 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-pink-300 focus:bg-white/15 transition-all"
        />

        <button
          type="submit"
          className="mt-3 bg-gradient-to-r from-pink-400 to-rose-500 py-2.5 rounded-md font-medium hover:scale-[1.02] transition-transform shadow-sm"
        >
          Send Reset Link
        </button>
      </form>

      <p className="text-center mt-6 text-sm text-white/75">
        Remembered your password?{" "}
        <button
          onClick={goLogin}
          className="underline text-pink-300 hover:text-pink-200 transition-colors"
        >
          Back to Login
        </button>
      </p>
    </div>
  );
}
