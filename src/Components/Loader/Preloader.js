import React from "react";
import style from './preloader.module.css'

export const Preloader = () => {
    // const antIcon = <LoadingOutlined style={{ fontSize: 156 }} spin />;
    return (
      <div className={style.spinner}>
          <div className={style.spinner__head}></div>
      </div>

    );
};
