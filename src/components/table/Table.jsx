// TableComponent.js
import React, { useState } from "react";
import "./table.scss";
import Modal from "../modal/modal.jsx";
import { data } from "./data";
const TableComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalProps, setModalProps] = useState({});
  console.log("data", data);
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
            <td>
              <button
                onClick={() =>
                  openModal(data.meals_before.title, data.meals_before.content)
                }
              >
                Weekly meal prep and exercise routine
              </button>
            </td>
            <td>
              <button
                onClick={() =>
                  openModal(data.meals_after.title, data.meals_after.content)
                }
              >
                2 x Weekly meal prep w/ supplements. Sleep priorities.
              </button>
            </td>
          </tr>
          <tr>
            <td>Data over human opinion</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(
                    data.tracking_before.title,
                    data.tracking_before.content
                  )
                }
              >
                Fitbit and Behavior tracking
              </button>
            </td>
            <td>
              <button
                onClick={() =>
                  openModal(
                    data.tracking_after.title,
                    data.tracking_after.content
                  )
                }
              >
                WHOOP & CGM
              </button>
            </td>
          </tr>
          <tr>
            {/* title */}
            <td>Harmony over addiction</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(
                    data.harmony_before.title,
                    data.harmony_before.content
                  )
                }
              >
                Reduced alcohol
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(
                    data.harmony_after.title,
                    data.harmony_after.content
                  )
                }
              >
                Zero* alcohol.
              </button>
            </td>
          </tr>
          <tr>
            <td>Compounded rates of self-improvement</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.self_before.title, data.self_before.content)
                }
              >
                Goal setting
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.self_after.title, data.self_after.content)
                }
              >
                Goal systems
              </button>
            </td>
          </tr>
          <tr>
            <td rowSpan={4}>
              <h3>Rebel</h3>
            </td>
            <td>Addictive algorithms</td>
            <td>
              <button
                onClick={() =>
                  openModal(
                    data.algorithms_before.title,
                    data.algorithms_before.content
                  )
                }
              >
                Anti-tech tech
              </button>
            </td>
            <td>
              <button
                onClick={() =>
                  openModal(
                    data.algorithms_after.title,
                    data.algorithms_after.content
                  )
                }
              >
                Anit-tech tech +
              </button>
            </td>
          </tr>
          <tr>
            <td>Corporate profiteering at your detriment</td>
            <td>
              <button
                onClick={() =>
                  openModal(data.corp_before.title, data.corp_before.content)
                }
              >
                Reduced habitual consumption
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.corp_after.title, data.corp_after.content)
                }
              >
                Zero* habitual consumption
              </button>
            </td>
          </tr>
          <tr>
            <td>Social norms encouraging bad behaviour</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.norms_before.title, data.norms_before.content)
                }
              >
                Reducing my ‘partying’ event attendance
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.norms_after.title, data.norms_after.content)
                }
              >
                ‘If it’s not a hell yes, it’s a no.’
              </button>
            </td>
          </tr>
          <tr>
            <td>Self-aided destruction (SAD)</td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.sad_before.title, data.sad_before.content)
                }
              >
                Reduction in risky activities
              </button>
            </td>
            <td>
              {" "}
              <button
                onClick={() =>
                  openModal(data.sad_after.title, data.sad_after.content)
                }
              >
                Increase in rejuvenating activities
              </button>
            </td>
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
