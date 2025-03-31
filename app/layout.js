import "./globals.css";

export const metadata = {
  title: "Juegos Inflables",
  description: "Fábrica de juegos inflables y mecánicos.",
  openGraph: {
    image: [
      {
        url: "https://texasbull.vercel.app/favicon.ico",
        width: 1200,
        height: 630,
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
