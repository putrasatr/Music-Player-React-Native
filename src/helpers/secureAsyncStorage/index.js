import AsyncStorage from "@react-native-community/async-storage"

export default class SecureAsyncStorage {
    async setItem(key, value) {
        try {
            await AsyncStorage.setItem(key, value)
            console.log(value)
            return new Promise(resolve => {
                resolve(true)
            })
        } catch (error) {
            console.log("Err set item ", error)
        }
    }
    async getItem(key) {
        try {
            const value = await AsyncStorage.getItem(key)
            return new Promise(resolve => {
                if (value)
                    resolve(value)
                resolve(false)
            })
        } catch (error) {
            console.log("Err get item ", error)
        }

    }
    async removeItem(key) {
        try {
            await AsyncStorage.removeItem(key)
            return new Promise(resolve => {
                resolve(true)
            })
        } catch (error) {
            console.log("Err set item ", error)
        }
    }
}