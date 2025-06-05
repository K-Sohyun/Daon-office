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
          <BarChart
            fixedMaxValue={100}
            stepSize={20}
            barGap={30}
            drawLine={true}
          />
        </div>
        <div className={styles.map}>
          <MapView />
        </div>
        <div className={styles.table}>
          <DataTable data={tableData} />
        </div>
        <div className={styles.chartPie}>Chart Pie</div>
        <div className={styles.totalCard}>Total</div>
        <div className={styles.activeCard}>Active</div>
      </div>
    </div>
  );
}
