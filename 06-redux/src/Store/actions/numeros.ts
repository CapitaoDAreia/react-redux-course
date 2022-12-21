//Action creator
export function alterarNumMinimo(newNumber: number) {
  return {
    type: "ALTERA_NUM_MIN",
    payload: newNumber,
  };
}

export function alteraNumMaximo(newNumber: number) {
  return {
    type: "ALTERA_NUM_MAXIMO",
    payload: newNumber,
  };
}
