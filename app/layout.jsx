import "./globals.css";

export const metadata = {
  title: "InfraKnit",
  description: "We make tech accessible",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
