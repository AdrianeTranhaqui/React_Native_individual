import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },

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
    color: '#fff',
    fontSize: 22,
    fontWeight: '600',
  },

  logo: {
    width: 120,
    height: 40,
  },

  ajuda: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },

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
    color: '#fff',
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

  botaoEntrar: {
    backgroundColor: '#E50914',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 20,
  },

  botaoEntrarTexto: {
    color: '#fff',
    fontSize: 17,
    fontWeight: '700',
  },

  ou: {
    color: '#8c8c8c',
    textAlign: 'center',
    marginBottom: 20,
  },

  botaoCodigo: {
    backgroundColor: '#2d2d2d',
    borderRadius: 4,
    paddingVertical: 16,
    alignItems: 'center',
    marginBottom: 28,
  },

  botaoCodigoTexto: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },

  esqueceuSenha: {
    color: '#fff',
    textAlign: 'center',
    textDecorationLine: 'underline',
    marginBottom: 48,
  },

  recaptcha: {
    color: '#8c8c8c',
    fontSize: 13,
    lineHeight: 18,
  },
});