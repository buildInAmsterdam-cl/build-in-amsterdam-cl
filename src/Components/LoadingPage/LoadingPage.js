import React from 'react';
import LoadAnimation from './LoadAnimation';
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
            return (
                <div>
                    {this.timer()}
                    {this.state.show ? <LoadAnimation /> : <WrappedComponent {...this.props} />}
                    {/* {this.state.show ? <LoadAnimation /> : <LoadAnimation />} */}
                </div >
            )
        }
    }
}