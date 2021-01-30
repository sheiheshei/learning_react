

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



// 事件处理

// function App(props) {
//   function handleBtnClick(e) {
//     console.log("btn have been clicked")
//     e.preventDefault()
//   }


//   return (
//     <a href="baidu.com" onClick={handleBtnClick}>百度</a>
//   )
// }

// ReactDOM.render(<App/>,document.getElementById("complex"))

//监听事件绑定

// class Toggle extends React.Component{

//   constructor(props) {
//     super(props)
//     this.state = {
//       isOn: false
//     }

//     this.handleBtnClick =this.handleBtnClick.bind(this)
//   }

//   // 不用手动绑定this指针的方式使用箭头函数的方式命名函数
//   handleBtnClick = () => {
//     this.setState(state => ({
//       isOn: !state.isOn
//     }))
//   }
//   // 或者使用的时候使用箭头函数调用
//   // onClick={ e => this.handleBtnClick() }

//   // 注意箭头函数的使用方法
//   // handleBtnClick() {
//   //   this.setState(state => ({
//   //     isOn: !state.isOn
//   //   }))
//   // }

//   render() {
//     return(
//       <button onClick={this.handleBtnClick}>{this.state.isOn? "ON" : "OFF"}</button>
//     )
//   }
// }

// ReactDOM.render(<Toggle/>, document.getElementById("complex"))


// render函数中返回null阻止组件渲染

// function Warning(props) {


//   if(!props.isShow) {
//     return null;
//   }else {
//     return <h1>Waring have been showed!</h1>
//   }
// }

// class Page extends React.Component{

//   constructor(props) {
//     super(props);
//     this.state = {
//       isShow: true
//     }
//     // this.handleClick =this.handleClick.bind(this)
//   }

//   // 注意箭头函数的写法 
//   // handleClick() {
//   //   this.setState(
//   //     state => ({
//   //       isShow: !state.isShow
//   //     })
//   //   )
//   // }

//   handleClick = () => {
//     this.setState(state => ({
//       isShow: !state.isShow
//     }))
//   }


//   render() {
//     return(
//       <div>
//         <Warning isShow={this.state.isShow} />
//         <button onClick={this.handleClick}>{this.state.isShow? "hide": "show"}</button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<Page/>, document.getElementById("complex"))



// 基础列表的渲染

// const nums = [1, 2, 3, 4, 5]
// const listItems = nums.map(
//   num => <li>{num}</li> 
// )

// ReactDOM.render(listItems,document.getElementById("complex"))
// function List(props) {
//   const nums = [1, 2, 3, 4, 5]
//   const listItems = nums.map(
//     num => <li>{num}</li>
//   )

//   return listItems
// }


// ReactDOM.render(<List/>,document.getElementById("complex"))


// 基础列表的渲染,绑定key，这样React可以知道列表中的哪些元素是变化的
// function List(props) {
//   const nums = [1, 2, 3, 4, 5]
//   const listItems = nums.map(
//     (num,index) => <li key={index.toString()}>index:{index},value:{num * 2}</li>
//   )

//   return listItems
// }


// ReactDOM.render(<List/>,document.getElementById("complex"))



// 双向数据模型绑定

// class App extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       text: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//     }
//   }


//   handleChange= (e) => {
//     this.setState( state => ({
//       text: e.target.value
//     }))
//   }
//   render() {
//     return(
//       <div>
//         <h1>{this.state.text}</h1>
//         <textarea value={this.state.text} onChange={this.handleChange}></textarea>
//       </div>
//     )
//   }


// }

// ReactDOM.render(<App/>,document.getElementById("complex"))



// let Fragment = React.Fragment

// function ListItem({ item }) {
//   return (
//     <Fragment>
//       <dt>{item.term}</dt>
//       <dd>{item.description}</dd>
//     </Fragment>
//   )
// }

// function Glossary(props) {
//   return ([
//     <dl>
//       {
//         props.items.map((item,index) => {
//           return <ListItem item={item} key={index} />
//         })
//       }
//     </dl>
//   ])
// }
// let items = [
//   {
//     id: 1,
//     term: "hello",
//     description: "hello Tom!"
//   }
// ]

// ReactDOM.render(<Glossary items={items}/>,document.querySelector("#complex"))


// react中的错误捕获

// let component = React.Component;


// class Error extends component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hasError: false,
//     }
//   };
//   static setError() {
//     return {
//       hasError: true
//     }
//   }

//   componentDidCatch(error, errorInfo) {
//     console.log("错误信息为" + errorInfo)
//   }



//   render() {
//     if (this.state.hasError) {
//       return (
//         <h1>this component has an error</h1>
//       )
//     }
//     return this.props.children
//   }
// }

// ReactDOM.render(<Error/>,document.getElementById("complex"))