export const metadata = {
  title: "Get Missin™",
  description: "Faith-driven streetwear. No turning back.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ background: "#000", color: "#fff", margin: 0 }}>
        <header style={{ padding: 20 }}>Get Missin™</header>
        {children}
      </body>
    </html>
  );
}
