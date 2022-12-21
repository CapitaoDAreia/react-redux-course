//Action creator
export function alterarNumMinimo(newNumber: number){
    return{
        type: 'ALTERA_NUM_MIN',
        payload: newNumber
    }
}