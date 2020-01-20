import { RSAA, getJSON} from 'redux-api-middleware';

export const LOAD_PROFILE = '@@profile/LOAD_PROFILE';

export const START_PROFILE_LOADING = '@@message/START_PROFILE_LOADING';
export const SUCCESS_PROFILE_LOADING = '@@message/SUCCESS_PROFILE_LOADING';
export const ERROR_PROFILE_LOADING = '@@message/ERROR_PROFILE_LOADING';

export const loadProfile = () => ({
   [RSAA]: {
       endpoint: '/api/profile.json',
       method: 'GET',
       types: [
           START_PROFILE_LOADING,
           {
               type: SUCCESS_PROFILE_LOADING,
               payload: (action, state, res) => getJSON(res).then(
                   json => json,
               ),
           },
           ERROR_PROFILE_LOADING,
       ],
   },
});
