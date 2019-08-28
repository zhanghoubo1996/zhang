import React, {Component} from 'react';
import "./hom.css";
import { Checkbox } from 'antd';

class Hom extends Component {
    constructor(props) {
        super(props);
        this.state= {
            pictures: this.props.pictures,
            value:"",
            checked:false
        }

    }
    xz(id){
        let i =0;
        let date=[];
        this.state.pictures=this.state.pictures.map(item=>{
            if(item.id==id){
                item.istrue=!item.istrue
            }
            if(item.istrue){
                ++i;
                date.push({item})
            }
            return item
        });
        if(i==this.state.pictures.length){
            this.state.checked=true;
        }else{
            this.state.checked=false;
        }
        this.setState({
            pictures:[...this.state.pictures],
            checked:this.state.checked,
            value:[...date]
        });

    }
    quan(){
        let date=[];
        this.state.pictures=this.state.pictures.map(item=>{
                item.istrue=!item.istrue;
            if(item.istrue){
                date.push({item})
            }
            return item
        });
        this.setState({
            pictures:[...this.state.pictures],
            checked:!this.state.checked,
            value:[...date]
        });
    }

    render() {
        console.log(this.state.value,"已经选中的图片");
        return (
            <div>
                <div className="top">
                    {
                        <Checkbox onClick={this.quan.bind(this)} checked={this.state.checked}>
                            全部选中
                        </Checkbox>
                    }
                </div>
                {
                    this.state.pictures.map(item=>{
                        return <div className="divimg"  key={item.id}>
                            <img src={item.url} alt=""/>
                            <p>{item.name}</p>
                            <Checkbox className="che" onClick={this.xz.bind(this,item.id)} checked={item.istrue}/>
                        </div>
                    })
                }
            </div>
        );
    }
}

export default Hom;
