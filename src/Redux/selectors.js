export const darkThemeSelector = (state) => {
    return state.theme.darkTheme
}

export  const favoriteMovieSelector = (state) => {
    let array = state.favouriteFilms.favouriteFilms
    let size = 20;
    let subarray = [];

    if(array.length <= size) {
        for (let i = 0; i < array.length; i++){
            subarray.push(array[i])
        }
        return subarray
    }else{
        for (let i = 0; i <Math.ceil(array.length/size); i++){
            subarray[i] = array.slice((i*size), (i*size) + size);
        }

        return subarray
    }
}
