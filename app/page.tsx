import ServiceGrid from "components/serviceGrid";

import Image from "next/image";
import Footer from "components/footer";
import Link from "next/link";
import Header from "components/header";

export default function Page() {
  return (
    <div className="flex flex-col min-h-screen items-center p-5 sm:p-20">
      <Header />
      <ServiceGrid />
      <Footer />
    </div>
  );
}
