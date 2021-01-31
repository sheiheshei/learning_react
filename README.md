# learning_react

关于render属性和component以及children属性之间的区别有什么区别有什么不再赘述（render可以避免新旧组件的重复挂在和卸载）

render使用箭头函数赋值，但是其中含有props作为传入参数，也可以不使用，这里的props属性是包含location、history以及match多种属性（猜测属于<Route/>标签），可以将其传入Route标签下的子组件，这样就避免在子组件中了使用`useParams()`、`useuseRouteMatch()`等函数获取相关的参数了。

~~~json
{
    "history": {
        "length": 23,
        "action": "PUSH",
        "location": {
            "pathname": "/tacos",
            "search": "",
            "hash": "",
            "key": "qzoehj"
        }
    },
    "location": {
        "pathname": "/tacos",
        "search": "",
        "hash": "",
        "key": "qzoehj"
    },
    "match": {
        "path": "/tacos",
        "url": "/tacos",
        "isExact": true,
        "params": {}
    }
}
~~~

具体使用

~~~jsx
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
~~~

