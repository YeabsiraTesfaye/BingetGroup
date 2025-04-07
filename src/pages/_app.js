import ContactUs from "@/components/contactUs";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import "@/styles/globals.css";
import { LoadScript } from "@react-google-maps/api";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div style={{ overflowX: 'hidden' }}>
        <LoadScript googleMapsApiKey="AIzaSyDEyj7Xmxl01jsbbb2-MBFj-W5hHRmAKyA">
          <Component {...pageProps} />
        </LoadScript>
        <ContactUs />
        <Footer />
      </div>
    </>

  )

}
