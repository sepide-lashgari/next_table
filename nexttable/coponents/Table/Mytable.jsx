import React, { useState,useEffect } from 'react';
import { Table, Radio, Divider } from 'antd';
import usefetch from '../../hooks/usefech';
const Mytable = ()=>{
const {data,loading,error}=usefetch(
    "https://jsonplaceholder.typicode.com/todos"
);

   console.log("data:",data) 

    const columns = [
        {
          title: 'Name',
          dataIndex: 'title',
          render: (text) => <a>{text}</a>,
        },
        {
          title: 'completed',
          dataIndex: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
        },
      ];

    return(
        <div>
         <Table
        columns={columns}
        dataSource={data}
      />
        </div>
    )
}
export default Mytable