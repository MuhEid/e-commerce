import "./Tables.css"

const Table = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td>{props.userName}</td>
            <td>{props.userEmail}</td>
          </tr>
        </tbody>
      </table>      
    </div>
  );
};

export default Table;
