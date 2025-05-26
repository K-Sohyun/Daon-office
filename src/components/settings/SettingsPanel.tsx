"use client";

import Image from "next/image";
import { useLayout } from "@/contexts/LayoutContext";
import styles from "./SettingsPanel.module.scss";

interface Props {
  onClose: () => void;
}

export default function SettingsPanel({ onClose }: Props) {
  const { setLayoutMode } = useLayout();

  return (
    <div className={styles.settingsPanel}>
      <div className={styles.topBox}>
        <h2 className={styles.title}>Theme Customizer</h2>
        <button onClick={onClose} className={styles.closeBtn}>
          <Image
            src="/images/icon_close.svg"
            alt="닫기"
            width={24}
            height={24}
          />
        </button>
      </div>
      <div className={styles.btmBox}>
        <h3 className={styles.title2}>LAYOUT</h3>
        <ul className={styles.typeList}>
          <li>
            <button onClick={() => setLayoutMode("vertical")}>Vertical</button>
          </li>
          <li>
            <button onClick={() => setLayoutMode("horizontal")}>
              Horizontal
            </button>
          </li>
          <li>
            <button onClick={() => setLayoutMode("two-column")}>
              Two Column
            </button>
          </li>
          <li>
            <button onClick={() => setLayoutMode("icons")}>Icons</button>
          </li>
        </ul>
      </div>
    </div>
  );
}
