var React = require('react');
var DefLay=require("./lay/def")

class Hell extends React.Component {

crNum(){
const nums= [303, 304, 305, 306];
const ls=nums.map((nr) =>
<span>{nr}&nbsp;&nbsp;</span>
);

const thr=<span className="badge badge-warning"><a href="">{nums[2]}</a></span>

return(
<div>{nums[0]}  {nums[1]} {thr}</div>
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

<div align="center">{this.props.par}</div>
</div>
<div className="col bg-ali">
    <a href="/">back</a>
</div>

</div>
</div>
</DefLay>
      
);
}
}

module.exports = Hell;
