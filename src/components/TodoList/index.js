import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Input, Button, Select, Tag } from "antd";
import { v4 as uuid } from "uuid";

import Todo from "../Todo";
import { todoRemainingSelector } from "../../store/selector";
import todoSlice from "../../store/todoSlice";

import "./index.css";

export default function TodoList() {
  const [name, setName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);

  const dispatch = useDispatch();

  const handleOnClickAddBtn = () => {
    dispatch(
      todoSlice.actions.addTodo({
        id: uuid(),
        name: name,
        completed: false,
        priority: priority,
      })
    );
    setName("");
    setPriority("Medium");
  };

  return (
    <div className="todo-list-container">
      <Row>
        <Col span={24} className="list-todo">
          {todoList.length > 0 &&
            todoList.map((item) => (
              <Todo
                key={item.id}
                id={item.id}
                name={item.name}
                priority={item.priority}
                completed={item.completed}
              />
            ))}
        </Col>
        <Col span={24}>
          <Input.Group compact>
            <Input
              value={name}
              placeholder="Enter your task"
              onChange={(e) => setName(e.target.value)}
            />
            <Select value={priority} onChange={(value) => setPriority(value)}>
              <Select.Option value="High" label="High">
                <Tag color="red">High</Tag>
              </Select.Option>
              <Select.Option value="Medium" label="Medium">
                <Tag color="blue">Medium</Tag>
              </Select.Option>
              <Select.Option value="Low" label="Low">
                <Tag color="gray">Low</Tag>
              </Select.Option>
            </Select>
            <Button type="primary" onClick={handleOnClickAddBtn}>
              Add
            </Button>
          </Input.Group>
        </Col>
      </Row>
    </div>
  );
}
