import React, { useEffect } from "react";
import { ReactPhotoCollage } from "react-photo-collage";

export default function Collague ({ setting }) {
useEffect(() => {
  setTimeout(() => {
    const el = document.querySelectorAll("[data-id]");
      if (el) { 
        for (let index = 0; index < el.length; index++) {
          let html = `<div class="abosulut-card"><h3>Felicidades ${setting.name[index]}!!!<br/>Has hecho un mergue ruquest exitosamente</h3> </div>`;
          let div = document.createElement("div");
          div.classList.add("hover-container");
          div.innerHTML = html;
          el[index].appendChild(div);
        }
      }
  }, "1000");
});

  return <ReactPhotoCollage {...setting} />;
};
