const image1URL = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsBkPW5vsWNpbzgD_sTSeLP9wAEK3uMhwe4YaVZkXXzkKCE12w';
const image2URL = 'https://i.ebayimg.com/images/g/UjIAAOSwzgBY0P2D/s-l300.jpg';
const image3URL = 'https://www.slaters.co.uk/media/catalog/product/cache/1/thumbnail/1920x2560/17f82f742ffe127f42dca9de82fb58b1/w/h/white-and-blue-floral-print-long-sleeve-shirt-33692106-01.874.jpg';
const image4URL = 'https://4.imimg.com/data4/JV/AO/MY-27643486/check-pattern-shirt-500x500.jpg';

const initialState = {products: [
    { 'imageURL': image1URL, 'name': 'Cotton Shirt', 'style': 'MS13KT1906', 'color': 'blue', 'size': 's', 'price': 11, 'qty': 1 },
    { 'imageURL': image2URL, 'name': 'Print girls tee', 'style': 'MS13KT1906', 'color': 'pink', 'size': 's', 'price': 17, 'qty': 1 },
    { 'imageURL': image3URL, 'name': 'Flower pattern shirt', 'style': 'MS13KT1906', 'color': 'blue', 'size': 's', 'price': 9, 'qty': 1 },
    { 'imageURL': image4URL, 'name': 'Check pattern shirt', 'style': 'MS13KT1906', 'color': 'red', 'size': 's', 'price': 22, 'qty': 1 }
]
}

export default function (state = initialState, action ) {
    switch (action.type) {
        case 'Remove_Selected': 
        {
            var array = [...state];
            for (var i in array) {
                if (array[i].name === action.payload) break;
                else continue;
            }
            array.splice(i, 1);
            return array;
        }
        case 'Edit_Selected' : 
        return [...state];
        case 'Details_Changed':{
            var arrayDetails = [...state];
            for (var x in arrayDetails) {
                if (arrayDetails[x].name === action.payload[1]) break;
                else continue;
            }
            arrayDetails[x].size = action.payload[0].sizeValue;
            arrayDetails[x].qty = action.payload[0].qtyValue;
            return arrayDetails;
        }
        default:
        return state.products;
    }
}