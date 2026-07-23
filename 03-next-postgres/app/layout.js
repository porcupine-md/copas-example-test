import "./globals.css";

export const metadata = {
  title: "Hello, World! · Copas PostgreSQL test",
  description: "A Next.js and PostgreSQL deployment check.",
};

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
