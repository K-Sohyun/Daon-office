"use client";

import { useState } from "react";
import { FiSettings } from "react-icons/fi";
import SettingsPanel from "./SettingsPanel";
import styles from "./SettingButton.module.scss";

export default function SettingButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button className={styles.settingButton} onClick={() => setOpen(!open)}>
        <FiSettings size={24} />
      </button>
      {open && <SettingsPanel onClose={() => setOpen(false)} />}
    </>
  );
}
