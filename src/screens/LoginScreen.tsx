import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  Image,
  ScrollView,
  StatusBar,
} from 'react-native';

import { styles } from './styles';

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
      <StatusBar
        barStyle="light-content"
        backgroundColor="#000"
      />

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

      <ScrollView
        contentContainerStyle={styles.formContainer}
        keyboardShouldPersistTaps="handled"
      >
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
            onPress={() =>
              setSenhaVisivel(!senhaVisivel)
            }
          >
            <Text style={styles.olhoIcon}>
              {senhaVisivel ? '🙈' : '👁️'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.botaoEntrar}
          onPress={handleEntrar}
        >
          <Text style={styles.botaoEntrarTexto}>
            Entrar
          </Text>
        </TouchableOpacity>

        <Text style={styles.ou}>OU</Text>

        <TouchableOpacity
          style={styles.botaoCodigo}
          onPress={handleCodigoAcesso}
        >
          <Text style={styles.botaoCodigoTexto}>
            Usar um código de acesso
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleEsqueceuSenha}
        >
          <Text style={styles.esqueceuSenha}>
            Esqueceu a senha?
          </Text>
        </TouchableOpacity>

        <Text style={styles.recaptcha}>
          Esta página é protegida pelo Google
          reCAPTCHA para garantir que você não é
          um robô.
        </Text>
      </ScrollView>
    </View>
  );
}