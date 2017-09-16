import React, { Component } from 'react';
import {ScrollView} from 'react-native';
import {Container,
        Header,
        Content,
        Left,
        Body,
        Right,
        Title,
        List,
        ListItem,
        Thumbnail,
        Text} from 'native-base';

import Button from './../component/button';
import InputText from './../component/inputText';
import OsItem from './../component/OsItem';

export default class Index extends Component {

  date = [
    'Juni 15, 2017'
  ];

  constructor(props) {
    super(props);
    this.state = {
      item: '',
      data: [
      ]
    };
  };

  handleSetText = (text) => {
		  this.setState({item: text});
  };

	handleAdd= (event) => {
		event.preventDefault()
  	if (this.state.item == '') {
  		return;
  };

  	const array = [...this.state.data]
    array.push(this.state.item)
    this.setState({
    	item: '',
    	data: array
  	});
  }

  renderHeader(){
    return(
      <Header>
        <Left/>
        <Body>
          <Title>Title</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.handleAdd}/>
        </Right>
      </Header>
    );
  }

  renderList(){
    return(
      <ScrollView>
        <List dataArray={this.state.data}
          renderRow={(data) =>
            <ListItem>
              <Thumbnail square size={80} source={require('./../img/avatar.png')} />
              <Body>
                <Text>{data}</Text>
                {this.date.map(date => <OsItem key={date} date={date}/>)}
              </Body>
            </ListItem>
          }>
        </List>
      </ScrollView>
    );
  }

  render() {
    return (
      <Container>
        {/*HEADER*/}
        {this.renderHeader()}
        <Content>
          <InputText
            onChangeText={(text)=>this.handleSetText(text)}
            value={this.state.item}
            placeholder='type new task here . . . '
          />
          {/*LIST*/}
          {this.renderList()}
        </Content>
      </Container>
    );
  }
}
