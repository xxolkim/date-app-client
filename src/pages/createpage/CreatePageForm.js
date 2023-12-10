import styled from "@emotion/styled";
import React from "react";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import FormDrag from "./FormDrag";

const CreatePageFormTag = styled.form`
  position: relative;
  width: 100%;
  height: 100%;
`;

const ImageContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
`;

const ImageInput = styled.input`
  opacity: 0;
  position: absolute;
  top: 50;
  left: 50;
  width: 80%;
  height: 70%;
  border-radius: 20px;
`;

const ImageButton = styled.div`
  background-color: rgba(120, 120, 120, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 70%;
  color: grey;

  border: 1px solid #ccc;
  border-radius: 20px;
`;

const CreatePageForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onValid = data => {
    console.log(data);
  };
  return (
    <CreatePageFormTag onSubmit={handleSubmit(onValid)}>
      <ImageContainer>
        <ImageButton>
          <ImageInput type="file" {...register("image")} />
          <FontAwesomeIcon
            icon={faPlus}
            style={{ width: 30, height: 30, color: "#fff" }}
          />
          사진을 추가 해주세요.
        </ImageButton>
      </ImageContainer>
      <FormDrag register={register} errors={errors} />
    </CreatePageFormTag>
  );
};

export default CreatePageForm;
