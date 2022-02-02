import React from 'react';
function Table() {
  return (
    <table className="text-left w-full border-collapse">
      <thead>
        <tr>
          <th className="py-4 px-6 bg-gray-50 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            City
          </th>
          <th className="py-4 px-6 bg-gray-50 font-bold uppercase text-sm text-grey-dark border-b border-grey-light">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-50">
          <td className="py-4 px-6 border-b border-grey-light">New York</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
              Edit
            </a>
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-4 px-6 border-b border-grey-light">Paris</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
              Edit
            </a>
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-4 px-6 border-b border-grey-light">London</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
              Edit
            </a>
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-4 px-6 border-b border-grey-light">Oslo</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
              Edit
            </a>
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
        <tr className="hover:bg-gray-50">
          <td className="py-4 px-6 border-b border-grey-light">Mexico City</td>
          <td className="py-4 px-6 border-b border-grey-light">
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-green hover:bg-green-dark">
              Edit
            </a>
            <a href="#" className="font-bold py-1 px-3 rounded text-xs bg-blue hover:bg-blue-dark">
              View
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  );
}
export default Table;
