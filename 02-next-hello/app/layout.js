import "./globals.css";

export const metadata = {
  title: "Hello, World! · Copas deploy test",
  description: "A minimal Next.js and Turbopack deployment check.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
