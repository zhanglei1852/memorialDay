import { BrowserRouter, Route } from 'react-router-dom'
import * as React from 'react'
import CountDown from '../pages/countDown'
// interface RouterState {
// }
// interface RouterProps {
// }
// export default class Router extends React.Component<RouterProps, RouterState> {
//   // constructor (props: RouterProps) {
//   //   super(props)
//   // }
//   render (): JSX.Element{
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