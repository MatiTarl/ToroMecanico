import "../globals.css";
import { roboto, anton, lato } from "../fonts/fonts";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${roboto.variable} ${lato.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
