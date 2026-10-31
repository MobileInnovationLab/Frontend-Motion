// app/layout.jsx
import NextTopLoader from "nextjs-toploader";
import NavbarClientWrapper from "@/shared/components/NavbarClientWrapper"; 
import { ThemeProvider } from "@/shared/context/ThemeContext";
import "@/styles/globals.scss";
import "react-multi-carousel/lib/styles.css";
import "@/styles/tailwind.scss";

export const metadata = {
  title: "Mobile Innovation Laboratory",
  description: "Mobile Innovation Laboratory",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        {/* Anti-FOUC (Flash of Unstyled Content) Script */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var storedTheme = localStorage.getItem('theme');
                  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
                  var isDark = storedTheme ? storedTheme === 'dark' : prefersDark;
                  if (isDark) {
                    document.documentElement.classList.add('dark');
                    document.documentElement.setAttribute('data-theme', 'dark');
                    document.documentElement.style.colorScheme = 'dark';
                  } else {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.setAttribute('data-theme', 'light');
                    document.documentElement.style.colorScheme = 'light';
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
        <link rel="preconnect" href="https://admin.motionlaboratory.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://admin.motionlaboratory.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Rubik:wght@400;600;700&display=swap"
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
        <ThemeProvider>
          <NextTopLoader color="#EF4444" showSpinners={false} />
          {/* Navbar Client Wrapper akan menentukan sendiri apakah dia perlu tampil (misal disembunyikan di auth route) */}
          <NavbarClientWrapper />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}