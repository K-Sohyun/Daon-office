import { sidebarMenu } from "@/constants/sidebarMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "./HorizontalMenu.module.scss";

export default function HorizontalMenu() {
  return (
    <nav className={styles.horizontalMenu}>
      <ul className={styles.dep1Ul}>
        {sidebarMenu.map((item) => (
          <li key={item.path} className={styles.dep1Li}>
            <Link href={item.path} className={styles.dep1A}>
              {item.icon && (
                <Image src={item.icon} alt="" width={24} height={24} />
              )}
              <span>{item.label}</span>
            </Link>
            {item.subMenu && (
              <ul className={styles.dep2Ul}>
                {item.subMenu.map((sub) => (
                  <li key={sub.path} className={styles.dep2Li}>
                    <Link href={sub.path} className={styles.dep2A}>
                      {sub.icon && (
                        <Image src={sub.icon} alt="" width={24} height={24} />
                      )}
                      <span>{sub.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
