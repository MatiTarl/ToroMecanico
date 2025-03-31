import "./globals.css";

export const metadata = {
  title: "Juegos Inflables",
  description: "Fábrica de juegos inflables y mecánicos.",
  openGraph: {
    image: [
      {
        url: "https://texasbull.vercel.app/favicon.ico",
        alt: "Juegos Inflables"
      }
    ]
  }
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
