"use client";

import Image from "next/image";
import { useLayout } from "@/contexts/LayoutContext";
import HorizontalMenu from "./HorizontalMenu";
import styles from "./Topbar.module.scss";

export default function Topbar() {
  const { layoutMode } = useLayout();

  return (
    <header className={styles.header}>
      <div className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <button className={styles.menuToggle}>
            <Image
              src="/images/icon_hamburger.svg"
              alt="메뉴 열기"
              width={24}
              height={24}
            />
          </button>

          <div className={styles.searchBar}>
            <input type="text" placeholder="Search" />
            <button className={styles.searchButton}>
              <Image
                src="/images/icon_search.svg"
                alt="검색"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>

        <div className={styles.topbarRight}>
          <button className={styles.notification}>
            <Image
              src="/images/icon_alarm.svg"
              alt="새로운 알림"
              width={24}
              height={24}
            />
          </button>
          <button className={styles.UserMenu}>
            <Image
              src="/images/icon_user.svg"
              alt="마이페이지"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>

      {layoutMode === "horizontal" && <HorizontalMenu />}
    </header>
  );
}
