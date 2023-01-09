export interface iCardUpas {
  nome_fantasia: string;
  codigo_cep_estabelecimento: number;
  endereco_estabelecimento: string;
  numero_estabelecimento: number;
  bairro_estabelecimento: string;
  numero_telefone_estabelecimento: number;
}
export const CardUpas = (
  {nome_fantasia,
  codigo_cep_estabelecimento,
  endereco_estabelecimento,
  numero_estabelecimento,
  bairro_estabelecimento,
  numero_telefone_estabelecimento}: iCardUpas | any) => {
  return (
  <li>
    <h2>{nome_fantasia}</h2>
    <span>{codigo_cep_estabelecimento}</span>
    <p>{endereco_estabelecimento}</p>
    <p>{numero_estabelecimento}</p>
    <p>{bairro_estabelecimento}</p>
    <span>{numero_telefone_estabelecimento}</span>
  </li>
  );
};

