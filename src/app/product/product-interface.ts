export interface ProductList {
    productName: string,
    productId: string,
    availableQuantity: number
}

export interface ProductAdd {
    productName: string,
    availableQuantity: number
}

export interface OrderProduct {
    productId: string,
    quantity: number,
    existingData:ProductList
}

