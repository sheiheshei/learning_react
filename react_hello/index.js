

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





// 不需要定时render的时钟
class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  // 组件挂载的时候设置定时器
  componentDidMount () {
    this.timer = setInterval(() => {
      this.tick()
    }, 1000);
  }
  
  tick() {
    // 
    this.setState({
      date: new Date(),
    })
  }
  componentWillUnmount (){
    clearInterval(timer)
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
ReactDOM.render(<Clock/>, document.querySelector("#complex"))