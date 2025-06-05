import styles from "./DataTable.module.scss";

interface RowData {
  name: string;
  age: number;
  email: string;
  date: string;
  status: string;
}

interface DataTableProps {
  data: RowData[];
}

export default function DataTable({ data }: DataTableProps) {
  return (
    <div className={styles.tableBox}>
      <table className={styles.table}>
        <colgroup>
          <col width={"20%"} />
          <col width={"10%"} />
          <col width={"30%"} />
          <col width={"20%"} />
          <col width={"20%"} />
        </colgroup>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.email}</td>
              <td>{item.date}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
