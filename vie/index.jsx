var React = require('react');
var DefLay=require("./lay/def")

class Hell extends React.Component {

crNum(){

const nums= [];
    for (var i=1;i<32;i++){
        nums.push(<span>{i}</span>)
    }

const res=nums.splice(2,1)
const thr=<a href="item3">{res}</a>
    nums.splice(2,0,<span>{thr}</span>)

const ls=nums.map((nr) =>
<span key={nr.toString()}>{nr}&nbsp;&nbsp;</span>
);



return(
<span>{ls}</span>
);
}

render() {
return (
<DefLay title={this.props.title}>          
<div className="container-fluid">
<div className="row">

<div className="col bg-info p-3">
<div align="center">
{this.props.title}
</div>
{/* cen */}
    </div>
{/* col */}
    </div>
{/* row */}
    <div className="row">
<div className="col bg-bei p-3">

<div align="center">bye {this.props.name}</div>
{this.crNum()}
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
