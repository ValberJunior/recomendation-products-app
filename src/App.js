import React from 'react';
import Form from './components/Form/Form';
import RecommendationList from './components/RecommendationList/RecommendationList';
import { RecomendationProvider } from './context/recomendations/recomendationsProvider';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <RecomendationProvider>
        <section className="bg-gray-100 min-h-screen flex flex-col justify-start items-center">
          <div className="w-2/4 lg:w-1/4 text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold my-20 leading-tight">
              Recomendador de Produtos{' '}
              <span className="text-cyan-500">RD Station</span>
            </h1>
          </div>
          <div className="bg-white p-8 rounded-lg w-full md:w-3/4 lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="col-span-2 mb-4">
              <p className="text-xl text-gray-900">
                Bem-vindo ao Recomendador de Produtos RD Station. Aqui você pode
                encontrar uma variedade de produtos da RD Station, cada um
                projetado para atender às necessidades específicas do seu
                negócio. De CRM a Marketing, de Conversas a Inteligência
                Artificial, temos uma solução para ajudar você a alcançar seus
                objetivos. Use o formulário abaixo para selecionar suas
                preferências e funcionalidades desejadas e receba recomendações
                personalizadas de produtos que melhor atendam às suas
                necessidades.
              </p>
            </div>
            <div className="w-full col-span-2 mb-4 md:col-span-1">
              <Form />
            </div>
            <div className="w-full col-span-2 mb-4  md:col-span-1">
              <RecommendationList />
            </div>
          </div>
        </section>
      </RecomendationProvider>
    </>
  );
}

export default App;
