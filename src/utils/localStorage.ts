import AsyncStorage from "@react-native-async-storage/async-storage";

export const LS = {
  getItem: async (LS_KEY: string) => {
    try {
      const value = await AsyncStorage.getItem(LS_KEY);
      return value;
    } catch (error) {
      console.log("error getItem LS ", error);
    }
  },

  setItem: async (LS_KEY: string, value: string) => {
    try {
      AsyncStorage.setItem(LS_KEY, value);
    } catch (error) {
      console.log("error setItem LS ", error);
    }
  },

  removeItem: async (LS_KEY: string) => {
    try {
      AsyncStorage.removeItem(LS_KEY);
    } catch (error) {
      console.log("error removeItem LS ", error);
    }
  },
};
