import React from 'react';
import './LoadingPage.css';
export default function LoadingPage(WrappedComponent) {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                countdown: 0,
                show: true,
            }
        }
        incrementTimer = () => {
            this.setState({ countdown: this.state.countdown + 1 })
        }
        toggleShow = () => {
            this.setState({ show: false })
        }
        timer = () => {
            if (this.state.show) {
                setTimeout(() => {
                    this.incrementTimer();
                    if (this.state.countdown > 3) {
                        this.toggleShow();
                    }
                }, 1000)
            }

        }

        render() {
            // console.log(this.state.countdown)

            let currentMess =  (
            <div className={this.state.countdown !== 3 ? 'fadeForNow' : 'fadeOut'}>
            <h1 className='loadingText' >Strategy, branding</h1>
            <h1 className='loadingText' >& e-commerce</h1>
        </div>)


            return (
                <div>
                    {this.timer()}
                    {this.state.show ? currentMess : <WrappedComponent {...this.props} />}
                </div >
            )
        }
    }
}