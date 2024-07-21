const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      chars: [],
      planets: [],
      vehicles: [],
      singleChar: null,
      singlePlanet: null,
      singleVehicle: null,
      favorites:[]
    },
    actions: {
      loadChars: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/people/");
          const data = await response.json();
          setStore({ chars: data.results });
                   
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadPlanets: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/planets/");
          const data = await response.json();
          setStore({ planets: data.results });          
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadVh: async () => {
        try {
          const response = await fetch("https://www.swapi.tech/api/vehicles/");
          const data = await response.json();
          setStore({ vehicles: data.results });
          
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadSingleChar: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/${id}`);
          const data = await response.json();
          setStore({ singleChar: data.result });
                    
          return data.result;
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadSinglePlanet: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/planets/${id}`);
          const data = await response.json();
          setStore({ singlePlanet: data.result });
                 
          return data.result;
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      loadSingleVehicle: async (id) => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/vehicles/${id}`);
          const data = await response.json();
          setStore({ singleVehicle: data.result });
                   
          return data.result;
        } catch (error) {
          console.error("Error fetching the data", error);
        }
      },
      //-------------------------fav
      addFavorite: (item) => {
        const store = getStore();
        const uniqueId = `${item.type}-${item.uid}`;
        if (!store.favorites.find(fav => fav.uniqueId === uniqueId)) {
          setStore({ favorites: [...store.favorites, { ...item, uniqueId }] });
        }
      },
      removeFavorite: (uniqueId) => {
        const store = getStore();
        setStore({ favorites: store.favorites.filter(fav => fav.uniqueId !== uniqueId) });
      }
      //-------------------------fav
    },
  };
};
export default getState;
