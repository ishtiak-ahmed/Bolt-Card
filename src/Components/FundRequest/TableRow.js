import React from 'react';

const TableRow = ({data, index}) => {
    const colors = ['pink', 'green', 'orange', 'purple', 'blue']
    const name = data.name;
    const nameShort = name.split(' ').map(str => str[0]).join('')
    const className = colors[index % 5]
    return (
        <tr>
            <td className='name_column'>
                <div>
                    <span className={"name_circle " + className}>{nameShort}</span>
                </div>
                <div className="user_info">
                    <span>{data.name}</span>
                    <span className='userid'>#{data.id}</span>
                </div>
            </td>
            <td>{data.amount}</td>
            <td>{data.deadline}</td>
            <td>{data.reason}</td>
        </tr>
    );
};

export default TableRow;