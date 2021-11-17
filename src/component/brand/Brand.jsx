import React from "react";
import "./brand.scss";
import { Google, Slack, Atlassian, Dropbox, Shopify } from "./import";

const Brand = () => {
  return (
    <div className="gpt_brand section_padding">
      <div>
        <img src={Google} alt="Google" />
      </div>
      <div>
        <img src={Slack} alt="Slack" />
      </div>
      <div>
        <img src={Atlassian} alt="Atlassian" />
      </div>
      <div>
        <img src={Dropbox} alt="Dropbox" />
      </div>
      <div>
        <img src={Shopify} alt="Shopify" />
      </div>
    </div>
  );
};

export default Brand;
