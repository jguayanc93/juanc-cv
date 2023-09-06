import '../estilo.css';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <head>
        <script src="https://kit.fontawesome.com/e0639ee673.js" crossOrigin='anonymous'></script>
        </head>
        <body>{children}</body>
      </html>
    )
  }