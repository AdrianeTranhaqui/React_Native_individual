import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';
 
const VALID_EMAIL = 'usuario@email.com';
const VALID_PASSWORD = '1234';
 
export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [senhaVisivel, setSenhaVisivel] = useState(false);
 
  const handleEntrar = () => {
    if (!email.trim() || !senha.trim()) {
      Alert.alert(
        'Campos obrigatórios',
        'Por favor, preencha o email e a senha para continuar.',
        [{ text: 'OK' }]
      );
      return;
    }
 
    if (email.trim() === VALID_EMAIL && senha === VALID_PASSWORD) {
      Alert.alert(
        'Login realizado com sucesso!',
        'Bem-vindo de volta! Você entrou na sua conta Netflix.',
        [{ text: 'Continuar' }]
      );
    } else {
      Alert.alert(
        'Erro ao entrar',
        'Email ou senha incorretos. Por favor, tente novamente.',
        [{ text: 'Tentar novamente' }]
      );
    }
  };
 
  const handleEsqueceuSenha = () => {
    Alert.alert(
      'Esqueceu a senha?',
      'Acesse o site da Netflix para redefinir sua senha.',
      [{ text: 'OK' }]
    );
  };
 
  const handleCodigoAcesso = () => {
    Alert.alert(
      'Código de acesso',
      'Esta funcionalidade ainda não está disponível.',
      [{ text: 'OK' }]
    );
  };
 
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#000" />
 
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backArrow}>{'<'}</Text>
        </TouchableOpacity>
 
        <Image
            source={require('../../assets/logo.netflix.jpg')}
            style={styles.logo}
            resizeMode="contain"
        /> 
 
        <TouchableOpacity>
          <Text style={styles.ajuda}>Ajuda</Text>
        </TouchableOpacity>
      </View>
 
      {/* Formulário */}
      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Campo Email */}
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email ou número de celular"
            placeholderTextColor="#8c8c8c"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
 
        {/* Campo Senha */}
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.inputSenha]}
            placeholder="Senha"
            placeholderTextColor="#8c8c8c"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry={!senhaVisivel}
            autoCapitalize="none"
          />
          <TouchableOpacity
            style={styles.olhoButton}
            onPress={() => setSenhaVisivel(!senhaVisivel)}
          >
            <Text style={styles.olhoIcon}>{senhaVisivel ? '🙈' : '👁️'}</Text>
          </TouchableOpacity>
        </View>
 
        {/* Botão Entrar */}
        <TouchableOpacity style={styles.botaoEntrar} onPress={handleEntrar}>
          <Text style={styles.botaoEntrarTexto}>Entrar</Text>
        </TouchableOpacity>
 
        {/* OU */}
        <Text style={styles.ou}>OU</Text>
 
        {/* Botão Código de Acesso */}
        <TouchableOpacity
          style={styles.botaoCodigo}
          onPress={handleCodigoAcesso}
        >
          <Text style={styles.botaoCodigoTexto}>Usar um código de acesso</Text>
        </TouchableOpacity>
 
        {/* Esqueceu a senha */}
        <TouchableOpacity onPress={handleEsqueceuSenha}>
          <Text style={styles.esqueceuSenha}>Esqueceu a senha?</Text>
        </TouchableOpacity>
 
        {/* Texto reCAPTCHA */}
        <Text style={styles.recaptcha}>
          Esta página é protegida pelo Google reCAPTCHA para garantir que você
          não é um robô.
        </Text>
      </ScrollView>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
 
  // Header
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
  },
  backButton: {
    padding: 4,
  },
  backArrow: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '600',
  },
  logo: {
  width: 120,
  height: 40,
  },
  ajuda: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
 
  // Formulário
  formContainer: {
    paddingHorizontal: 20,
    paddingTop: 32,
  },
  inputContainer: {
    backgroundColor: '#1a1a1a',
    borderWidth: 1,
    borderColor: '#3d3d3d',
    borderRadius: 4,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    color: '#ffffff',
    fontSize: 16,
    paddingHorizontal: 16,
    paddingVertical: 18,
  },
  inputSenha: {
    paddingRight: 50,
  },
  olhoButton: {
    position: 'absolute',
    right: 14,
    padding: 4,
  },
  olhoIcon: {
    fontSize: 20,
  },
 
  // Botão Entrar
  botaoEntrar: {
    backgroundColor: '#E50914',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  botaoEntrarTexto: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.3,
  },
 
  // OU
  ou: {
    color: '#8c8c8c',
    textAlign: 'center',
    fontSize: 14,
    marginBottom: 20,
    letterSpacing: 1,
  },
 
  // Botão Código de Acesso
  botaoCodigo: {
    backgroundColor: '#2d2d2d',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 28,
  },
  botaoCodigoTexto: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },
 
  // Esqueceu a senha
  esqueceuSenha: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginBottom: 48,
  },
 
  // reCAPTCHA
  recaptcha: {
    color: '#8c8c8c',
    fontSize: 13,
    lineHeight: 18,
  },
});