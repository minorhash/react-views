var React = require('react');
var DefLay=require("./lay/def")

class Hell extends React.Component {

Week1(){
const pre= [];
for (var i=24;i<29;i++){
pre.push(<span>{i}</span>)
}
const lspre=pre.map((nr) =>
<span  key={nr.toString()}>{nr}&nbsp;&nbsp;</span>
);
const nums= [];
for (var i=1;i<3;i++){
nums.push(<span>{i}</span>)
}

//const res=nums.splice(2,1)
//const thr=<a href="item3">{res}</a>
    //nums.splice(2,0,<span id="bkg1">{thr}</span>)
const ls=nums.map((nr) =>
<span  key={nr.toString()}>&nbsp;&nbsp;{nr}&nbsp;&nbsp;</span>
);

return(
<span id="bkg1">{lspre}{ls}</span>
);
}

Week2(){
const nums= [];
for (var i=3;i<10;i++){
nums.push(<span>{i}</span>)
}

const res=nums.splice(2,1)
const thr=<a href="item3">{res}</a>
    nums.splice(2,0,<span>{thr}</span>)
const ls=nums.map((nr) =>
<span key={nr.toString()}>&nbsp;&nbsp;{nr}&nbsp;&nbsp;</span>
);

return(
<span id="bkg1">{ls}</span>
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

<div className="col bg-bei p-3" >

<div align="center">bye {this.props.name}</div>
{this.Week1()}<br/>
{this.Week2()}
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
