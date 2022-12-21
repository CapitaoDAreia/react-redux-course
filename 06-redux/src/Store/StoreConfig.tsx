import { legacy_createStore as createStore, combineReducers } from 'redux' //O create store foi deprecado, recomenda-se usar o configStore instead

/*
    importamos o createStore e o combineReducers

    com o combineReducers criamos nossos reducers já combinados, alocados todos em um só lugar

    depois disso, criamos uma função chamada storeConfig e retornamos nela
    o createStore passando para ele os nossos reducers combinados

    Usamos essa função storeConfig no nosso index.tsx para instanciar uma variável store e alimentar o nosso provider

*/

const reducers = combineReducers({
    numeros: function(state: any, action: any){
        return {
            min: 7,
            max: 31
        }
    }, 

    ficticio: function(state: any, action: any){
        return ['Igor', 'Daniel']
    }
})

function storeConfig(){
    return createStore(reducers)
}

export default storeConfig