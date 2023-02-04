export const getCartData = async () => {
  const options = {
    method: 'GET',
  }
  const fetchURL = 'http://localhost:3001/cart/Dan'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      let data = await response.json()
      return data
    }
  } catch (error) {}
}

export const getStoreData = async () => {
  const options = {
    method: 'GET',
  }
  const fetchURL = 'http://localhost:3001/products/?limit=6&price=asc'

  try {
    let response = await fetch(fetchURL, options)
    if (response.ok) {
      let data = await response.json()
      return data
    }
  } catch (error) {}
}
