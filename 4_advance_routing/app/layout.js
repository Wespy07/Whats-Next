import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Advance Routing in NextJS</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
