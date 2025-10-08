export default function Contact({ goLogin }) {
  return (
    <div className="text-center">
      <h2 className="text-3xl font-bold mb-6 text-white drop-shadow-lg">
        Contact Us
      </h2>
      <p className="text-white/70 mb-6">
        Have a question or need help? Reach out to us:
      </p>

      <div className="flex flex-col gap-4">
        <a
          href="https://www.facebook.com/phan.hoang.kien.943711"
          target="_blank"
          className="bg-white/10 border border-white/20 py-3 rounded-lg hover:bg-white/15 transition-all"
        >
          💬 Facebook Page
        </a>
        <a
          href="mailto:phanhoangkien230405@gmail.com"
          className="bg-white/10 border border-white/20 py-3 rounded-lg hover:bg-white/15 transition-all"
        >
          ✉️ phanhoangkien230405@gmail.com
        </a>
      </div>

      <button
        onClick={goLogin}
        className="mt-6 underline text-white/70 hover:text-sky-300 transition-colors text-sm"
      >
        Back to Login
      </button>
    </div>
  );
}
