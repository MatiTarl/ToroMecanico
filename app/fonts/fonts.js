import localFont from "next/font/local";

export const roboto = localFont({
  src: [
    { path: "./Roboto/Roboto-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Roboto/Roboto-Light.ttf", weight: "300", style: "normal" },
    { path: "./Roboto/Roboto-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Roboto/Roboto-Medium.ttf", weight: "500", style: "normal" },
    { path: "./Roboto/Roboto-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Roboto/Roboto-Black.ttf", weight: "900", style: "normal" },
    { path: "./Roboto/Roboto-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./Roboto/Roboto-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Roboto/Roboto-Italic.ttf", weight: "400", style: "italic" },
  ],
  variable: "--font-roboto",
});

export const lato = localFont({
  src: [
    { path: "./Lato/Lato-Thin.ttf", weight: "100", style: "normal" },
    { path: "./Lato/Lato-Light.ttf", weight: "300", style: "normal" },
    { path: "./Lato/Lato-Regular.ttf", weight: "400", style: "normal" },
    { path: "./Lato/Lato-Bold.ttf", weight: "700", style: "normal" },
    { path: "./Lato/Lato-Black.ttf", weight: "900", style: "normal" },
    { path: "./Lato/Lato-ThinItalic.ttf", weight: "100", style: "italic" },
    { path: "./Lato/Lato-LightItalic.ttf", weight: "300", style: "italic" },
    { path: "./Lato/Lato-Italic.ttf", weight: "400", style: "italic" },
    { path: "./Lato/Lato-BoldItalic.ttf", weight: "700", style: "italic" },
    { path: "./Lato/Lato-BlackItalic.ttf", weight: "900", style: "italic" },
  ],
  variable: "--font-lato",
});

export const anton = localFont({
    src: "./Anton-Regular.ttf",
    variable: "--font-geist-anton",
    weight: "400"
  })