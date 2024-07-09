// 'use client';
import Image from "next/image";
import { paragraphStyles } from "../styles";
// import FrogRainComponent from "../components/make-it-rain";

// TODO: Have a button where you can make it rain frogs

const KathyImage = () => {
  return (
    <Image
      src="/kathy.svg"
      alt="Kathy"
      width={500}
      height={500}
    />
  );
};

export default function Home() {
  return (
    <div className="flex">
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">Hi! &#x1F44B;  My name is Kat</h1>
        <p className="mb-4 text-lg">
          &#127757; I currently work as a Spatial Analyst and Software Developer at <a href="https://urbis.com.au/" target="_blank" rel="noopener noreferrer" className="text-neutral font-bold">Urbis</a>.  
        </p>
        <p className={paragraphStyles}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm a self-proclaimed nerd and have an almost insatiable thirst for learning new technology. I have experience in spatial and data analysis, web and software development, and machine learning. I'm 
          also currently seeking to work on open source projects in my spare time, so please <a href="/contact" rel="noopener noreferrer" className="text-neutral font-bold">reach out </a> 
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          if you'd like to collaborate! 
        </p>
        <p className={paragraphStyles}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          I'm especially interested in working on projects related to AI safety and/or governance. No matter what your <a href="https://en.wikipedia.org/wiki/P(doom)" target="_blank" rel="noopener noreferrer" className="text-neutral font-bold">p(doom) </a>
          is, when humanity itself is on the line, we must do everything humanly possible to lower the risk as much as we can.
        </p>
        <p className={paragraphStyles}>
          I have also taken the <a href="https://www.givingwhatwecan.org/pledge" target="_blank" rel="noopener noreferrer" className="text-neutral font-bold">10% pledge &#x1F536; </a>
          and would encourage you to do the same!
        </p>
      </div>
      <div className="flex p-8">
        <KathyImage />
        {/* <FrogRainComponent /> */}
      </div>
    </div>
  );
}


