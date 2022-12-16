import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export function useOnFocus(callback: Function, deps: Array<any> = []) {
  return useFocusEffect(
    React.useCallback(() => {
      callback();
    }, [...deps])
  );
}

export function useOnBlur(callback: Function, deps: Array<any> = []) {
  return useFocusEffect(
    React.useCallback(() => {
      return () => callback();
    }, [...deps])
  );
}