import React, { Component } from 'react';
import { Dropdown, Button, Card } from 'semantic-ui-react';
import {
  MedicinePickerContainer,
  InputFieldWrapper,
  BucketContainer,
  CartWrapper,
  SubstituteWrapper,
} from './styles.MedicinePicker.js';

const medicineOptions = [
  { key: 1, value: 'kjasjlajl', text: 'jhdhkskhds' },
  { key: 2, value: 'kjasjlajl', text: 'jhdhkskhds' },
  { key: 3, value: 'kjasjlajl', text: 'jhdhkskhds' },
];

const radiusOptions = [
  { key: 1, value: 5, text: '5 KM' },
  { key: 2, value: 10, text: '10 KM' },
  { key: 3, value: 15, text: '15 KM' },
  { key: 4, value: 20, text: '20 KM' },
];

class MedicinePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      medicineFieldText: '',
      locationFieldText: '',
      searchRadiusFieldText: '',
    };
  }

  onChangeSelection = fieldName => (event, { value }) => {
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      [`${fieldName}`]: value,
    }));
  };

  onChangeTextField = fieldName => (event, { value }) => {
    console.log(value);
    this.setState(prevState => ({
      ...prevState,
      [`${fieldName}`]: value,
    }));
  };

  render() {
    const medicineList = this.props.medicineList;

    return (
      <MedicinePickerContainer>
        <InputFieldWrapper>
          <Dropdown
            style={{
              margin: '0px 16px 0px 0px',
            }}
            placeholder="Select Medicine"
            fluid
            search
            selection
            options={medicineOptions}
            onChange={this.onChangeSelection('medicineFieldText')}
            onSearchChange={this.onChangeTextField('medicineFieldText')}
            value={this.state.medicineFieldText}
          />
          <Dropdown
            style={{
              margin: '0px 16px 0px 0px',
            }}
            placeholder="Select Location"
            fluid
            search
            selection
            options={medicineOptions}
            onChange={this.onChangeSelection('locationFieldText')}
            onSearchChange={this.onChangeTextField('locationFieldText')}
            value={this.state.locationFieldText}
          />
          <Dropdown
            style={{
              margin: '0px 16px 0px 0px',
            }}
            placeholder="Select search radius"
            selection
            options={radiusOptions}
            onChange={this.onChangeSelection('searchRadiusFieldText')}
            value={this.state.searchRadiusFieldText}
          />
          <Button.Group>
            <Button>Reset</Button>
            <Button.Or text="" />
            <Button positive>Add</Button>
          </Button.Group>
        </InputFieldWrapper>
        <BucketContainer>
          <CartWrapper>
            <Card.Group>
              {medicineList.map((medicine, index) => (
                <Card key={index}>
                  <Card.Content>
                    <Card.Header>{medicine.name}</Card.Header>
                    <Card.Meta>{medicine.name}</Card.Meta>
                    <Card.Description>{medicine.description}</Card.Description>
                  </Card.Content>
                  <Card.Content extra>
                    <div className="ui two buttons">
                      <Button basic color="green">
                        Find Substitute
                      </Button>
                      <Button basic color="red">
                        Remove
                      </Button>
                    </div>
                  </Card.Content>
                </Card>
              ))}
            </Card.Group>
          </CartWrapper>
          <SubstituteWrapper>fdaa</SubstituteWrapper>
        </BucketContainer>
      </MedicinePickerContainer>
    );
  }
}

export default MedicinePicker;
