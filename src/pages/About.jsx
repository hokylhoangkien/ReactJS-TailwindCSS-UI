export default function About({ goLogin }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-4">About Us</h2>
      <p className="text-white/70 mb-6 text-sm leading-relaxed">
        We are passionate creators who believe in simplicity and elegance.
        <br />
        Our mission is to craft meaningful digital experiences that inspire and
        connect people.
      </p>
      <button
        onClick={goLogin}
        className="mt-4 px-6 py-2 rounded-full bg-sky-400 hover:bg-sky-500 transition-all text-sm font-semibold"
      >
        Back to Home
      </button>
    </div>
  );
}
