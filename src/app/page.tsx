import Sidebar from "@/components/layout/sidebar/Sidebar";
import Topbar from "@/components/layout/topbar/Topbar";
import SettingButton from "@/components/settings/SettingButton";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Topbar />
      <SettingButton />
    </div>
  );
}
