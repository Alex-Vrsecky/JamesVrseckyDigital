import ServiceGrid from "components/serviceGrid";
import Logo from "../public/Logo.png";
import Image from "next/image";
import Footer from "components/footer";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center p-5 sm:p-20">
      <Image src={Logo} alt="Logo" width={200} height={100} />
      <h1 className="text-black font-bold pb-5 sm:pb-16 pt-5 text-center">
        Software and web development solutions for small businesses.
      </h1>
      <ServiceGrid />
      <Footer />
    </div>
  );
}
