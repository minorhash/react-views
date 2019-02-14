var React = require('react');

class DefLay extends React.Component {
  render() {
    return (
      <html>
          <head>
<link rel="stylesheet" href="/css/boot.css" />
              <title>{this.props.title}</title></head>
              <body>
                  {this.props.children}
              </body>
      </html>
    );
  }
}

module.exports = DefLay;
