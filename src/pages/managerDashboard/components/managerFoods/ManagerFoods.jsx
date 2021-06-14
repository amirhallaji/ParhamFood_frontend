import React, { useContext, useState, useEffect, useRef } from 'react';

import './ManagerFoods.css'

// Components
import { Table, Input, Button, Popconfirm, Form } from 'antd';

const EditableContext = React.createContext(null);

const EditableRow = ({ index, ...props }) => {
  const [form] = Form.useForm();
  return (
    <Form form={form} component={false}>
      <EditableContext.Provider  value={form}>
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
        dataIndex: 'name',
        width: '15%',
        editable: true,
      },
      {
        title: 'قیمت غذا',
        dataIndex: 'price',
        width:'10%',
        editable: true,
      },
      {
        title: 'فعال/غیرفعال',
        width:'10%',
        dataIndex: 'deactive',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <div onClick={{}}>
              غیر فعال
            </div>
          ) : null,
      },
      {
        title: 'عملیات',
        dataIndex: 'operation',
        width:'10%',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <Popconfirm title="آیا از حذف غذا اطمینان دارید؟" onConfirm={() => this.handleDelete(record.key)}>
              <a>حذف غذا</a>
            </Popconfirm>
          ) : null,
      },
      {
        title: 'مشاهده نظرات',
        dataIndex: 'comments',
        width:'10%',
        render: (_, record) =>
          this.state.dataSource.length >= 1 ? (
            <div onClick={() => {console.log()}} style={{cursor:'pointer', color:'blue'} } >
              مشاهده‌ی نظرات
            </div>
          ) : null,
      },
    ];
    this.state = {
      dataSource: [
        {
          key: '0',
          name:  'کباب کوبیده',
          price: '42000',
          address: 'London, Park Lane no. 0',
        },
        {
          key: '1',
          name: 'سوسیس بندری',
          price: '10000',
          address: 'London, Park Lane no. 1',
        },
      ],
      count: 2,
    };
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
      name: `نام غذا ${count}`,
      price: '50000',
      address: `London, Park Lane no. ${count}`,
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