import actionTypes from './actionTypes';

export default (state, action, index) => {
  switch (action){
    case actionTypes.TOGGLE_HIDDEN:
      return {
        isHidden: !state.isHidden,
      };

    case actionTypes.ADD_ACTIVITY:
      return {
        reserved: [...state.reserved, state.activities[index]]
      };

    case actionTypes.REMOVE_ACTIVITY:
      const actIndex = state.reserved.findIndex((reserve)=>{
        return reserve.title === state.activities[index].title;
      });
    
      if (actIndex > -1){
        state.reserved.splice(actIndex, 1);
        return{
          reserved: state.reserved,
        }
      }
      return;

    case actionTypes.ADD_FAV:
      return {
        favs: [...state.favs, state.activities[index]]
      }

    case actionTypes.REMOVE_FAV:
      const favIndex = state.favs.findIndex((reserve)=>{
        return reserve.title === state.activities[index].title;
      });
    
      if (favIndex > -1){
        state.favs.splice(favIndex, 1);
        return{
          favs: state.favs
        }
      }
      return;
    default:
      return null;
  } 
}