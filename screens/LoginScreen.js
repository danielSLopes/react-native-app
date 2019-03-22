import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button
} from 'react-native';
import { bold, gray } from 'ansi-colors';

export default class LoginScreen extends Component {

  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);
    this.state = {
      login: "Email",
      senha: 'Senha',
      textLogin: null,
      textSenha: null,
      placeholderUsuario: 'Usuário',
      placeholderSenha: 'Senha'
    };
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Image source={require('../assets/images/dom-pedro-logo-inv.png')} style={styles.logo} />
        <View style={styles.SectionStyle}>
          <Icon
            name='user'
            size={22}
            color='#233149'
          />
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="transparent"
            placeholder={this.state.placeholderUsuario}
            placeholderTextColor="#233149"
            autoCapitalize="none"
            onChangeText={(textLogin) => this.setState({ textLogin })}
            value={this.state.textLogin}
            onFocus={(placeholderUsuario) => this.setState({ placeholderUsuario: null})}
            onBlur={(placeholderUsuario) => this.setState({ placeholderUsuario: 'Usuário'})}
          />
        </View>

        <View style={styles.SectionStyle}>
          <Icon style={styles.icon}
            name='unlock-alt'
            size={22}
            color='#233149'
          />
          <TextInput
            style={styles.inputText}
            underlineColorAndroid="transparent"
            placeholder={this.state.placeholderSenha}
            placeholderTextColor="#233149"
            autoCapitalize="none"
            onChangeText={(textSenha) => this.setState({ textSenha })}
            value={this.state.textSenha}
            onFocus={(placeholderSenha) => this.setState({ placeholderSenha: null})}
            onBlur={(placeholderSenha) => this.setState({ placeholderSenha: 'Senha'})}
          />
        </View>
        <TouchableOpacity
          style={styles.buttonEntrar}
          onPress={() => navigate('Home')}>
          <Text style={styles.submitButtonText}>Entrar</Text>
        </TouchableOpacity>
        <Text style={styles.textoCrieAgora}>
          Não tem conta? Crie agora!
        </Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    justifyContent: "center",
    alignItems: "center",
  },
  SectionStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 40,
    margin: 10,
    borderBottomColor: '#233149',
    borderBottomWidth: 1,
    width: '90%'
  },
  logo: {
    marginBottom: 40,
    width: 193,
    height: 110
  },
  inputText: {
    margin: 10,
    height: 30,
    width: '85%',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 20,
  },
  buttonEntrar: {
    marginTop: 30,
    backgroundColor: 'rgb(245, 102, 6)',
    width: '90%',
    padding: 10,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20
  },
  textoCrieAgora: {
    margin: 10,
    fontSize: 12,
    color: '#a5a5a5',
  }
});