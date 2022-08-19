const state={
    userinfo:{
        username:'',
        token:''
    }
}

const mutations={
    setUser(state,payload){
        state.userinfo=payload
    },
    delUser(state){
        state.userinfo={
            username:'',
            token:''
        }
    }
}

const actions={

}

const getters={

}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}