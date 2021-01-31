let Route = ReactRouterDOM.Route
let Switch = ReactRouterDOM.Switch
let Link = ReactRouterDOM.Link
let Router = ReactRouterDOM.BrowserRouter
let useParams = ReactRouterDOM.useParams
let useRouteMatch = ReactRouterDOM.useRouteMatch


/**
 * <Link><Link/>会将元素渲染成<a/>标签，to属性表示其去往那个URL，
 * <Router></Router>,内部是一组路由，组成路由器
 * <Switch></Switch>，这个标签表示其中包含的多个route标签只会渲染其中一个route标签包含的内容，如果匹配多个route标签，只有第一个会被渲染
 * <Route><Route/> 包含一个或者多个组件，url中的值匹配其中的path属性，其中包含的内容就会渲染
 * useParams,是个函数，在子组件中调用这个函数，能够获取url中参数，父组件中的<Route></Route>标签中的path属性通过：定义这个变量
 * useRouteMatch,是个函数，子组件中使用URL或者path属性，可以调用这个函数直接获取
 */


// ================================== Test for React Router  =============================================


// let Router = ReactRouterDOM.BrowserRouter
// let Link = ReactRouterDOM.Link
// let Switch = ReactRouterDOM.Switch
// let Route = ReactRouterDOM.Router

// ______1、______入门案例

// function HomePage() {
//   return(
//     <h2>Home</h2>
//   )
// }

// function About() {
//   return(
//     <h2>About</h2>
//   )
// }

// function Dashboard() {
//   return(
//     <h2>Dashboard</h2>
//   )
// }

// function ReactRouterTest() {
//   return(
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/dashboard">Dashboard</Link>
//           </li>
//         </ul>
//         <hr/>

//         {/* 多个路由的，但是只想渲染一个的时候，使用<Switch></Switch>,匹配到第一个的时候就返回 */}
//         <Switch>
//           <Route exact path = "/">
//             <HomePage></HomePage>
//           </Route>
//           <Route path = "/about">
//             <About></About>
//           </Route>
//           <Route path = "/dashboard">
//             <Dashboard/>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// ReactDOM.render(<ReactRouterTest/>,document.getElementById("complex"))
// ______2、_______ URL中参数的使用
/**
 * 1）、需要使用URL路径的组件中需要通过ReactRouterDOM.useParams()函数获取路由中的参数，
 * 2）、具体的参数类型，是<Route/>标签中的path定义的，通过“:”形式定义，会自动和路径匹配
 */


// function Child() {

//   let params = useParams();

//   return (
//     <div>
//       <h3>
//         params:{
//           params["id"]
//           +
//           params[0]
//         }
//       </h3>
//     </div>
//   )
// }


// function UrlParams () {


//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to = "netflix">Netflix</Link>
//           </li>
//           <li>
//             <Link to = "zillow-group">Zillow Group</Link>
//           </li>
//           <li>
//             <Link to = "yahoo">Yahoo</Link>
//           </li>
//           <li>
//             <Link to = "modus-create">Modus Create</Link>
//           </li>
//         </ul>
//       </div>
//       <hr/>
//       <Switch>
//         <Route path = "/*/:id" children = {<Child/>}></Route>
//       </Switch>
//     </Router>
//   )
// }

// ReactDOM.render(<UrlParams/>, document.getElementById("complex"))

// ______3、_______ 路由嵌套
/**
 * 坑：路由中Link中的to属性值和Route中的path属性一定要相等，包括最前面的"/"
 * 1）、嵌套使用的路由需要使用父组件的url，这里使用useRouteMatch()获取URL或者path变量，最后在子路由中所使用
 */



// function Home() {
//   return (
//     <h1>Home</h1>
//   )
// }

// function Topics() {

//   let { path, url } = useRouteMatch()



//   return (
//     <Router>
//       <h2>Topics</h2>
//       <div>
//         <ul>
//           <li>
//             <Link to={`${url}/rendering`}>Rendering with React</Link>
//           </li>
//           <li>
//             <Link to={`${url}/components`}>Components</Link>
//           </li>
//           <li>
//             <Link to={`${url}/props-v-state`}>Props v. State</Link>
//           </li>
//         </ul>
//         <Switch>
//           <Route exact path={path}>
//             <h3>Please select a topic.</h3>
//           </Route>
//           <Route path={`${path}/:topicId`}>
//             <Topic />
//           </Route>
//         </Switch>

//       </div>
//     </Router>
//   )
// }

// function Topic() {
//   let { topicId } = useParams()
//   return (
//     <h3>topicID:{topicId}</h3>
//   )
// }


// function NestRoute() {

//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>

//         <hr></hr>
//         <Switch>
//           <Route exact path="/">
//             <Home></Home>
//           </Route>
//           <Route path="/topics">
//             <Topics />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   )
// }

// ReactDOM.render(<NestRoute />, document.getElementById("complex"))


// 侧边栏测试,类似vue中的处理方式，将所有的路由提取成route数组，最后通过函数进行遍历实现route




// const routes = [{
//   path: "/",
//   exact: true,
//   sidebar: Home,
// }, {
//   path: "/bubblegum",
//   sidebar: () => <div>bubblegum!!</div>
// }, {
//   path: "/shoelaces",
//   sidebar: () => <div>shoelaces!!!</div>
// }]

// function Home() {
//   return (
//     <div>home!</div>
//   )
// }

// function SideBar() {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/bubblegum">Bubblegum</Link></li>
//           <li><Link to="/shoelaces">Shoelaces</Link></li>
//         </ul>
//       </div>
//       <Switch>
//         {
//           routes.map((route, index) => (
//             <Route
//               key={index}
//               path={route.path}
//               exact={route.exact}
//               children={<route.sidebar></route.sidebar>}
//             ></Route>
//           ))
//         }
//       </Switch>
//     </Router>
//   )

// }

// ReactDOM.render(<SideBar />, document.getElementById("complex"))


// 路由配置提取

function Tacos(props) {
  return (
    <h1>{props.location.pathname}</h1>
  )
}

function Sandwiches() {
  return (
    <h1>Sandwiches!!!</h1>
  )
}


const routes = [
  {
    path: "/tacos",
    component: Tacos,
  },
  {
    path: "/sandwitches",
    component: Sandwiches,
  }
]

// 将单个route对象转换成一个组件
function SibeRoute(route) {
  return (
    <Route 
    path = {route.path}
    render = {
      props => (
        <route.component {...props} routes = {route.routes} />
      )
    }
    />
  )
}

function RouteConfig() {
  return (
    <Router>
      <div>
        <ul>
          <li><Link to="/tacos">tacos</Link></li>
          <li><Link to="/sandwitches">sandwitches</Link></li>
        </ul>
      </div>
      <Switch>
        {routes.map((route,index) => (
          <SibeRoute key = {index} {...route}/>
        ))}
      </Switch>
    </Router>
  )
}



ReactDOM.render(<RouteConfig routes = {routes} />, document.getElementById("complex"))