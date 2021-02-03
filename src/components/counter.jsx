import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.counter.value,
        tags: ["tag1", "tag2", "tag3"]

    };

    // constructor() {
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }

    handleIncrement = (product) => {
        console.log(product);
        // console.log("Increment", this);
        // this.state.count++;
        this.setState({ count: this.state.count + 1 });
        // obj.method();
        //function();

    };

    doHandleIncrement = () => {
        this.handleIncrement({ id: 1});
    };

    // renderTags() {
    //     if (this.state.tags.length === 0) return 'There are no tags';

    //     return   <ul>{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
    // }

    // styles = {
    //     fontSize: 10,
    //     fontWeight: 'bold'

    // };
    render() {

        return (
            <React.Fragment>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={ () => this.handleIncrement({ id: 1}) } className="btn btn-secondary btn-sm">Increment</button>
                {/* { this.state.tags.length === 0 && "please create a new tag"}
            {this.renderTags()} */}

            <button onClick={() => this.props.onDelete(this.props.counter.id)}
            className="btn btn-danger btn-sm m-2">Delete</button>
            <br></br>
            </React.Fragment>
        );
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}

export default Counter;

//ctrl + D