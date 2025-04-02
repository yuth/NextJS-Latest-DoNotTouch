import { useState } from "react";
import Image from "next/image";
import Layout from "../components/layout";
import pic1 from "../public/images/large-img1.jpg";
import pic2 from "../public/images/large-img2.jpg";
import pic3 from "../public/images/large-img3.jpg";
import pic4 from "../public/images/large-img4.jpg";
import pic5 from "../public/images/large-img5.jpg";
import pic6 from "../public/images/large-img6.jpg";
import pic7 from "../public/images/large-img7.jpg";
import pic8 from "../public/images/large-img8.jpg";
import pic9 from "../public/images/large-img9.jpg";
import pic10 from "../public/images/large-img10.jpg";
import pic11 from "../public/images/large-img11.jpg";
import pic12 from "../public/images/large-img12.jpg";
import pic13 from "../public/images/large-img13.jpg";
import pic14 from "../public/images/large-img14.jpg";
import pic15 from "../public/images/large-img15.jpg";

export default function Page() {

  return (
    <Layout>
      <article>
        <h1>Large Image Optimization</h1>
        {
          [pic1, pic2, pic3, pic4, pic5, pic6, pic7, pic8, pic9, pic10, pic11, pic12, pic13, pic14, pic15]
            .map((pic)=> <div>
              <hr />
              <Image
                id="pic"
                src={pic}
                width={100}
                quality={75}
                placeholder="blur"
              />
            </div>)
        }

      </article>
    </Layout>
  );
}
