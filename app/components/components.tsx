import Image from "next/image";
import Link from "next/link";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, AwaitedReactNode } from "react";

function Header() {
  return (
    <header className="flex justify-between p-3 bg-back">
      <Image
        src="/images/menu.svg"
        width={24}
        height={24}
        alt="mobile menu navigation"
      />
      <Image
        src="/images/logo.svg"
        width={78.08}
        height={32}
        alt="mobile menu navigation"
      />
      <section className="flex justify-between w-30">
        <Image
          src="/images/search.svg"
          width={24}
          height={24}
          alt="mobile menu navigation"
        />
        <Image
          src="/images/shopping-bag.svg"
          width={24}
          height={24}
          alt="mobile menu navigation"
        />
      </section>
    </header>
  );
}
function Footer() {
  return (
    <footer>
      <section className="grid place-items-center">
        <section className="flex w-3/6 justify-between my-5">
          <Image
            src="/images/twitter.svg"
            width={24}
            height={24}
            alt="twitter logo"
          />
          <Image
            src="/images/instagram.svg"
            width={24}
            height={24}
            alt="instagram logo"
          />
          <Image
            src="/images/youtube.svg"
            width={24}
            height={24}
            alt="youtube logo"
          />
        </section>
        <Br />
        <section className="text-center my-5">
          <p>support@openui.design</p>
          <p>+60 825 876</p>
          <p>08:00 - 22:00 - Everyday</p>
        </section>
        <Br/>
        <nav className="w-5/6 flex justify-between my-5">
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/blog">Blog</Link>
        </nav>
      </section>

      <section className=" bg-foot text-xs w-6/6 grid place-items-center p-3">
        <p>Copyright© OpenUI All Rights Reserved.</p>
      </section>
    </footer>
  );
}

function Br() {
  return <Image src="/images/br.svg" width={124.96} height={9.25} alt="br" />;
}
function Heading() {
  return (
    <section className="mt-10 letter-2 p-4">
      <section className="grid place-items-center mb-8">
        <h2 className="uppercase ">Blog</h2>
        <Br />
      </section>
    </section>
  );
}
export { Header, Footer, Br, Heading };
