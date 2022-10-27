//auth.js
import axios from 'axios'
import { setHeaderToken, removeHeaderToken } from '@/utils/auth'
// import { utils } from '../../utils/auth'
export default {
    state: {
        user: null,
        isLoggedIn: false,
    },
    mutations: {
        set_user(state, data) {
            state.user = data
            state.isLoggedIn = true
        },
        reset_user(state) {
            state.user = null
            state.isLoggedIn = false
        }
    },
    getters: {
        isLoggedIn(state) {
            return state.isLoggedIn
        },
        user(state) {
            return state.user
        }
    },
    actions: {
        login({ dispatch, commit }, data) {
            return new Promise((resolve, reject) => {
                axios.defaults.baseURL = "http://172.166.122.218/vue-service/index.php/";
                axios.post('Auth/login', data)
                    .then(response => {
                        if(response.data.status != 401){

                            const token = response.data.token
                            localStorage.setItem('token', token)
                            setHeaderToken(token)
                            dispatch('get_user')
                        }
                        resolve(response)
                    })
                    .catch(err => {
                        commit('reset_user')
                        localStorage.removeItem('token')
                        reject(err)
                    })
            })
        },
        async get_user({ commit }) {
            if (!localStorage.getItem('token')) {
                console.log('asy:' + commit);
                return
            }
            try {
                axios.defaults.baseURL = "http://172.166.122.218/vue-service/index.php/";
                let response = await axios.get('Auth/profile')
                commit('set_user', response.data.data)
                console.log(response.data);
                if(response.data === false){
                //  commit('reset_user')
                localStorage.removeItem('token')
                }

            } catch (error) {
                commit('reset_user')
                removeHeaderToken()
                localStorage.removeItem('token')
                delete axios.defaults.headers.common["Authorization"];
                return error
            }
        },
        logout({ commit }) {
            return new Promise((resolve) => {
                commit('reset_user')
                localStorage.removeItem('token')
                // removeHeaderToken()
                
                resolve()
            })
        }
    }
}
