import create from 'zustand';
import {ExpoPushToken} from "expo-notifications";

interface TokenStore {
	token: ExpoPushToken | undefined;
	
	setToken: (token: ExpoPushToken) => void;
	getToken: () => ExpoPushToken | undefined;
}

const useTokenStore = create<TokenStore>((set, get) => ({
	token: undefined,
	
	setToken: (token) => set({token}),
	
	getToken: () => get().token
}));

export default useTokenStore;