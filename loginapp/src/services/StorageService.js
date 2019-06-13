export const getUser = () => {
    const user = sessionStorage.getItem('user');
    return JSON.parse(user)
};

export const logOut = () => {
    sessionStorage.clear();
};

export const setUser = (user) => {
    sessionStorage.setItem('user', JSON.stringify(user))
};


// export default className {}
// export className {}
// export const nameFunc = () => 

// import
// import
// import