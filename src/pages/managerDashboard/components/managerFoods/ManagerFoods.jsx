import React, { useContext, useState, useEffect, useRef } from 'react';

import './ManagerFoods.css'

// Components
import socketIOClient from "socket.io-client";
import { Table, Input, Button, Popconfirm, Form } from 'antd';
import { Switch } from 'react-router-dom';

const EditableContext = React.createContext(null);

const ENDPOINT = "http://127.0.0.1:4001";
const socket = socketIOClient(ENDPOINT);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider value={form}>
        <tr {...props} />
      </EditableContext.Provider>
    </Form>
  );
};

const EditableCell = ({
  title,
  editable,
  children,
  dataIndex,
  record,
  handleSave,
  ...restProps
}) => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef(null);
  const form = useContext(EditableContext);

  useEffect(() => {
    if (editing) {
      inputRef.current.focus();
    }
  }, [editing]);

  const toggleEdit = () => {
    setEditing(!editing);
    form.setFieldsValue({
      [dataIndex]: record[dataIndex],
    });
  };

  const save = async () => {
    try {
      const values = await form.validateFields();
      toggleEdit();
      handleSave({ ...record, ...values });
    } catch (errInfo) {
      console.log('Save failed:', errInfo);
    }
  };

  let childNode = children;

  if (editable) {
    childNode = editing ? (
      <Form.Item
        style={{
          margin: 0,
        }}
        name={dataIndex}
        rules={[
          {
            required: true,
            message: `.${title}  نمی‌تواند خالی باشد`,
          },
        ]}
      >
        <Input ref={inputRef} onPressEnter={save} onBlur={save} />
      </Form.Item>
    ) : (
      <div
        className="editable-cell-value-wrap"
        style={{
          paddingRight: 24,
        }}
        onClick={toggleEdit}
      >
        {children}
      </div>
    );
  }

  return <td {...restProps}>{childNode}</td>;
};

class ManagerFoods extends React.Component {
  constructor(props) {
    super(props);


    this.columns = [
      {
        title: 'نام غذا',
        dataIndex: 'food_name',
        width: '15%',
        editable: true,
      },
      {
        title: 'قیمت غذا',
        dataIndex: 'price',
        width: '10%',
        editable: true,
      },
      {
        title: 'فعال/غیرفعال',
        width: '10%',
        dataIndex: 'disabled',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Button onClick={
              this.state.disabled === 0 ? 1 : 0
            }>
              غیر فعال
            </Button>
          ) : null,
      },
      {
        title: 'عملیات',
        dataIndex: 'operation',
        width: '10%',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="آیا از حذف غذا اطمینان دارید؟" onConfirm={() => this.handleDelete(record.key)}>
              <a>حذف غذا</a>
            </Popconfirm>
          ) : null,
      },
      {
        title: 'ثبت غذا',
        dataIndex: 'confirmFood',
        width: '10%',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Button onClick={() => this.submitFood(record)}>ثبت غذا</Button>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          // key: '0',
          food_name: 'کباب کوبیده',
          restaurant_name: '',
          price: '42000',
          restaurant_name: 'حلاج پلو',
          copen_type: '5',
          disabled: 0,
          count: 1,
        },
      ],
      count: 2,
    };
  }


  // submitFood = async (food) => {
  //   try {
  //     await fetch('sample', {
  //       body: {},
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       }
  //     }).then((response) => response.json()).then((data) => console.log(data)); // addfood API
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  submitFood = (record) => {
    socket.emit('add food', record);
    console.log('food: ', record);
  }
   



  handleDelete = (key) => {
    const dataSource = [...this.state.dataSource];
    this.setState({
      dataSource: dataSource.filter((item) => item.key !== key),
    });
  };

  handleAdd = () => {
    const { count, dataSource } = this.state;
    const newData = {
      key: count,
      food_name: `نام غذا ${count}`,
      price: '50000',
      restaurant_name: 'رستوران',
      copen_type: '5',
    };
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    });
  };

  handleSave = (row) => {
    const newData = [...this.state.dataSource];
    const index = newData.findIndex((item) => row.key === item.key);
    const item = newData[index];
    newData.splice(index, 1, { ...item, ...row });
    this.setState({
      dataSource: newData,
    });
  };

  render() {


    const { dataSource } = this.state;
    const components = {
      body: {
        row: EditableRow,
        cell: EditableCell,
      },
    };
    const columns = this.columns.map((col) => {
      if (!col.editable) {
        return col;
      }

      return {
        ...col,
        onCell: (record) => ({
          record,
          editable: col.editable,
          dataIndex: col.dataIndex,
          title: col.title,
          handleSave: this.handleSave,
        }),
      };
    });
    return (
      <div id='managerFoods'>
        <Button
          onClick={this.handleAdd}
          type="primary"
          shape='round'
          style={{
            marginBottom: 16,
          }}
        >
          اضافه کردن غذا
        </Button>
        <Table
          components={components}
          rowClassName={() => 'editable-row'}
          bordered
          dataSource={dataSource}
          columns={columns}
          pagination={false}
        />
      </div>
    );
  }
}

export default ManagerFoods;