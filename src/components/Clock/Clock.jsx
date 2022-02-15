import React, { Component } from "react"

export default class Clock extends Component {
    timerID = undefined

    constructor(props){
        console.log('(constructor) CONSTRUYO EL CLOCK')
        super(props)
        this.state = {
            date: new Date()
        }
    }

    tick(){
        console.log('(tick) TICK CLOCK')
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        console.log('(componentDidMount) STARTING INTERVAL CLOCK')
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }

    componentWillUnmount() {
        console.log('(componentWillUnmount) UNMOUNTING COMPONENT (CLOCK)')
        clearInterval(this.timerID)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Should Component update?')
        console.log({nextProps})
        console.log({nextState})
        return true
    }

    componentDidUpdate(){
        console.log('Did update')
    }

    render() {
        return <>{this.state.date.toLocaleTimeString()}</>
    }
}
