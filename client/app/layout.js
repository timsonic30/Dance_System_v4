import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5"
          rel="stylesheet"
          type="text/css"
        />
        <script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>
        <link
          href="https://cdn.jsdelivr.net/npm/daisyui@5.0.0/themes.css"
          rel="stylesheet"
          type="text/css"
        />
      </head>
      <body>
        <div className="navbar bg-base-100 shadow-sm">
          <div className="flex-1">
            <a className="btn btn-ghost text-xl">Dance School</a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/#">Daily Schedule</Link>
              </li>
              <li>
                <Link href="/tutor">Tutor</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <details>
                  <summary>Account</summary>
                  <ul className="bg-base-100 rounded-t-none p-2">
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                    <li>
                      <Link href="/register">Registration</Link>
                    </li>
                  </ul>
                </details>
              </li>
            </ul>
          </div>
        </div>
        {children}
      </body>
    </html>
  );
}
