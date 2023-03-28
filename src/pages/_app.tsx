import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import localFont from 'next/font/local';

const pretendardFont = localFont({
  src: './PretendardVariable.woff2',
  variable: '--font-pretendard',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${pretendardFont.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
