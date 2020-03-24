import React, { useState, useEffect } from 'react';
import { history, Link } from 'umi';
import { Table, List, Button } from 'antd'
import { fetchHome } from '@/units/api'
export default () => {
  const [count, setCount] = useState([]);
  const [obj, setObj] = useState({ age: { oldAge: { a: 1 } } });
  useEffect(() => {
    console.log('生命周期')
  });
  function pageFetch() {
    return fetchHome().then((res) => {
      return setCount(res.list.map(item => item.name))
    }).catch(() => {
      console.log('catch')
    })
  }
  return (
    <div>
      <List
        size="large"
        header={<div>Header</div>}
        footer={<div>Footer</div>}
        bordered
        dataSource={count}
        renderItem={item => <List.Item>{item}</List.Item>}
      />
      <Button onClick={pageFetch}>
        hooks 增加100条数据
      </Button>
      <Button onClick={() => setObj({ age: { oldAge: { a: obj.age.oldAge.a === 1 ? 2 : 1 } } })}>
        改变对象值
      </Button>
      <div>{JSON.stringify(obj)}</div>
    </div>
  );
}