import appData from './utils/appDataInitShape'

const initialState = {
  appData,
  sale: [],
  dashboardActiveTab: '1',
  contactModal: false,
  rows:[
    {
      HICN: "",
      carrier: "",
      effectiveDate: "",
      key: 0,
      memberName: "",
      planYear: "",
      product: "",
      status: ""
    }
  ],
  originalRows:[],
  productionSortColumn: null,
  productionSortDirection: null,
  agent: [],
  bar: {
    labels: ['July', 'August', 'September', 'October'],
    datasets: [
      {
        label: 'Policies',
        backgroundColor: 'rgba(23,40,92,0.5)',
        borderColor: 'rgba(23,40,92,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(23,40,92,0.7)',
        hoverBorderColor: 'rgba(23,40,92,1)',
        data: [16, 26, 35, 29],
      }
    ]
  },
  monthToFilter: null,
  fireRedirect: false,
}

export default initialState
