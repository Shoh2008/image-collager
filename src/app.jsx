import React, { useCallback, useState } from "react";
import { Block, Result, Tool } from "./style";
import { toPng } from "html-to-image";

const App = () => {
  const [images, setImages] = useState([]);
  const [settings, setSettings] = useState({ name: "img" });

  const upload = (file) => {
    if (images.length < 5) {
      if (file?.name) {
        setImages((p) => ([...p, file]));
      }
    }
  };

  const downloadImg = useCallback(() => {
    toPng(document.getElementById("box"), { cacheBust: false, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = settings.name
        link.href = dataUrl
        link.click()
      })
  }, [document.getElementById("box")])

  return (
    <Block>
      <Tool>
        <div className="images">
          <label htmlFor="file">
            <i className="bi bi-cloud-upload"></i> Upload Image
            <input type="file" onChange={(e) => upload(e.target.files[0])} id="file" />
          </label>
          <div className="lines">
            {
              images.map((e, i) => <div key={i}>
                <div>
                  <div className="img">
                    {images.length !== 0 ? <img src={URL?.createObjectURL(e)} /> : ""}
                  </div> <h4>Image {i + 1}</h4>
                </div>
              </div>)
            }
          </div>
          <button onClick={() => setImages([])}>Delete All Images</button>
        </div>
        <div className="inputs">
          <input placeholder="Image Back Color" onChange={(e) => setSettings((p) => ({ ...p, image: e.target.value }))} />
          <input placeholder="Box Back Color" onChange={(e) => setSettings((p) => ({ ...p, box: e.target.value }))} />
          <input value={settings.name} placeholder="Image Name" onChange={(e) => setSettings((p) => ({ ...p, name: e.target.value }))} />
        </div>
      </Tool>
      <Result image={settings?.image} box={settings?.box}>
        <div className="box" id="box">
          <div className="lines">
            <div className="line1">
              <div className="card">
                {images[0] ? <img src={URL.createObjectURL(images[0])} /> : ""}
              </div>
              <div className="card">
                {images[1] ? <img src={URL.createObjectURL(images[1])} /> : ""}
              </div>
            </div>
            <div className="line2">
              <div className="card">
                {images[2] ? <img src={URL.createObjectURL(images[2])} /> : ""}
              </div>
              <div className="card">
                {images[3] ? <img src={URL.createObjectURL(images[3])} /> : ""}
              </div>
            </div>
          </div>
          <div className="blog">
            <div className="card">
              {images[4] ? <img src={URL?.createObjectURL(images[4])} /> : ""}
            </div>
          </div>
        </div>
        <div className="line">
          <button onClick={downloadImg}>Download</button>
        </div>
      </Result>
    </Block>
  );
}

export default App;
