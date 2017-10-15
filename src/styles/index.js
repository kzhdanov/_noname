import { StyleSheet } from 'react-native';

export const appCss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  }
});

export const headerCss = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  title: {
    color: '#0366d6',
  }
});

export const todoListCss = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
