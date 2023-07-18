export const downloadFile = ({ name }) => {
  console.log("download", name);
  /*fetch({ name }).then((res) => {
    res.blob().then((blob) => {
      const fileURL = window.URL.createObjectURL(blob);
      let alink = document.createElement("a");
      alink.href = fileURL;
      alink.download = { name };
      alink.click();
    });
  });*/
};
