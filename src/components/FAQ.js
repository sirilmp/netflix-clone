import React from "react";
import { useState } from "react";
import "./FAQ.css";
import { FAQ_DATA } from "../constants/FAQData";

function FAQ() {
  const [ANSShow, setANSShow] = useState(false);

  const showANS = () => {
    setANSShow(!ANSShow);
  };

  const [faqs_data,setFaqs_data]=useState([])

setFaqs_data(FAQ_DATA) 

  //console.log(faqs_data[0].title1);

  return (
    <div className="fqa">
      {/* {faqs_data.map((faq_data) => {
        <>
          <div className="header" onClick={showANS}>
            <h3> km</h3>
          </div>
          <div className="content">
            {!ANSShow ?(
              <p>
              jnm
              </p>
            ) : (
              <p />
            )}
          </div>
        </>;
      })} */}
    </div>
  );
}

export default FAQ;
