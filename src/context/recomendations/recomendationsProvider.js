import React from 'react';

const RecomendationContext = React.createContext();

export const RecomendationProvider = ({ children }) => {
  const [recommendations, setRecommendations] = React.useState([]);

  return (
    <RecomendationContext.Provider
      value={{
        recommendations,
        setRecommendations,
      }}
    >
      {children}
    </RecomendationContext.Provider>
  );
};

export const useRecomendationsContext = () =>
  React.useContext(RecomendationContext);
