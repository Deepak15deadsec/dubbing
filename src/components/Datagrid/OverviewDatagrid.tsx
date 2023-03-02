import React, { useEffect } from "react";
import { BiSearch } from "react-icons/bi";
import { useTable } from "react-table";

function DataGrid({ columns, data }: any) {
  const tableInstance = useTable({ columns, data });

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    tableInstance;

  return (

    <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
      <table
        {...getTableProps()}
        className="min-w-full divide-y divide-gray-200"
      >
        <thead className="bg-[#01A4EF]">

          {headerGroups.map((headerGroup: any, index: number) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={index}>
              {headerGroup.headers.map((column: any, index2: number) => (
                // Add the sorting props to control sorting. For this example
                // we can add them into the header props
                <th
                  key={index2}
                  scope="col"
                  className="group px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                  {...column.getHeaderProps()}
                >
                  <div className="flex items-center justify-between">
                    {column.render("Header")}
                    {/* Add a sort direction indicator */}
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody
          {...getTableBodyProps()}
          className="bg-white divide-y divide-gray-200"
        >
          {rows.map((row: any, i: any) => {
            // new
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={i}>
                {row.cells.map((cell: any, index: number) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="px-6 py-4 whitespace-nowrap"
                      role="cell"
                      key={index}
                    >
                      {cell.column.Cell.name === "defaultRenderer" ? (
                        <div className="text-sm text-gray-500">
                          {cell.render("Cell")}
                        </div>
                      ) : (
                        cell.render("Cell")
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>

  );
}

export default DataGrid;
