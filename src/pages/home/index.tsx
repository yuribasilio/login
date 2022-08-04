/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

export default function HomePage() {
  return (
    <div className="flex flex-row w-screen h-screen justify-center items-center">
      <div className="flex w-[50%] h-screen bg-[#F7FAFC] justify-center items-center">
        <img src="./src/assets/browser.png" alt="" />
      </div>
      <div className="flex flex-col w-[50%] h-screen">
        <div className="flex w-full flex-col h-[90vh] justify-center items-center">
          <span className="flex w-[350px] text-[16px] font1">Bem vindo de volta</span>
          <span className="flex w-[350px] text-[26px] font1">Faça login na sua conta</span>
          <div className="flex flex-col w-[350px] mt-10">
            <span className="flex w-full font2 text-[16px] mb-2">E-mail</span>
            <input type="text" className="flex w-full px-5 py-3 border-[1px] border-gray-200 rounded-md outline-none" />
          </div>
          <div className="flex flex-col w-[350px] mt-1">
            <span className="flex w-full font2 text-[16px] mb-2">Senha</span>
            <input type="password" className="flex w-full px-5 py-3 border-[1px] border-gray-200 rounded-md outline-none" />
          </div>
          <div className="flex flex-row w-[350px] my-7">
            <div className="flex w-[50%]">
              <input type="checkbox" className="flex mr-2" />
              <span className="flex font2 text-[14px]">Lembre de mim</span>
            </div>
            <div className="flex w-[50%] justify-end">
              <a href="#" className="flex font2 text-[14px] text-[#2B6CB0] hover:underline">Esqueceu sua senha?</a>
            </div>
          </div>
          <div className="flex flex-col w-[350px]">
            <button type="submit" className="flex w-full px-2 py-3 justify-center rounded-md bg-[#04C45C] text-white font2 text-[16px] font-bold hover:bg-[#1de87c]">Entrar</button>
          </div>
          <div className="flex flex-col w-[350px] mt-3">
            <button type="submit" className="flex flex-row w-full px-2 py-3 justify-center items-center rounded-md bg-[#1A202C] text-white font2 text-[16px] font-bold hover:bg-[#1A202C]/80">
              <img src="./src/assets/google.png" alt="" className="flex" />
              <span className="flex ml-4">
                Ou faça login com o Google
              </span>
            </button>
          </div>
        </div>
        <div className="flex flex-row w-full h-[10vh] justify-center">
          <span className="font2 text-[16px] mr-2">Não tem conta?</span>
          <a href="#" className="font2 text-[16px] text-[#2B6CB0] hover:underline">Cadastre-se</a>
        </div>
      </div>
    </div>
  );
}
