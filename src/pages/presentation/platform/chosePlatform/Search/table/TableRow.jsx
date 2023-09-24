import IconsTable from "./IconsTable";

function TableRow({ item, onSelectPlay }) {
  const { id, name } = item;
  const handleClick = () => {
    onSelectPlay(item);
  };
  return (
    <tr key={id}>
      <td>
        <div className="number-table">{id}</div>
      </td>

      <td>{name}</td>
      <IconsTable></IconsTable>
      <td>
        <button className="add-btn-table" onClick={handleClick}>
          +
        </button>
      </td>
    </tr>
  );
}

export default TableRow;
