// TableComponent.js
import React, { useState } from "react";
import "./table.scss";
import Modal from "../modal/modal.jsx";

const TableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});

  const openModal = (title, content) => {
    setModalProps({ title, content });
    setIsModalOpen(true);
  };
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="parent-div">
      <table className="table-style">
        <tbody>
          <tr>
            {/* title */}
            <td></td>
            {/* Column 2 */}
            <td colSpan={1}>
              <h3>Principal</h3>
            </td>
            {/* Column 3*/}
            <td colSpan={1}>
              <h3>Before Blueprint</h3>
            </td>
            {/* Column 4*/}
            <td colSpan={1}>
              <h3>After Blueprint</h3>
            </td>
          </tr>
          <tr>
            <td rowSpan={4}>
              <h3>Embrace</h3>
            </td>
            <td>Systems over willpower</td>
            <td>Weekly meal prep</td>
            <td>Harmony over addiction</td>
          </tr>
          <tr>
            <td>Data over human opinion</td>
            <td>Fitbit usage</td>
            <td>Whoop usage, CGM, Regular Bloods</td>
          </tr>
          <tr>
            {/* title */}
            <td>Harmony over addiction</td>
            <td>Reduced alcohol consumption by amount</td>
            <td>Tracking binge eating</td>
          </tr>
          <tr>
            <td>Compounded rates of self-improvement</td>
            <td>Loose physical goal setting</td>
            <td>Clear fitness goals (WIP)</td>
          </tr>
          <tr>
            <td rowSpan={4}>
              <h3>Rebel</h3>
            </td>
            <td>Addictive algorithms</td>
            <td>
              <button onClick={() => openModal("Title 1", "Content 1")}>
                Anti-tech list then
              </button>
            </td>
            <td>
              {" "}
              <button>Anti-tech list now</button>
            </td>
          </tr>
          <tr>
            <td>Corporate profiteering at your detriment</td>
            <td>Reduced fast-food intake</td>
            <td>Zero fast-food intake since date</td>
          </tr>
          <tr>
            <td>Social norms encouraging bad behaviour</td>
            <td>Reducing my 'parting' events attendance</td>
            <td>Reduction of large chain fast-foods</td>
          </tr>
          <tr>
            <td>Self-aided destruction (SAD)</td>
            <td>Reduction in body destroying activities</td>
            <td>Reducing my 'parting' events attendance</td>
          </tr>
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={modalProps.title}
        content={modalProps.content}
      />
    </div>
  );
};

export default TableComponent;
