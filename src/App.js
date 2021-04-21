import React, { Component } from 'react';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import HeaderMenu from './components/Header/HeaderMenu';
import Menu from './components/TopMenu/Menu';
 
class App extends Component {
  render() { 
    return (
      <div>
          <div>
        {/* Navigation */}
        <Menu/>
        <HeaderMenu/>
        <Content  title="Tuanphan" local="order-lg-2"  description="alex"/>
        <Content  title="Tuanphan2"  description="alex2"/>
        <Content title="Tuanphan3"  description="alex3"/>
        {/* Footer */}
        <Footer/>
      </div>

      </div>
    );
  }
}
 
export default App;