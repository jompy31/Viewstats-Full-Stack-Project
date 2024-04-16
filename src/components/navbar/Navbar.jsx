import Link from "next/link";
import Links from "./links/Links";
import styles from "./navbar.module.css";
import { auth } from "@/lib/auth";
import Image from "next/image"; // Importar el componente Image de Next.js
import logo from "../../../public/interview.png";

const Navbar = async () => {
  const session = await auth();

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.logo}>
        {/* Coloca la imagen dentro del enlace */}
        <div>
          {/* <p>Logo1</p> */}
          <Image src={logo} alt="Logo" width={180} height={100} />
        </div>
      </Link>
      <div>
        <Links session={session} />
      </div>
    </div>
  );
};

export default Navbar;
