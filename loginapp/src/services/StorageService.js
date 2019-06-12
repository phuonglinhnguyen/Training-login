export const getUser = () => {
    const user = localStorage.getItem('user');
    return JSON.parse(user)
};

export const logOut = () => {
    localStorage.clear();
};

export const setUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user))
};


// export default className {}
// export className {}
// export const nameFunc = () => 

// import
// import
// import