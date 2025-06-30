import React from "react";
import "./style.css";

interface TechItem {
  name: string;
  type: string;
  time: string;
}

interface MySQLTableProps {
  data: TechItem[];
}

const MySQLTable: React.FC<MySQLTableProps> = ({ data }) => {
  return (
    <div className="sql-output">
      <pre className="sql-prompt">mysql&gt; SELECT * FROM habilidades;</pre>
      <table className="sql-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Tipo</th>
            <th>Tempo</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.type}</td>
              <td>{item.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <pre className="sql-end">{data.length} rows in set (0.00 sec)</pre>
    </div>
  );
};

export default MySQLTable;
