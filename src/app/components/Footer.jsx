import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between items-center">
        <Image
          className="rounded-full border"
          src="/images/logo.jpg"
          width={50}
          height={50}
          alt="logo"
        />

        <p className="text-slate-600">All rights reserved@muhammad-masum.</p>
      </div>
    </footer>
  );
};

export default Footer;
