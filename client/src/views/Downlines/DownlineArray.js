export default () => {
  const DownlineArray = [

    {
        name: 'Downline1',
        total: 10000,
          topEarners:[
            {
             name: 'joe',
             percent: 40
            },
            {
             name:'jill',
             percent: 20
            },
            {
             name:'marcus',
             percent:12
            },
            {
             name:'phil',
             percent: 8
           }
         ]
    },

    {
        name:'Downline2',
        total: 9000,
        topEarners: [
          {
            name: 'karen',
            percent: 35
          },
          {
            name:'jerry',
            percent: 25
          },
          {
            name:'sarah',
            percent:10
          },
          {
            name:'kris',
            percent: 10
          }
        ]
    },

    {
        name:'Downline3',
        total: 6000,
        topEarners:[
          {
            name: 'mike',
            percent: 50
          },
          {
            name:'ellie',
            percent: 22
          },
          {
            name:'john',
            percent:15
          },
          {
            name:'alex',
            percent: 11
          }
        ]
    },

    {
        name:'Downline4',
        total: 4000,
        topEarners: [
          {
            name: 'terry',
            percent: 25
          },
          {
            name:'lance',
            percent: 23
          },
          {
            name:'molly',
            percent:17
          },
          {
            name:'crazyPete',
            percent: 5
          }
        ]
    }



  ];
  return DownlineArray;
}
