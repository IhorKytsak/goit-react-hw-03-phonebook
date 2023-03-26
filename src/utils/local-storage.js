export const getlocalStorageData = item => {
  const contacts = localStorage.getItem(item);

  return JSON.parse(contacts);
};

export const setlocalStorageData = (item, contacts) => {
  localStorage.setItem(item, JSON.stringify(contacts));
};

export const LSItem = 'contacts';
