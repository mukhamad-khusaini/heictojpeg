const arr = [
  "img\\bolaBotol.HEIC",
  "img\\dhidik.HEIC",
  "img\\faiq.HEIC",
  "img\\kerupuk.HEIC",
];

function converse() {
  // fetching the heic image
  let link = document.createElement("a");
  link.setAttribute("href", "");

  for (let i = 0; i < arr.length; i++) {
    fetch(arr[i])
      .then((res) => res.blob())
      .then((blob) =>
        heic2any({
          blob,
          toType: "image/jpeg",
          quality: 0.5, // cuts the quality and size by half
        })
      )
      .then((conversionResult) => {
        let filename = `${arr[i].split("img\\")[1]}.jpeg`;
        let file = new File([conversionResult], filename);
        var url = URL.createObjectURL(file);
        let link = document.createElement("a");
        link.href = url;
        link.download = filename;
        link.innerText = filename;
        link.style.display = "block";
        document.getElementById("target").appendChild(link);
      })
      .catch((e) => {
        console.log(e);
      });
  }
}

converse();
