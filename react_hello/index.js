

// // 1、第一个react
// ReactDOM.render(
//   <h1>Hello, world!</h1>,
//   document.getElementById('root')
// );


// // 2、使用变量形式的react
// // 自己的理解就是可以直接读取上下文中的变量
// const name = 'Tom'
// const elem = <h1>hello {name}</h1>
// ReactDOM.render(elem, document.getElementById("greet"))

// // 甚至使用函数
// function sayHi() {
//   return "Hi!!!"
// }
// const elem1 = (
//   <h1>{sayHi()}</h1>
// )
// ReactDOM.render(elem1, document.getElementById("sayhi"))


// // 3、更新渲染的元素

// function timeNow() {
//   const ele = (
//     <h1>time now is {new Date().toLocaleTimeString()}</h1>
//   )
//   ReactDOM.render(ele, document.getElementById("timenow"))
// }

// setInterval(() => {
//   timeNow()
// }, 1000);


// // js函数创建组件,注意组件的名字必须是大写的

// function Hello(props) {
//   return <h1>hello;{props.name}</h1>
// }
// // class函数创建组件
// class Hello2 extends React.Component {
//   render() {
//     return <h1>hello;{props.name}</h1>
//   }
// }
// const elem2 = <Hello name="Jerry" />
// ReactDOM.render(elem2, document.getElementById("jerry"))



// //组合组件
// function App(props) {
//   return <h2>
//     <Hello name="小红" />
//     <Hello name="小明" />
//     <Hello name="小丽" />
//     </h2>
// }
// ReactDOM.render(<App/>,document.querySelector("#component"))

// function Comment(props) {
//   return (
//     <div className="Comment">
//     <div className="UserInfo">
//       <img className="Avatar"
//         src={props.author.avatarUrl}
//         alt={props.author.name}
//       />
//       <div className="UserInfo-name">
//         {props.author.name}
//       </div>
//     </div>
//     <div className="Comment-text">
//       {props.text}
//     </div>
//     <div className="Comment-date">
//       {props.date}
//     </div>
//   </div>
//   )
// }
// let author = {
//   name: "Tom",
//   avatarUrl: "https://pics1.baidu.com/feed/b58f8c5494eef01f9c70d7d5e2096a22bd317dbd.jpeg?token=71ffe0f39843923282abac01fcb2ce87&s=1EE6C604025B3BC862002C970300A0C2",
// }
// const elem = <Comment author={author} date = {new Date().toLocaleTimeString()} text = "随便说点什么" />
// ReactDOM.render(elem,document.querySelector("#complex"))





// // 不需要定时render的时钟
// class Clock extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = { date: new Date() }
//   }

//   // 组件挂载的时候设置定时器
//   componentDidMount () {
//     this.timer = setInterval(() => {
//       this.tick()
//     }, 1000);
//   }

//   tick() {
//     // setState不能使用运算功能，如果想要使用运算功能，参数传值为函数即可,返回值是对象
//     // this.setState((state, props) => ({
//     //   counter: state.counter + props.increment
//     // }));
//     this.setState({
//       date: new Date(),
//     })

//   }
//   componentWillUnmount (){
//     clearInterval(timer)
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }
// ReactDOM.render(<Clock/>, document.querySelector("#complex"))


// class Toggle extends React.Component {
//   // 注意state只在构造函数中初始化
//   // ---------------------------准备数据----------------------------------
//   constructor (props) {
//     super(props)
//     this.state= {
//       isOn: true
//     }

//     // 这一步使得在handleClick函数中能使用this,指向组件，否则可能指向点击事件？还没试过，若想要不绑定，render函数中使用箭头函数
//     this.handleClick = this.handleClick.bind(this)
//   }

//   // ---------------------------数据处理函数----------------------------------
//   // 定义的函数不能使用this指针，需要手工绑定
//   handleClick() {
//     // console.log("this is:",this)
//     this.setState(() => {
//       return {
//         isOn:!this.state.isOn
//       }
//     })
//   }

//   // ---------------------------创建模板----------------------------------
//   render () {
//     return (
//       <div>
//         <button onClick={this.handleClick}>{this.state.isOn? "NO":"OFF"}</button>
//         <button onClick={() => {this.handleClick()}}>{this.state.isOn? "NO":"OFF"}</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Toggle />,document.querySelector("#complex"))


// 多种组件封装

// function CompomentPackage(props) {
//   if(props.isLogin){
//     return <Login></Login>
//   }else {
//     return <Logout/>
//   }
// }

// function Login() {
//   return(
//     <h1>Login</h1>
//   )
// }

// function Logout(){
//   return(
//     <h1>Logout</h1>
//   )
// }

// ReactDOM.render(<CompomentPackage isLogin={false}/>, document.getElementById("complex"))


// 复杂的封装，将组件层层封装，其中夹带一些操作逻辑

// function LogIn(props) {
//   return(
//     <h1>You have LoggedIn!!!</h1>
//   )
// }

// function LogOut () {
//   return(
//     <h1>Please sign up!!!</h1>
//   )
// }


// function Log(props) {
//   if(props.isLoggedIn){
//     return (
//       <LogIn/>
//     )
//   } else {
//     return(
//       <LogOut/>
//     )
//   }
// }


// function LogoutButton(props) {
//   return(
//     <button onClick={props.onClick}>Logout</button>
//   )
// }
// function LoginButton(props) {
//   return(
//     <button onClick={props.onClick}>Login</button>
//   )
// }



// class LogTest extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoggedIn: false
//     }
//     this.handleLoginClick =this.handleLoginClick.bind(this)
//     this.handleLogoutClick = this.handleLogoutClick.bind(this)
//   }

//   handleLoginClick() {
//     this.setState({
//       isLoggedIn:true
//     })
//   }
//   handleLogoutClick() {
//     this.setState({
//       isLoggedIn: false
//     })
//   }




//   render() {
//     let button;
//     if(this.state.isLoggedIn){
//       button = <LogoutButton onClick={this.handleLogoutClick} />
//     }else {
//       button = <LoginButton onClick={this.handleLoginClick} />
//     }

//     return(
//       <div>
//         <Log isLoggedIn={this.state.isLoggedIn} />
//         {button}
//       </div>
//     )
//   }
// }

// ReactDOM.render(<LogTest />,document.getElementById("complex"))



// 与运算的使用

// function UnRead(props) {

//   const unReadMessage = props.unReadMessage
//   return (
//     <div>
//       {
//         unReadMessage.length > 0 &&
//         <h1>You hava { unReadMessage.length} Unread message</h1>
//       }
//     </div>
//   )
// }

// let unReadMessage = ["","ds"]
// const elem = <UnRead unReadMessage = {unReadMessage} />
// ReactDOM.render(elem, document.getElementById("complex"))




const Router = ReactRouter.Router
const Route = ReactRouter.Route
const Link = ReactRouter.Link

function About() {
  return(
    <h1>About</h1>
  )
}
function Inbox() {
  return (
    <h1>Inbox</h1>
  )
}
function Home() {
  return (
    <h1>Home</h1>
  )
}
// 然后我们从应用中删除一堆代码和
// 增加一些 <Link> 元素...
class App extends React.Component{
  render() {
    return (
      <div>
        <h1>App</h1>
        {/* 把 <a> 变成 <Link> */}
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>

        {/*
          接着用 `this.props.children` 替换 `<Child>`
          router 会帮我们找到这个 children
        */}
        {this.props.children}
      </div>
    )
  }
}

// 最后，我们用一些 <Route> 来渲染 <Router>。
// 这些就是路由提供的我们想要的东西。
ReactDOM.render((
  <Router>
    <Route path="/" component={App}>
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox} />
    </Route>
  </Router>
), document.querySelector("#complex"))