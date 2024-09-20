import { Link } from "react-router-dom"; // Import Link from react-router-dom

export const Footer = () => {
  return (
    <footer id="footer">
      {/* Footer section with links and social media */}
      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8 bg-white rounded-lg">
        <div className="col-span-full xl:col-span-2">
          <Link
            to="/"
            className="font-bold text-xl flex"
          >
            Wolf 🐺
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US 🌐</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              LinkedIn 💼
            </a>
          </div>

          {/* <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Twitter 🐦
            </a>
          </div> */}

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Facebook 👥
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Platforms 📱</h3>
          {/* <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Web 🌐
            </a>
          </div> */}

          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              WhatsApp 💬
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About ℹ️</h3>
          <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Features ✨
            </a>
          </div>

          {/* <div>
            <a
              rel="noreferrer noopener"
              href="#"
              className="opacity-60 hover:opacity-100"
            >
              Pricing 💰
            </a>
          </div> */}

          <div>
            <Link
              to="/faq"
              className="opacity-60 hover:opacity-100"
            >
              FAQ ❓
            </Link>
          </div>

          {/* Link to Terms of Service page */}
          <div>
            <Link
              to="/terms-of-service"
              className="opacity-60 hover:opacity-100"
            >
              Terms of Service 📜
            </Link>
          </div>

          {/* Link to Privacy Policy page */}
          <div>
            <Link
              to="/privacy-policy"
              className="opacity-60 hover:opacity-100"
            >
              Privacy Policy 🔒
            </Link>
          </div>
        </div>
      </section>
    </footer>
  );
};
