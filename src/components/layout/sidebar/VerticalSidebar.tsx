"use client";

import { sidebarMenu } from "@/constants/sidebarMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

export default function VerticalSidebar() {
  return (
    <aside className={styles.sidebar} style={{ width: "240px" }}>
      <h1 className={styles.logo}>
        <Link href="/">
          <Image
            src="/images/logo_basic.svg"
            alt="Daon"
            width={140}
            height={50}
          />
        </Link>
      </h1>
      <nav className={styles.verticalMenu}>
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
    </aside>
  );
}
