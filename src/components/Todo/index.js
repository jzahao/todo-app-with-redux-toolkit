import { Row, Tag, Checkbox } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import todoSlice from "../../store/todoSlice";

import "./index.css";

const priorityColorMapping = {
  High: "red",
  Medium: "blue",
  Low: "gray",
};

export default function Todo({ id, name, priority, completed }) {
  const [checked, setChecked] = useState(completed);

  const dispatch = useDispatch();

  const toggleCheckbox = () => {
    setChecked(!checked);
    dispatch(todoSlice.actions.toggleTodoStatus(id));
  };

  return (
    <div className={`todo-container ${checked ? "todo-checked" : ""}`}>
      <Row justify="space-between">
        <Checkbox checked={checked} onChange={toggleCheckbox}>
          {name}
        </Checkbox>
        <Tag color={priorityColorMapping[priority]}>{priority}</Tag>
      </Row>
    </div>
  );
}
