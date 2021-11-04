import React, { Component } from 'react'
import { Inject, ScheduleComponent, Day, Week, Month, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule'
// import './Calendar.css'


export default class Calendar extends Component {

  state = {
    localData: null
  }
  
  componentDidMount() {
    this.setState({localData: this.props.assignments})
  }

  componentDidUpdate() {
    if (this.state.localData !== this.props.assignments) {
      this.setState({localData: this.props.assignments})
    }
  }

  render() {
    return (
      <ScheduleComponent currentView='Month' width='100%' ref={schedule => this.scheduleObj = schedule} eventSettings={{ dataSource: this.state.localData }}>
        <ViewsDirective>
          <ViewDirective option='Day'></ViewDirective>
          <ViewDirective option='Week'></ViewDirective>
          <ViewDirective option='Month' isSelected={true}></ViewDirective>
        </ViewsDirective>
        <Inject services={[Day, Week, Month]} />
      </ScheduleComponent>
    )
  }
}
