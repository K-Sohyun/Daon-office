"use client";

import { sidebarMenu } from "@/constants/sidebarMenu";
import Link from "next/link";
import Image from "next/image";
import styles from "./Sidebar.module.scss";

export default function TwoColumnSidebar() {
  return (
    <aside className={styles.sidebar} style={{ width: "300px", padding: "0" }}>
      <div className={styles.TwoColumnMenu}>
        <div className={styles.colLeft}>
          <strong className={styles.logo}>
            <Image
              src="/images/logo_small.svg"
              alt="Daon"
              width={30}
              height={30}
            />
          </strong>
          <nav className={styles.colLeftMenu}>
            <ul className={styles.dep1Ul}>
              {sidebarMenu.map((item) => (
                <li key={item.path} className={styles.dep1Li}>
                  <Link href={item.path} className={styles.dep1A}>
                    {item.icon && (
                      <Image
                        src={item.icon}
                        alt={item.label}
                        title={item.label}
                        width={24}
                        height={24}
                      />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className={styles.colRight}>
          <h1 className={styles.logo}>
            <Link href="/">
              <Image
                src="/images/logo_basic.svg"
                alt="Daon"
                width={80}
                height={30}
              />
            </Link>
          </h1>
          <nav className={styles.colRightMenu}>
            <ul className={styles.dep1Ul}>
              {sidebarMenu.map((item) => (
                <li key={item.path} className={styles.dep1Li}>
                  <Link href={item.path} className={styles.dep1A}>
                    <span>{item.label}</span>
                  </Link>
                  {item.subMenu && (
                    <ul className={styles.dep2Ul}>
                      {item.subMenu.map((sub) => (
                        <li key={sub.path} className={styles.dep2Li}>
                          <Link href={sub.path} className={styles.dep2A}>
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
        </div>
      </div>
    </aside>
  );
}
