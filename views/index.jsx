var React = require('react');
var DefLay=require("./lay/def")

class Hell extends React.Component {
render() {
return (
<DefLay title={this.props.title}>          
    <div className="container-fluid">
    <div className="row">
    </div>
    <div className="row">

<div className="col bg-bei">

<div align="center">bye {this.props.name}</div>

</div>
<div className="col bg-ali">
</div>


</div>
</div>
</DefLay>
      
);
}
}

module.exports = Hell;
