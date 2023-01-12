import { StyledCardListUnities } from "../styled";

export interface iCardUpas {
  id: string;
  nome_fantasia: string;
  codigo_cep_estabelecimento: string;
  endereco_estabelecimento: string;
  numero_estabelecimento: number;
  bairro_estabelecimento: string;
  numero_telefone_estabelecimento: number;
}

export const CardUpas = ({
  nome_fantasia,
  onClick,
  codigo_cep_estabelecimento,
  endereco_estabelecimento,
  numero_estabelecimento,
  bairro_estabelecimento,
  numero_telefone_estabelecimento,
}: iCardUpas | any) => {
  return (
    <StyledCardListUnities onClick={onClick}>
      <h2>{nome_fantasia}</h2>
      <span>Telefone: {numero_telefone_estabelecimento}</span>
      <span>Cep: {codigo_cep_estabelecimento}</span>
    </StyledCardListUnities>
  );
};
