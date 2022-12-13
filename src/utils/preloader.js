export async function preloadImage(i) {
  const src = `https://source.unsplash.com/random/?Animal/?img=${i}`

  return new Promise((resolve, reject) => {
    const img = new Image()
    img.src = src

    img.onload = () => {
      resolve(src)
    }
    img.onerror = () => {
      reject(null)
    }
  })
}