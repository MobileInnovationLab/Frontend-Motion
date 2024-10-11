import NextTopLoader from "nextjs-toploader";
import "@/core/styles/globals.scss";
import "react-multi-carousel/lib/styles.css";
import "@/core/styles/tailwind.scss";

export const metadata = {
  title: "Mobile Innovation Laboratory",
  description: "Mobile Innovation Laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&family=Rubik:wght@400;600;700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest"></link>

        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
        }); 
      `,
          }}
        />
      </head>
      <body>
        <NextTopLoader color="#FFFFFF" showSpinners={false} />
        {children}
      </body>
    </html>
  );
}
