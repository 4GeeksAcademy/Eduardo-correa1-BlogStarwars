const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      chars: [],
      planets: [],
      vehicles: [],
    },
    actions: {
      loadChars: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          const data = await response.json();
          setStore({ chars: data.results });
          console.log(data.results);
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          const data = await response.json();
          setStore({ planets: data.results });
          console.log(data.results);
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadVh: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          const data = await response.json();
          setStore({ vehicles: data.results });
          console.log(data.results);
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
    },
  };
};
export default getState;
