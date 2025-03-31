import "./globals.css";
import { roboto, anton, lato, alfaSlabOne } from "./fonts/fonts";

export const metadata = {
  title: "Juegos Inflables",
  description: "Fábrica de juegos inflables y mecánicos."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
