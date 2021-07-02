import MaterialTable from 'material-table';
import React, { useEffect, useState } from 'react';

const ProductList = () => {

    const [products, setProducts] = useState([])
    const [refresh, setRefresh] = useState(false);
    useEffect(()=>{
        fetch('http://216.137.185.146:5000/products/').then(res => res.json())
        .then(result => {
            setProducts(result)
        })
    }, [refresh])

    return (
        <MaterialTable
      title="Products Table"
      columns={[
        { title: 'Name', field: 'name' },
        { title: 'Brand', field: 'brand' },
        { title: 'Type', field: 'type' },
        { title: 'Gender', field: 'gender' },
        { title: 'Description', field: 'description' },
        { title: 'Price', field: 'discount' },
        { title: 'Tag', field: 'tag' },
        { title: 'Image', render: rowData => <img height="40px" src={`http://216.137.185.146:5000/getPhoto/${rowData.img}`} alt="img"/> },
        
      ]}
      data={products}        
      actions={[
        // {
        //   icon: 'save',
        //   tooltip: 'Save User',
        //   onClick: (event, rowData) => alert("You saved " + rowData.name)
        // },
        {
          icon: 'delete',
          tooltip: 'Delete User',
          onClick: (event, rowData) => {
              fetch(`http://216.137.185.146:5000/deleteProduct/${rowData.img}`).then(res => res.json()).then(result => {
                  if(result){
                      alert('deleted successful!');
                      setRefresh(!refresh)
                  }else{
                      alert('deleted failed');
                  }
              })
          }
        }
      ]}
      options={{
        search: true,
        exportButton: true,
        // exportAllData: true,
        headerStyle: {
          backgroundColor: '#FAFBFF',
          color: '#CACED1'
        },
        rowStyle: {
          backgroundColor: "#FBFCFE",
          color: '#343434'

        },
        exportButton: {
          csv: true,
          pdf: false
        }
        ,
        
          paging:true,
          pageSize:50,       // make initial page size
          emptyRowsWhenPaging: true,   //to make page size fix in case of less data rows
          pageSizeOptions:[50,100,200,300,400,500],    // rows selection options
        
      }}
    />
    );
};

export default ProductList;