// TableComponent.js
import React from "react";

const TableComponent = () => {
  return (
    <table>
      <tbody>
        <tr>
          <td rowSpan={2}>Embrace</td>
          <td colSpan={1}>Principal</td>
          <td colSpan={1}>Before Blueprint</td>
          <td colSpan={1}>After Blueprint</td>
        </tr>
        <tr>
          <td>Systems over willpower</td>
          <td>Data over human opinion</td>
          <td>Harmony over addiction</td>
          <td>Compounded rates of self-improvement</td>
        </tr>
        <tr>
          <td></td>
          <td>Data over human opinion</td>
          <td>Row 4</td>
          <td>Row 3</td>
          <td>Row 4</td>
        </tr>
        <tr>
          <td>Rebel</td>
          <td>Harmony over addiction</td>
          <td>Row 6</td>
          <td>Row 5</td>
          <td>Row 6</td>
        </tr>
        <tr>
          <td></td>
          <td>Compounded rates of self-improvement</td>
          <td>Row 8</td>
          <td>Row 7</td>
          <td>Row 8</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableComponent;
