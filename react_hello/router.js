let Route = ReactRouterDOM.Route
let Switch = ReactRouterDOM.Switch
let Link = ReactRouterDOM.Link
let Router = ReactRouterDOM.BrowserRouter
let useParams = ReactRouterDOM.useParams


// router的基本使用，使用Link标签将元素渲染成<a><a/>标签
// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/about">About</Link>
//             </li>
//             <li>
//               <Link to="/users">Users</Link>
//             </li>
//           </ul>
//         </nav>

//         {/* A <Switch> looks through its children <Route>s and
//             renders the first one that matches the current URL. */}
//         <Switch>
//           <Route path="/about">
//             <About />
//           </Route>
//           <Route path="/users">
//             <Users />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }


// function App() {
//   return (
//     <div>
//       <Switch>
//         {/* If the current URL is /about, this route is rendered
//             while the rest are ignored */}
//         <Route path="/about">
//           <About />
//         </Route>

//         {/* Note how these two routes are ordered. The more specific
//             path="/contact/:id" comes before path="/contact" so that
//             route will render when viewing an individual contact */}
//         <Route path="/contact/:id">
//           <Contact />
//         </Route>
//         <Route path="/contact">
//           <AllContacts />
//         </Route>

//         {/* If none of the previous routes render anything,
//             this route acts as a fallback.

//             Important: A route with path="/" will *always* match
//             the URL because all URLs begin with a /. So that's
//             why we put this one last of all */}
//         <Route path="/">
//           <Home />
//         </Route>
//       </Switch>
//     </div>
//   );
// }

// ReactDOM.render(
//   <Router>
//     <App />
//   </Router>,
//   document.getElementById("complex")
// );

// function Home() {
//   return <h2>Home</h2>;
// }

// function About() {
//   return <h2>About</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }

// ReactDOM.render(<App/>, document.getElementById("complex"))


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
let useRouteMatch = ReactRouterDOM.useRouteMatch



function Home() {
  return (
    <h1>Home</h1>
  )
}

function Topics() {

  let { path, url } = useRouteMatch()



  return (
    // <h1>Topics</h1>
    <Router>
      <h2>Topics</h2>
      <div>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>

      </div>
    </Router>
  )
}

function Topic() {
  let { topicId } = useParams()
  return (
    <h3>topicID:{topicId}</h3>
  )
}


function NestRoute() {

  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <hr></hr>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/topics">
            <Topics />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

ReactDOM.render(<NestRoute />, document.getElementById("complex"))


