import React from "react";

const MenuPrompt = () => {
  const isDesktop = /Mac|Windows/.test(navigator.userAgent);
  const linkUrl = isDesktop ? "/landingpage" : "https://wa.link/o688gi";

  return (
    <section className="">
      <div className="text-center mx-auto mt-5 mb-4">
        {isDesktop ? (
          <a href={linkUrl} className="button">
            Place An Order
          </a>
        ) : (
          <a href={linkUrl} className="button">
            Place An Order
          </a>
        )}
      </div>
    </section>
  );
};

export default MenuPrompt;
