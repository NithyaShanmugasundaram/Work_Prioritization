import { Rubik } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
//requires to implement the font-awesome
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";

//Global font
const rubik = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={rubik.className}>
        <Header />       
          <Container fluid>{children} </Container>     
        <Footer />
      </body>
    </html>
  );
}
