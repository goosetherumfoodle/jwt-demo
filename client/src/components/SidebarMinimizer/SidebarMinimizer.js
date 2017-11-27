import React, {Component} from 'react';

class SidebarMinimizer extends Component {

    sidebarMinimize() {
        document.body.classList.toggle('sidebar-minimized');
    }

    brandMinimize() {
        document.body.classList.toggle('brand-minimized');
    }
    hidegauge() {
        document.body.classList.toggle('gauge-hidden');
    }

    render() {
        return (
            <button className="sidebar-minimizer" type="button" onClick={() => {
                this.sidebarMinimize(); this.brandMinimize(); this.hidegauge(); 
            }}></button>
        );
    }
}
export default SidebarMinimizer;
