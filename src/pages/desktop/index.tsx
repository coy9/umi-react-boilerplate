import React from 'react';
import { history, Link } from 'umi';
// import styles from './index.less';

export default () => {
//   history.push('/admin');
  return (
    <div>
      <div style={{ transform: 'rotateX(40deg)' }}>
      <Link to="/user" style={{ fontSize: 100 }}>首页</Link>
        </div>  
    </div>
  );
}
