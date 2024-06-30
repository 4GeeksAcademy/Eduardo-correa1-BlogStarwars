const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      cards: [],
    },
    actions: {
      loadCards: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          const data = await response.json();
          setStore({ cards: data });
		  console.log(data)
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
    },
  };
};
export default getState;
