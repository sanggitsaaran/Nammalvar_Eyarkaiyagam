import { resourcesLinks, productHighlightsLinks, communityLinks } from "../constants"
const Footer = () => {
  return (
    <footer id="footer" className="mt-20 border-t py-10 border-neutral-700 px-4">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
            <div>
                <h3 className="text-sm sm:text-base font-semibold mb-4">Resources</h3>
                <ul className="space-y-2">
                    {resourcesLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-xs sm:text-sm text-neutral-300 hover:text-white transition" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-sm sm:text-base font-semibold mb-4">Platform</h3>
                <ul className="space-y-2">
                    {productHighlightsLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-xs sm:text-sm text-neutral-300 hover:text-white transition" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="text-sm sm:text-base font-semibold mb-4">Community</h3>
                <ul className="space-y-2">
                    {communityLinks.map((link, index) => (
                        <li key={index}>
                            <a className="text-xs sm:text-sm text-neutral-300 hover:text-white transition" href={link.href}>{link.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-2 lg:col-span-1">
                <h3 className="text-sm sm:text-base font-semibold mb-4">Visit or Call Us</h3>
                <p className="text-xs sm:text-sm text-neutral-300 mb-1">Nammalvar Eyarkaiyagam</p>
                <p className="text-xs sm:text-sm text-neutral-300 mb-1">270, Ranga Konar St, Kattoor Main</p>
                <p className="text-xs sm:text-sm text-neutral-300 mb-1">Kattoor, Ram Nagar, Coimbatore</p>
                <p className="text-xs sm:text-sm text-neutral-300 mb-1">Tamil Nadu, 641009</p>
                <p className="text-xs sm:text-sm text-neutral-300 mt-2 mb-1">Phone: +91 78459 80054</p>
                <p className="text-xs sm:text-sm text-neutral-300">Email: nammalvarkovai@gmail.com</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer