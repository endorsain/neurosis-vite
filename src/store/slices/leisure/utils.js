export const loadFromLocalStorage = () => {
  try {
    const savedState = localStorage.getItem('leisure');
    const parsed = savedState ? JSON.parse(savedState) : { list: [] };

    return {
      list: parsed.list || [],
      loading: false,
      error: null,
    };
  } catch (error) {
    console.log(error);
    return {
      list: [],
      loading: false,
      error: null,
    };
  }
};

export const saveToLocalStorage = (key, state) => {
  try {
    const { list } = state;
    localStorage.setItem(key, JSON.stringify({ list }));
  } catch (error) {
    console.log(error);
  }
};
