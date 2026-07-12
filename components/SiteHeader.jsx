import Link from "next/link";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" }
];

export default function SiteHeader() {
  return (
    <header className="siteHeader">
      <nav className="navWrap" aria-label="Main">
        <span className="brand">Adeyinka Giwa</span>
        <ul className="navList">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

