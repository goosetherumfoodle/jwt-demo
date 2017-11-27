const PropTypes = require('prop-types');
import React, {Component} from 'react';
import ReactDataGrid from 'react-data-grid';
const {  Toolbar, Data: { Selectors } } = require('react-data-grid-addons');

const _columns = [
    {
        key: 'HICN', 
        name: 'HICN',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'writingAgentName', 
        name: 'Agent',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    {
        key: 'writingAgentNPN', 
        name: 'Agent NPN',
        sortable: true,
        resizable: true,
        filterable: true
    },
    {
        key: 'level5', 
        name: 'Level 5 Agency',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    { 
        key: 'level6', 
        name: 'Level 6 Agency',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    { 
        key: 'level7', 
        name: 'Level 7 Agency',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    { 
        key: 'level8', 
        name: 'Level 8 Agency',
        sortable: true,
        width: 185,
        resizable: true,
        filterable: true
    },
    { 
        key: 'level9', 
        name: 'Level 9 Agency',
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
   
class AgencyBob extends Component { 
    render() {
        return (
        <ReactDataGrid className="productionGrid"
                onGridSort={this.props.onHandleGridSort}
                enableCellSelect={true}
                columns={_columns}
                rowGetter={this.props.rowGetter}
                rowsCount={this.props.rowsCount()}
                toolbar={<Toolbar enableFilter={true}/>}
                onAddFilter={this.props.handleFilterChange}
                onClearFilters={this.props.onClearFilters}
                minHeight={900}
                minColumnWidth={100} />);
    }
}
AgencyBob.propTypes = {
    onHandleGridSort: PropTypes.func,
    rowGetter: PropTypes.func,
    rowsCount: PropTypes.func,
    rows: PropTypes.array,
    handleFilterChange: PropTypes.func,
    onClearFilters: PropTypes.func
  };
export default AgencyBob;