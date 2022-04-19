class HelloWorld extends React.Component {
    render() {
        if (this.props.heading) return <h1> {this.props.heading} </h1>;
        else return <p> {this.props.frameworkName} </p>;
    }
}
ReactDOM.render(
    React.createElement(
        "div",
        null,
        React.createElement(HelloWorld, {
            id: "ember",
            frameworkName: "Ember.js",
            heading:"Heading1",
            title: "A framework for creating ambitious web applications.",
        }),
        React.createElement(HelloWorld, {
            id: "backbone",
            frameworkName: "Backbone.js",
            title: "Backbone.js gives structure to web applications...",
        }),
        React.createElement(HelloWorld, {
            id: "angular",
            frameworkName: "Angular.js",
            title: "Superheroic JavaScript MVW Framework",
        })
    ),
    document.getElementById("content")
);