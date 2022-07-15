import React, { useState } from "react";
import { useMutation } from "react-query";

import appClient from "@/api";

import styled from "@emotion/styled";
import Header from "@/components/Header";
import PageTitle from "@/components/PageTitle";
import LabeledInput from "@/components/LabeledInput";
import Button from "@/components/Button";
import { REGEX } from "@/constants";

type SignUpMemberInfo = {
  email: string;
  username: string;
  password: string;
};

export const SignUpPage = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { mutate: createMember } = useMutation(
    ({ username, email, password }: SignUpMemberInfo) => {
      return appClient
        .post(`/members`, {
          username,
          email,
          password,
        })
        .then((response) => response.data);
    },
    {
      onSuccess: () => {
        alert("회원가입 성공!");
      },
      onError: (error) => {
        console.log(error);
      },
    }
  );

  const handleSignupClick = () => {
    if (!REGEX.EMAIL.test(email)) {
      alert("유효하지 않은 이메일입니다.");
      return;
    }

    if (!REGEX.USERNAME.test(username)) {
      alert("이름은 한글, 영어, 숫자만 가능합니다.");
      return;
    }

    if (!REGEX.PASSWORD.test(password)) {
      alert("비밀번호는 최소 하나 이상의 알파벳과 숫자로 구성해야 합니다.");
      return;
    }

    if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    }

    createMember({ email, username, password });
  };

  return (
    <>
      <Header align="center">
        <PageTitle>회원가입</PageTitle>
      </Header>
      <StyledForm>
        <LabeledInput
          labelText="이메일"
          value={email}
          setValue={setEmail}
          placeholder="woowa@gmail.com"
          pattern={REGEX.EMAIL.source}
        />
        <LabeledInput
          labelText="이름"
          value={username}
          setValue={setUsername}
          placeholder="2 ~ 20자 사이의 이름을 입력해주세요."
          pattern={REGEX.USERNAME.source}
        />
        <LabeledInput
          labelText="비밀번호"
          type="password"
          value={password}
          setValue={setPassword}
          placeholder="영어, 숫자 조합의 8 ~ 20자"
          pattern={REGEX.PASSWORD.source}
        />
        <LabeledInput
          labelText="비밀번호 확인"
          type="password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          pattern={REGEX.PASSWORD.source}
        />
        <Button type="submit" onClick={handleSignupClick}>
          확인
        </Button>
      </StyledForm>
    </>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;
