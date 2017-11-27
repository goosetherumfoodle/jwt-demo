const PropTypes = require('prop-types');
const createClass = require('create-react-class'); 
require('react').PropTypes = PropTypes;
require('react').createClass = createClass;
import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
const { Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const _columns = [
    {
        key: 'HICN', 
        name: 'HICN',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'memberName', 
        name: 'Member Name',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    {
        key: 'carrier', 
        name: 'Carrier',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'product',
        name: 'Product',
        sortable: true,
        width: 200,
        resizable: true,
        filterable: true
    },
    {
        key: 'effectiveDate',
        name: 'Effective Date',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'planYear',
        name: 'CMS Plan Year',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'status',
        name: 'Status',
        sortable: true,
        resizable: true,
        filterable: true
    },
];
   
class Production extends Component { 
    render() {
        return (
            <ReactDataGrid 
                className="productionGrid"
                onGridSort={this.props.onHandleGridSort}
                enableCellSelect={true}
                columns={_columns}
                rowGetter={this.props.rowGetter}
                rowsCount={this.props.rowsCount()}
                toolbar={<Toolbar enableFilter={true}/>}
                onAddFilter={this.props.handleFilterChange}
                onClearFilters={this.props.onClearFilters} 
                minHeight={900}
                minColumnWidth={100}/>);
    }
}
Production.propTypes = {
    onHandleGridSort: PropTypes.func,
    rowGetter: PropTypes.func,
    rowsCount: PropTypes.func,
    rows: PropTypes.array,
    handleFilterChange: PropTypes.func,
    onClearFilters: PropTypes.func
  };
export default Production;