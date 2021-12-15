import "tailwindcss/tailwind.css";
import "../styles/globals.css";
import "../styles/particle.css";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
