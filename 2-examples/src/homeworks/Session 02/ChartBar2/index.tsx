import React, { Component } from 'react'

interface Props {
  nameProps : string
}

type State = {}

class ChartBar2 extends Component<Props, State> {
  constructor(props : Props){
    super(props)
    // khai bao thuoc tinh cua comporntn
  }

  render() {
    return (
      <div>{this.props.nameProps}</div>
    )
  }
}

export default ChartBar2