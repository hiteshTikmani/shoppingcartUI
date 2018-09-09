export function onEditClick(itemSelect)
{
    return {
        type : 'Edit_Selected',
        payload : itemSelect
    }
}

export function onRemoveClick(productName)
{
    return {
        type : 'Remove_Selected',
        payload : productName
    }
}

export function changed (changeObj,changedName) 
{
    return{
        type : 'Details_Changed',
        payload : [changeObj,changedName]
    }
}
