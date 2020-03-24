import { Redirect } from 'umi';
// console.log(umi)
export default (props) => {
    // props 可以拿到跳转前的路由信息
    console.log(props)
    // const { isLogin } = useAuth();
    if (localStorage.getItem('myappToken')) {
      return <div>{ props.children }</div>;
    } else {
        return <Redirect to='/login'/>
        // console.log(history)
        // history.replace('/login');
    }
  }