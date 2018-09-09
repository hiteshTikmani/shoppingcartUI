export default function (state = null, action)
{
    switch(action.type) {
        case 'Edit_Selected' : 
            return action.payload;
         default:
            return state;
    }
}