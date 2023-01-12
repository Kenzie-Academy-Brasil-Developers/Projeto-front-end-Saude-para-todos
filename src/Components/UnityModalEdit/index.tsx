import React, { useContext, useEffect } from "react";
import { UnitiesContext } from "../../Providers/unitiesContext";
// import { ContainerForm, FormModalUser, StyledDivModalUnitiesUpa, StyledSectionModalUnitiesUpa } from "./syle";
// import imagem from "../../images/hospital.png"
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { iUnity } from "../../Providers/@types";

export const UnityModalEdit = () => {

  const { singleUnity, editUnity, setModalEditUnity } = useContext(UnitiesContext);
  // const unityId = singleUnity?.id

  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm<iUnity>({
  //   mode: "onChange",
  //   // resolver: yupResolver(PageUserSchema),
  // });
  
  // const submit:SubmitHandler<iRegisterFormValues>=(formData) => {
    
  //   // editUnity(unityId, formData)
  // }

  return (

    <></>

        // <StyledDivModalUnitiesUpa>
        //   <StyledSectionModalUnitiesUpa>
        //     <button className="closeModal" onClick={() => setModalEditUnity(false)} >+</button>
            
        //     {/* <figure>
        //     <img src={imagem} alt="" />
        //     </figure>
        //     <h2>{singleUnity?.nome_fantasia}</h2>
        //     <span>Telefone: {singleUnity?.numero_telefone_estabelecimento}</span>
        //     <p>Rua: {singleUnity?.endereco_estabelecimento}</p>
        //     <p>N°{singleUnity?.numero_estabelecimento}</p>
        //     <p>Bairro: {singleUnity?.bairro_estabelecimento}</p>
        //     <span>Cep: {singleUnity?.codigo_cep_estabelecimento}</span>
        //     <section>
        //       <button onClick={ () => editUnity(unityId !== undefined ? unityId : 0)} >Editar unidade</button>
        //     </section> */}
           
        // {/* <ContainerForm>
        //     <FormModalUser onSubmit={handleSubmit(submit)}>

        //     <input
        //       type="text"
        //       placeholder={singleUnity?.nome_fantasia}
        //       {...register("nome_fantasia")}
        //     />
        
        //     <input
        //       type="number"
        //       placeholder={singleUnity?.numero_telefone_estabelecimento}
        //       {...register("numero_telefone_estabelecimento")}
        //     />

        //     <input
        //       type="text"
        //       placeholder={singleUnity?.endereco_estabelecimento}
        //       {...register("endereco_estabelecimento")}
        //     />

        //     <input
        //       type="number"
        //       placeholder={singleUnity?.numero_estabelecimento}
        //       {...register("numero_estabelecimento")}
        //     />

        //     <input
        //       type="text"
        //       placeholder={singleUnity?.bairro_estabelecimento}
        //       {...register("bairro_estabelecimento")}
        //     />
            
        //     <input
        //       type="number"
        //       placeholder={singleUnity?.codigo_cep_estabelecimento}
        //       {...register("codigo_cep_estabelecimento")}
        //     />

        //     <DivButton>
        //     {editModal && <LinkUser to={"/home"}> Cancelar </LinkUser>}
        //     {editModal && <StyledButton type="submit">Enviar</StyledButton>}
        //     </DivButton>
        //   </FormModalUse>
        // </ContainerForm> */}


        //   </StyledSectionModalUnitiesUpa>
          
        // </StyledDivModalUnitiesUpa>
   
  );
};
