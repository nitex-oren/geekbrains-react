import update from 'react-addons-update';
import { LOAD_PROFILE } from '../actions/profileActions';
import { SUCCESS_PROFILE_LOADING, START_PROFILE_LOADING,  ERROR_PROFILE_LOADING } from "../actions/profileActions";

const initialStore = {
    profile: {},
    isLoading: true,
    
};


export default function profileReducer(store = initialStore, action) {
    switch (action.type) {
        case START_PROFILE_LOADING: {
            return update(store, {
               isLoading: { $set: true },
            });
        }
        case SUCCESS_PROFILE_LOADING: {
            const profile = {};
            action.payload.forEach(msg => {
                const { name, mail, tel } = msg;
                profile[msg.id] = { name, mail, tel };
            });
            
            return update(store, {
                profile: { $set: profile[1] },
                isLoading: { $set: false },
            });
        }
        case ERROR_PROFILE_LOADING: {
            return update(store, {
                isLoading: { $set: false },
            });
        }
 
        
        default:
            return store;
    }
}
