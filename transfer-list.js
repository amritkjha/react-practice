import React from 'react';

export default function TransferList() {
  const [availableList, setAvailableList] = React.useState([
    {
      id: 1,
      name: 'Baleno',
      checked: false
    },
    {
      id: 2,
      name: 'Ignis',
      checked: false
    },
    {
      id: 3,
      name: 'Grand vitara',
      checked: false
    },
    {
      id: 4,
      name: 'XL6',
      checked: false
    }
  ]);
  const [selectedList, setSelectedList] = React.useState([
    {
      id: 5,
      name: 'Fronx',
      checked: false
    },
    {
      id: 6,
      name: 'Ciaz',
      checked: false
    }
  ]);
  const handleAvailableCheckboxChange = (id) => {
    let newList = availableList.map((item) => {
      if(item.id == id) return {...item, checked: !item.checked}
      else return item;
    });
    setAvailableList(prev=>newList);
  }
  const handleSelectedCheckboxChange = (id) => {
    let newList = selectedList.map((item) => {
      if(item.id == id) return {...item, checked: !item.checked}
      else return item;
    });
    setSelectedList(prev=>newList);
  }
  const handleSelectedToAvailable = () => {
    let newListSelected = selectedList.filter(item => item.checked == false);
    let newItemsAvailable = selectedList.filter(item => item.checked == true);
    newItemsAvailable = newItemsAvailable.map(item => ({...item, checked: false}));
    // alert(newListSelected, newItemsAvailable);
    setSelectedList(newListSelected);
    setAvailableList([...availableList, ...newItemsAvailable]);
  }
  const handleAvailableToSelected = () => {
    let newListAvailable = availableList.filter(item => item.checked == false);
    let newItemsSelected = availableList.filter(item => item.checked == true);
    newItemsSelected = newItemsSelected.map(item => ({...item, checked: false}));
    // alert(newListAvailable, newItemsAvailable);
    setAvailableList(newListAvailable);
    setSelectedList([...selectedList, ...newItemsSelected]);
  }
  const containerStyles = {
    display: 'flex',
    fontSize: '30px',
  }
  const listContainer = {
    border: '1px solid #A9A9A9',
    padding: '6px',
    margin: '0 6px'
  }
  const buttonContainer = {
    display: 'flex',
    flexDirection: 'column'
  }
  const checkboxStyles = {
    width: '21px',
    height: '21px',
    marginRight: '9px'
  }
  return (
    <div style={containerStyles}>
      <div style={listContainer}>
        {availableList?.map(car => {
          return (
            <div key={car.id}>
              <input type="checkbox" style={checkboxStyles} checked={car.checked} onChange={()=>handleAvailableCheckboxChange(car.id)} />
              {car.name}
            </div>
          );
        })}
      </div>
      <div style={buttonContainer}>
        <button onClick={handleSelectedToAvailable}>{'<'}</button>
        <button onClick={handleAvailableToSelected}>{'>'}</button>
      </div>
      <div style={listContainer}>
        {selectedList?.map(car => {
          return (
            <div key={car.id}>
              <input type="checkbox" style={checkboxStyles} value={car.checked} onChange={()=>handleSelectedCheckboxChange(car.id)} />
              {car.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}
