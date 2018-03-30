class ImageUtility {
  static isImageJPGOrPNG(file: File, width?: number, height?: number): Promise<boolean> {
    return new Promise(function(resolve, reject) {
      if ((file.type !== 'image/jpeg') && (file.type !== 'image/png')) {
        return resolve(false);
      }

      if ((width) && (height)) {
        let fileReader = new FileReader();
        fileReader.onload = () => {
          let image = new Image();
          image.src = fileReader.result;
          image.onload = () => {
            if ((image.width === width) && (image.height === height)) {
              return resolve(true);
            }
            return resolve(false);
          };
        };
        fileReader.readAsDataURL(file);
      }
      else {
        return resolve(true);
      }
    });
  }
}

export default ImageUtility;