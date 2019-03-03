import React from 'react';
import { connect } from 'react-redux';
import { decrementAction, incrementAction } from './actions/counterActions';

const mapStateToProps = (state) => ({
    count: state.count
});

const mapDispatchToProps = {
    decrementAction: decrementAction,
    incrementAction: incrementAction
};

class Counter extends React.Component {
    decrementAction = () => {
        this.props.decrementAction();
    }

    incrementAction = () => {
        this.props.incrementAction();
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrementAction}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.incrementAction}>+</button>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (Counter);