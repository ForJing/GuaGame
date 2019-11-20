export function loadImages(imagesMap) {
  return new Promise(resolve => {
    const promises = Object.keys(imagesMap).map(name => {
      const path = imagesMap[name];
      return loadImage(name, path);
    });

    Promise.all(promises).then(data => {
      const result = data.reduce((obj, { name, img }) => {
        obj[name] = img;
        return obj;
      }, {});
      resolve(result);
    });
  });
}

export function loadImage(name, path) {
  return new Promise(resolve => {
    try {
      const img = document.createElement("img");
      img.onload = function() {
        resolve({ name, img });
      };
      img.src = path;
    } catch (error) {
      console.log(error);
    }
  });
}
