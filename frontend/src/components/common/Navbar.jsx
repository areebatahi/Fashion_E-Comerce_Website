import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  { name: "Profile", path: "/profile" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const cartCount = useSelector((s) =>
    s.cart.items.reduce((a, b) => a + b.qty, 0)
  );
  const wishlistCount = 0;
  const dark = useSelector((s) => s.theme.dark);
  const dispatch = useDispatch();

  return (
    <header className="bg-gradient-to-l from-white to-amber-50 shadow sticky top-0 z-30">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between h-16 items-center">
                {/* Logo: Changed to gold color */}
                <Link to="/" className="text-2xl font-bold text-amber-600">
                  ZaraFashion
                </Link>

                {/* Desktop Nav Links */}
                <nav className="hidden sm:flex space-x-8">
                  {navLinks.map((link) => (
                    <NavLink
                      key={link.name}
                      to={link.path}
                      className={({ isActive }) =>
                        isActive
                          ? "text-amber-600 font-medium border-b-2 border-amber-500 pb-1"
                          : "text-gray-600 hover:text-amber-600"
                      }
                    >
                      {link.name}
                    </NavLink>
                  ))}
                </nav>

                {/* Right Icons */}
                <div className="flex items-center space-x-2">
                  {/* Wishlist: Gold icon and badge */}
                  <Link to="/wishlist" className="relative p-2">
                    <FaHeart className="text-lg text-gray-700 hover:text-amber-600" />
                    {wishlistCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full px-1.5">
                        {wishlistCount}
                      </span>
                    )}
                  </Link>

                  {/* Cart: Gold badge */}
                  <Link to="/cart" className="relative p-2">
                    <FaShoppingCart className="text-lg text-gray-700 hover:text-amber-600" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 bg-amber-500 text-white text-xs rounded-full px-1.5">
                        {cartCount}
                      </span>
                    )}
                  </Link>

                  {/* Profile Menu */}
                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-500">
                      <img
                        alt="User Avatar"
                        src=".././public/images/profile_image.png"
                        className="size-8 rounded-full bg-gray-800 outline -outline-offset-1 outline-white/10"
                      />
                    </MenuButton>
                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline outline-black/5 transition">
                      <MenuItem>
                        <Link
                          to="/profile"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        >
                          Your Profile
                        </Link>
                      </MenuItem>
                      <MenuItem>
                        <Link
                          to="/logout"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-amber-50 hover:text-amber-600"
                        >
                          Log Out
                        </Link>
                      </MenuItem>
                    </MenuItems>
                  </Menu>

                  {/* Mobile Menu Button */}
                  <div className="sm:hidden">
                    <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-amber-50 focus:outline-none">
                      {open ? (
                        <svg
                          className="block h-6 w-6 text-amber-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="block h-6 w-6 text-amber-600"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                          />
                        </svg>
                      )}
                    </DisclosureButton>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Panel */}
            <DisclosurePanel className="sm:hidden bg-white border-t border-gray-200">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      isActive
                        ? "block text-amber-600 font-medium px-3 py-2 rounded-md bg-amber-50"
                        : "block text-gray-600 hover:text-amber-600 px-3 py-2 rounded-md"
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </DisclosurePanel>
          </>
        )}
      </Disclosure>
    </header>
  );
};

export default Navbar;
