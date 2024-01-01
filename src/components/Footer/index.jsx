import { MdKeyboardArrowDown } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#00093c] to-[#2d0b00] py-5 sm:py-10 md:py-20">
      <div className="max-w-7xl mx-auto text-white flex flex-col space-y-10 text-sm px-5 lg:px-0">
        <section className="flex justify-between">
          <h1 className="text-xl cursor-pointer">Briefism</h1>
          <a
            href="#"
            className="p-1 rounded-xl w-fit h-fit bg-slate-700 hover:bg-red-500 duration-200 hidden sm:block cursor-pointer"
          >
            <MdKeyboardArrowDown className="rotate-180 text-3xl" />
          </a>
        </section>
        <section className="space-y-2.5 md:space-y-0 md:space-x-32 block md:flex items-start">
          <div>
            <span>Quicklink</span>
            <ul className="text-slate-400 border-l md:border-l-0 border-l-slate-400 pl-3 md:pl-0 overflow-hidden duration-200 mt-1.5">
              <li
                // onClick={() => navigate("/about-us")}
                className="duration-200 cursor-pointer hover:text-white border-b border-b-transparent hover:border-b-red-400 w-fit"
              >
                About us
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <span>Contact us</span>
            <span className="text-slate-400 border-b border-b-transparent hover:border-b-red-400 w-fit duration-200 cursor-pointer hover:text-white text-sm mt-1.5">
              <a href="mailto: briefism@gmail.com">briefism@gmail.com</a>
            </span>
          </div>
        </section>
        <section className="text-slate-400 space-y-1 md:space-y-0 text-sm md:flex items-center md:divide-x">
          <p className="md:pr-3">© 2024 Briefism. All rights reserved</p>
          <p
            // onClick={() => navigate("/reserved-rights/terms-&-conditions")}
            className="border-b border-b-transparent hover:border-b-red-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3"
          >
            Terms of Use
          </p>
          <p
            // onClick={() => navigate("/reserved-rights/key-risks")}
            className="border-b border-b-transparent hover:border-b-red-500 duration-200 w-fit cursor-pointer hover:text-white md:px-3"
          >
            Key Risks
          </p>
          <p
            // onClick={() => navigate("/reserved-rights/privacy-policy")}
            className="border-b border-b-transparent hover:border-b-red-500 duration-200 w-fit cursor-pointer hover:text-white md:pl-3"
          >
            Privacy Policy
          </p>
        </section>
        <div className="h-px bg-slate-700"></div>
        <p className="text-slate-400 text-xs leading-normal">
          Briefism brings you the latest news with a commitment to clarity and
          brevity. Our platform is designed to keep you informed. Our
          user-friendly platform, encompassing the website, is your gateway to
          staying informed effortlessly. By accessing our content, you agree to
          abide by our Terms of Use, Key Risks and Privacy Policy. Stay updated,
          stay informed.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
