import { Col, Row, Input, Typography, Radio, Select, Tag } from "antd";
import { useState } from "react";
import { useDispatch } from "react-redux";

import filtersSlice from "../../store/filtersSlice";

import "./index.css";

const { Search } = Input;

export default function Filters() {
  const [searchInput, setSearchInput] = useState("");

  const [statusInput, setStatusInput] = useState("All");

  const [priorityInput, setPriorityInput] = useState([]);

  const dispatch = useDispatch();

  const handleFilterSearchChange = (e) => {
    setSearchInput(e.target.value);
    dispatch(filtersSlice.actions.searchFilter(e.target.value));
  };

  const handleFilterSatusChange = (e) => {
    setStatusInput(e.target.value);
    dispatch(filtersSlice.actions.statusFilter(e.target.value));
  };

  const handleFilterPriorityChange = (value) => {
    setPriorityInput(value);
    dispatch(filtersSlice.actions.prioritiesFilter(value));
  };

  return (
    <div className="filter-container">
      <Row justify="center">
        <Col span={24}>
          <Typography.Paragraph>Search</Typography.Paragraph>
          <Search
            placeholder="Enter your task"
            value={searchInput}
            onChange={handleFilterSearchChange}
            allowClear
          />
        </Col>
        <Col span={24}>
          <Typography.Paragraph>Filter By Status</Typography.Paragraph>
          <Radio.Group value={statusInput} onChange={handleFilterSatusChange}>
            <Radio value="All">All</Radio>
            <Radio value="Completed">Completed</Radio>
            <Radio value="Todo">To do</Radio>
          </Radio.Group>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>Filter By Priority</Typography.Paragraph>
          <Select
            mode="multiple"
            allowClear
            placeholder="Select priority"
            value={priorityInput}
            onChange={handleFilterPriorityChange}
          >
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
        </Col>
      </Row>
    </div>
  );
}
