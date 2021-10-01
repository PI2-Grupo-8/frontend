export const translateCreateVehicleErrors = (arr) => {
  if (arr.includes('code must be unique'))
    return 'O código do veículo já está em uso.';

  return 'Ocorreu um erro ao criar o veículo'
}