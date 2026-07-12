import "./globals.css";

export const metadata = {
  title: "Adeyinka Giwa | Portfolio",
  description: "Software developer portfolio"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

