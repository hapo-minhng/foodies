import Link from "next/link";
import Logo from "@/assets/logo.png";

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <img src={Logo.src} alt="Foodies Logo" />
        Next Level Food
      </Link>

      <nav>
        <ul>
          <li>
            <Link href="/meals">Next Level Food</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
