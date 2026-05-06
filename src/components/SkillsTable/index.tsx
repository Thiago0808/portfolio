import React, { useState, useMemo } from "react";
import "./style.css";

interface TechItem {
  name: string;
  type: string;
  time: string;
  timeOrder: number;
}

interface MySQLTableProps {
  data: TechItem[];
}

type SortColumn = "name" | "type" | "time";
type SortDirection = "ASC" | "DESC";

const MySQLTable: React.FC<MySQLTableProps> = ({ data }) => {
  const [sortColumn, setSortColumn] = useState<SortColumn>("time");
  const [sortDirection, setSortDirection] = useState<SortDirection>("DESC");

  const handleSort = (column: SortColumn) => {
    if (column === sortColumn) {
      setSortDirection((prev) => (prev === "ASC" ? "DESC" : "ASC"));
    } else {
      setSortColumn(column);
      setSortDirection("ASC");
    }
  };

  const sortedData = useMemo(() => {
    return [...data].sort((a, b) => {
      if (sortColumn === "time") {
        return sortDirection === "ASC"
          ? a.timeOrder - b.timeOrder
          : b.timeOrder - a.timeOrder;
      }

      const valA = a[sortColumn].toLowerCase();
      const valB = b[sortColumn].toLowerCase();

      if (valA < valB) return sortDirection === "ASC" ? -1 : 1;
      if (valA > valB) return sortDirection === "ASC" ? 1 : -1;
      return 0;
    });
  }, [data, sortColumn, sortDirection]);

  return (
    <div className="sql-output">
      <pre className="sql-prompt">
        mysql&gt; SELECT * FROM skills ORDER BY{" "}
        {sortColumn.toUpperCase()} {sortDirection};
      </pre>

      <table className="sql-table">
        <thead>
          <tr>
            <th onClick={() => handleSort("name")}>
              NAME{" "}
              {sortColumn === "name" &&
                (sortDirection === "ASC" ? "▲" : "▼")}
            </th>

            <th onClick={() => handleSort("type")}>
              TYPE{" "}
              {sortColumn === "type" &&
                (sortDirection === "ASC" ? "▲" : "▼")}
            </th>

            <th onClick={() => handleSort("time")}>
              TIME{" "}
              {sortColumn === "time" &&
                (sortDirection === "ASC" ? "▲" : "▼")}
            </th>
          </tr>
        </thead>

        <tbody>
          {sortedData.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <pre className="sql-end">
        {sortedData.length} rows in set (0.00 sec)
      </pre>
    </div>
  );
};

export default MySQLTable;