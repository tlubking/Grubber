import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business';

class BusinessList extends React.Component {
    constructor(props){
        super(props);
        console.log(this);
      }
    render() {
        let businesses = [];
        if(this.props.businesses && this.props.businesses.length){
            businesses = this.props.businesses.map(business => {
                return <Business business={business} key={business.id}/>
            })
        }
        return (
            <div className="BusinessList">{businesses}</div>
        );
    }
}

export default BusinessList;
