import { BrowserRouter, Route } from 'react-router-dom'
import * as React from 'react'
import CountDown from '../pages/countDown'
// export default class Router extends React.Component {
//   constructor (props) {
//     super(props)
//   }
//   render (){
//     return (
//       <BrowserRouter>
//         <Route path="/" component={CountDown}></Route>
//       </BrowserRouter>
//     )
//   }
// }


export default function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Route path="/" component={CountDown}></Route>
    </BrowserRouter>
  )
} 