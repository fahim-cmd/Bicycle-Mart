import React from 'react';

const TableInfo = ({ cycle}) => {

    const {name} = cycle

    return (
        <div>
              <table className="tableStyle" border="0" width="70%">

<tr>
    <td>
        <table border="1" width="100%">
            <tr>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
            </tr>

            <tr>
                <td>{name}</td>
                <td>1</td>
                <td></td>
            </tr>

        </table>
    </td>
</tr>

</table>

        </div>
    );
};

export default TableInfo;