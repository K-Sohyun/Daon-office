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
      <div className={styles.dashboardGrid}>
        <div className={styles.chartBar}>Bar Chart</div>
        <div className={styles.map}>Map</div>
        <div className={styles.table}>Table</div>
        <div className={styles.chartPie}>Chart Pie</div>
        <div className={styles.totalCard}>Total Customers</div>
        <div className={styles.activeCard}>Active Customers</div>
      </div>
    </div>
  );
}
