import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between co items-center px-28">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold uppercase">Shopsy</h2>
            <p className="text-gray-400">Providing quality products since 2024</p>
          </div>
        <div className="mt-4 text-center text-gray-400">
          <p>&copy; 2024 Your Brand Name- Shopsy. All rights reserved. | Developed by Md Arhad Alam</p>
        </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
