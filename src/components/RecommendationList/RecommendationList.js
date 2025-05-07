import React from 'react';
import { BsStars } from 'react-icons/bs';
import { useRecomendationsContext } from '../../context';

function RecommendationList() {
  const { recommendations } = useRecomendationsContext();
  return (
    <div>
      <h2 className="text-lg font-bold mb-4">Lista de Recomendações:</h2>

      {recommendations.length === 0 && <p>Nenhuma recomendação encontrada.</p>}

      <ul>
        {recommendations.map((recommendation, index) => (
          <li
            key={index}
            className="mb-2 p-2 rounded-lg bg-slate-100 flex align-center justify-start gap-2"
          >
            <BsStars />
            {recommendation.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendationList;
