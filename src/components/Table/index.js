import { useTheme } from 'components/ThemeProvider';
import './index.css';

export const Table = ({ children }) => {
  const theme = useTheme();
  return (
    <table className={`table table--${theme}`}>
      <tbody className="table__body">{children}</tbody>
    </table>
  );
};

export default Table;

export const TableRow = ({ children }) => <tr className="table__row">{children}</tr>;

export const TableCell = ({ children }) => <td className="table__cell">{children}</td>;
