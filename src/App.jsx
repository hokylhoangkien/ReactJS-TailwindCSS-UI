import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Background from "./components/Background";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ForgotPassword from "./pages/ForgotPassword";
import Contact from "./pages/Contact";
import About from "./pages/About";
import logo from "./assets/img/logo.jpg";

export default function App() {
  const [page, setPage] = useState("login");

  return (
    <div className="relative min-h-screen w-full overflow-hidden text-white font-sans flex flex-col">
      {/* Background */}
      <Background />

      {/* Navbar */}
      <nav className="absolute top-0 left-0 right-0 flex flex-wrap items-center justify-between px-4 md:px-12 py-3 bg-black/15 backdrop-blur-md border-b border-white/10 z-30">
        <div className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 rounded-full border border-white/30"
          />
          <h1 className="text-lg font-semibold tracking-wide">HoKyL</h1>
        </div>
        <div className="flex gap-4 md:gap-8 text-sm font-medium mt-2 md:mt-0">
          <button
            onClick={() => setPage("login")}
            className={`transition-colors hover:text-sky-300 ${
              page === "login" && "text-sky-400"
            }`}
          >
            Home
          </button>
          <button
            onClick={() => setPage("about")}
            className={`transition-colors hover:text-sky-300 ${
              page === "about" && "text-sky-400"
            }`}
          >
            About Us
          </button>
          <button
            onClick={() => setPage("contact")}
            className={`transition-colors hover:text-sky-300 ${
              page === "contact" && "text-sky-400"
            }`}
          >
            Contact
          </button>
        </div>
      </nav>

      {/* Main content */}
      <div className="flex flex-col-reverse md:flex-row flex-1 items-center justify-between px-6 md:px-24 z-10 mt-24 md:mt-0 gap-8 md:gap-0">
        {/* Left text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 40 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="max-w-full md:max-w-xl select-none text-center md:text-left"
          >
            {page === "login" && (
              <>
                <p className="tracking-[0.3em] text-xs text-white/80 mb-3 uppercase">
                  Welcome Back
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  <span className="block">Creative</span>
                  <span className="block text-white/90">Simplicity</span>
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Tinh giản, hiệu quả và sáng tạo — hãy đăng nhập để tiếp tục
                  hành trình của bạn.
                </p>
              </>
            )}
            {page === "register" && (
              <>
                <p className="tracking-[0.3em] text-xs text-white/80 mb-3 uppercase">
                  Join the Team
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  <span className="block">Shape</span>
                  <span className="block text-white/90">The Future</span>
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Đăng ký ngay để cùng chúng tôi tạo nên điều khác biệt.
                </p>
              </>
            )}
            {page === "forgot" && (
              <>
                <p className="tracking-[0.3em] text-xs text-white/80 mb-3 uppercase">
                  Forgot Password
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  <span className="block">Reset</span>
                  <span className="block text-white/90">Your Access</span>
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Đừng lo! Hãy nhập email của bạn và lấy lại quyền truy cập dễ
                  dàng.
                </p>
              </>
            )}
            {page === "contact" && (
              <>
                <p className="tracking-[0.3em] text-xs text-white/80 mb-3 uppercase">
                  Get in Touch
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  <span className="block">Let's</span>
                  <span className="block text-white/90">Connect</span>
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Bạn có ý tưởng? Liên hệ với chúng tôi để cùng biến nó thành
                  hiện thực.
                </p>
              </>
            )}
            {page === "about" && (
              <>
                <p className="tracking-[0.3em] text-xs text-white/80 mb-3 uppercase">
                  Who We Are
                </p>
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-3">
                  <span className="block">Beyond</span>
                  <span className="block text-white/90">Imagination</span>
                </h1>
                <p className="text-white/70 text-sm md:text-base max-w-md mx-auto md:mx-0">
                  Chúng tôi là đội ngũ trẻ đầy nhiệt huyết, hướng đến sự sáng
                  tạo và khác biệt.
                </p>
              </>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Right card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white/10 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20 p-6 sm:p-10 w-full sm:w-[400px]"
          >
            {page === "login" && (
              <Login
                switchMode={() => setPage("register")}
                goForgot={() => setPage("forgot")}
                goContact={() => setPage("contact")}
              />
            )}
            {page === "register" && (
              <Register
                switchMode={() => setPage("login")}
                goContact={() => setPage("contact")}
              />
            )}
            {page === "forgot" && (
              <ForgotPassword goLogin={() => setPage("login")} />
            )}
            {page === "contact" && <Contact goLogin={() => setPage("login")} />}
            {page === "about" && <About goLogin={() => setPage("login")} />}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
