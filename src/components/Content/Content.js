import React, { Component } from 'react';
 
class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            trangthai: 0
        }
    }
    thongBao1 = () => {
        this.setState({
            trangthai: 1
        });
    }
    thongbao2 = (x) => {
       this.setState({
           trangthai: 0
       });
       console.log(this.trunggian.value);
    }
    renderButton = () => {
        return(
            <div>
                    <button type="button" className="btn btn-primary" onClick={this.thongBao1}>HELLO</button>
                    
            </div>
        )
    }
    renderInput = () => {
        return(
           <div>
                <input type="email" ref={(dulieuhap)=>{this.trunggian = dulieuhap}} defaultValue={this.props.title} className="form-control" name id aria-describedby="emailHelpId" placeholder />
             <button type="button" className="btn btn-dark" onClick={()=>this.thongbao2('hello anh em')}>SAVE</button>
           </div>
        )
    }
    displayButton = () => {
        if(this.state.trangthai === 0)
        {
            
            return this.renderButton();
           
        }
        else
        {
            return this.renderInput()
        }
    }
    render() { 
        return (
            <div>
                 <section>
                    <div className="container">
                        <div className="row align-items-center">
                        <div className={"col-lg-6 " + this.props.local }>
                            <div className="p-5">
                            <img className="img-fluid rounded-circle" src="img/01.jpg" alt />
                            </div>
                        </div>
                        <div className="col-lg-6 order-lg-1">
                            <div className="p-5">
                            <h2 className="display-4">{this.props.title}</h2>
                            <p>{this.props.description}</p>
                            </div>
                        
                            <div>
                             <div className="form-group">
                                {
                                    this.displayButton()
                                }
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    </section>
            </div>
        );
    }
}
 
export default Content;