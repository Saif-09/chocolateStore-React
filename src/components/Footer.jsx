import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-800 p-8">
            <div className="container mx-auto flex flex-col sm:flex-row justify-between items-center">
                <div className="text-2xl font-semibold mb-4 sm:mb-0">Chocolate Store</div>
                <div className="text-sm">
                    <ul className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-6">
                        <li><a href="/about">About Us</a></li>
                        <li><a href="/contact">Contact Us</a></li>
                        <li><a href="/faq">FAQ</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
