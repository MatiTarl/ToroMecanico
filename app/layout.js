import "./globals.css";
import { roboto, anton, lato, alfaSlabOne } from "./fonts/fonts";

export const metadata = {
  title: "",
  description: ""
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        {children}
      </body>
    </html>
  );
}
