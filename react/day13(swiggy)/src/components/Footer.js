export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10 px-5 mt-10">
            <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {/* Section 1: Company Info */}
                <div>
                    <h3 className="text-lg font-semibold">About Us</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li>&copy; 2025 Swiggy Limited</li>
                        <li><a href="https://www.swiggy.com/about" className="hover:text-white">Swiggy Corporate</a></li>
                        <li><a href="https://careers.swiggy.com" className="hover:text-white">Careers</a></li>
                        <li><a href="https://www.swiggy.com/team" className="hover:text-white">Team</a></li>
                    </ul>
                </div>

                {/* Section 2: Our Services */}
                <div>
                    <h3 className="text-lg font-semibold">Our Services</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="https://www.swiggy.com/swiggy-super" target="_blank" className="hover:text-white">Swiggy One</a></li>
                        <li><a href="https://www.swiggy.com/instamart" target="_blank" className="hover:text-white">Swiggy Instamart</a></li>
                        <li><a href="https://www.dineout.co.in/" target="_blank" className="hover:text-white">Swiggy Dineout</a></li>
                        <li><a href="https://www.swiggy.com/swiggy-genie" target="_blank" className="hover:text-white">Swiggy Genie</a></li>
                        <li><a href="https://mini.store/" target="_blank" className="hover:text-white">Minis</a></li>
                    </ul>
                </div>

                {/* Section 3: Contact */}
                <div>
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="https://www.swiggy.com/support" className="hover:text-white">Help & Support</a></li>
                        <li><a href="https://partner-with-us.swiggy.com/onboard#/swiggy" target="_blank" className="hover:text-white">Partner with Us</a></li>
                        <li><a href="https://ride.swiggy.com" target="_blank" className="hover:text-white">Ride with Us</a></li>
                    </ul>
                </div>

                {/* Section 4: Legal */}
                <div>
                    <h3 className="text-lg font-semibold">Legal</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="https://www.swiggy.com/terms-and-conditions" target="_blank" className="hover:text-white">Terms & Conditions</a></li>
                        <li><a href="https://www.swiggy.com/cookie-policy" target="_blank" className="hover:text-white">Cookie Policy</a></li>
                        <li><a href="https://www.swiggy.com/privacy-policy" target="_blank" className="hover:text-white">Privacy Policy</a></li>
                    </ul>
                </div>

                {/* Section 5: Available Cities */}
                <div>
                    <h3 className="text-lg font-semibold">Available in:</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="/city/bangalore" className="hover:text-white">Bangalore</a></li>
                        <li><a href="/city/gurgaon" className="hover:text-white">Gurgaon</a></li>
                        <li><a href="/city/hyderabad" className="hover:text-white">Hyderabad</a></li>
                        <li><a href="/city/delhi" className="hover:text-white">Delhi</a></li>
                        <li><a href="/city/mumbai" className="hover:text-white">Mumbai</a></li>
                        <li><a href="/city/pune" className="hover:text-white">Pune</a></li>
                        <li>
                            <button className="mt-2 flex items-center text-gray-400 hover:text-white">
                                685 Cities
                                <svg className="ml-2" width="12" height="12">
                                    <use href="/core/sprite-mpK4HJSO.svg#chevronDown12"></use>
                                </svg>
                            </button>
                        </li>
                    </ul>
                </div>

                {/* Section 6: Explore */}
                <div>
                    <h3 className="text-lg font-semibold">Explore</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="https://www.swiggy.com/life-at-swiggy" className="hover:text-white">Life at Swiggy</a></li>
                        <li><a href="https://www.swiggy.com/explore" className="hover:text-white">Explore with Swiggy</a></li>
                        <li><a href="https://www.swiggy.com/news" className="hover:text-white">Swiggy News</a></li>
                        <li><a href="https://www.swiggy.com/snackables" className="hover:text-white">Snackables</a></li>
                    </ul>
                </div>

                {/* Section 7: Social Links */}
                <div>
                    <h3 className="text-lg font-semibold">Follow Us</h3>
                    <ul className="mt-2 space-y-1 text-sm text-gray-400">
                        <li><a href="https://www.linkedin.com/company/swiggy" className="hover:text-white">LinkedIn</a></li>
                        <li><a href="https://www.instagram.com/swiggyindia" className="hover:text-white">Instagram</a></li>
                        <li><a href="https://www.facebook.com/swiggy.in" className="hover:text-white">Facebook</a></li>
                        <li><a href="https://www.pinterest.com/swiggyindia" className="hover:text-white">Pinterest</a></li>
                        <li><a href="https://twitter.com/swiggy_in" className="hover:text-white">Twitter</a></li>
                    </ul>
                </div>
            </div>

            <div className="mt-6 text-center text-gray-500 text-sm">
                &copy; 2025 Swiggy Limited Company. All rights reserved.
            </div>
        </footer>
    );
}
