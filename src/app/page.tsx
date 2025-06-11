import Sidebar from "@/components/layout/sidebar/Sidebar";
import Topbar from "@/components/layout/topbar/Topbar";
import SettingButton from "@/components/settings/SettingButton";
import BarChart from "@/components/chart/barChart/BarChart";
import MapView from "@/components/chart/MapView";
import DataTable from "@/components/table/DataTable";
import styles from "./Home.module.scss";

// 테이블 샘플 데이터
const tableData = [
  {
    name: "홍길동",
    age: 30,
    email: "hong@example.com",
    date: "2025-05-30",
    status: "Active",
  },
  {
    name: "김소현",
    age: 27,
    email: "sohyun@example.com",
    date: "2025-05-29",
    status: "Inactive",
  },
  {
    name: "홍길동",
    age: 30,
    email: "hong@example.com",
    date: "2025-05-30",
    status: "Active",
  },
  {
    name: "김소현",
    age: 27,
    email: "sohyun@example.com",
    date: "2025-05-29",
    status: "Inactive",
  },
  {
    name: "홍길동",
    age: 30,
    email: "hong@example.com",
    date: "2025-05-30",
    status: "Active",
  },
];

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Topbar />
      <SettingButton />
      <div className={styles.dashboardGrid}>
        <div className={styles.chartBar}>
          <div className={styles.mainTitle}>
            <h2>Bar Chart Example</h2>
          </div>
          <BarChart
            fixedMaxValue={100}
            stepSize={20}
            barGap={30}
            drawLine={true}
          />
        </div>
        <div className={styles.map}>
          <div className={styles.mainTitle}>
            <h2>Map Example</h2>
          </div>
          <MapView />
        </div>
        <div className={styles.table}>
          <div className={styles.mainTitle}>
            <h2>Table Example</h2>
          </div>
          <DataTable data={tableData} />
        </div>
        <div className={styles.chartPie}>
          <div className={styles.mainTitle}>
            <h2>Pie Chart Example</h2>
          </div>
        </div>
        <div className={styles.totalCard}>
          <div className={styles.mainTitle}>
            <h2>Total Example</h2>
          </div>
        </div>
        <div className={styles.activeCard}>
          <div className={styles.mainTitle}>
            <h2>Active Example</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
