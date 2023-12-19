const Footer = () => {
  return (
    <>
      <div className="flex justify-end fixed bottom-10 w-5/6 gap-2">
        <p className="text-sm sm:text-md md:text-lg font-normal text-[#5f5f5f]">
          Developed by:
        </p>
        <span className="text-sm sm:text-md md:text-lg font-normal text-[#999999] hover:text-[#F8F9FA] transition duration-300">
          <a href="https://jpdiaz.dev/">Juan Diaz</a>
        </span>
      </div>
    </>
  );
};

export default Footer;
