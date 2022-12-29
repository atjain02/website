import React from "react";
import Details from "../Details";

function Research({ flipped, expanded, ExpandCollapseIcon }) {
  return (
    <div id="Research" className="section">
      <div className={`sectionLabel order-${flipped}`}>Research</div>
      <div className="sectionContent">
        <Details
          title="Undergraduate Researcher"
          date="August 2022 - Present"
          org="AVA Lab"
          location="Atlanta, GA"
          expanded={expanded}
          content={
            <ul className="list-disc list-inside">
              <li>
                Researching with Professor Larry Heck on the AVA Digital Human
                project with the goal of creating an intelligent digital human
                that can process multimodal voice/vision and output a
                high-fidelity human avatar
              </li>
              <li>
                Co-authored paper to be presented at the 2023 IEEE Conference on
                Acoustics, Speech, and Signal Processing
              </li>
              <li>
                Fine-tuned BERT, implemented HybridQA, and integrated an ASR/TTS
                pipeline to develop the conversational GUI for AVA
              </li>
            </ul>
          }
        />
        <Details
          title="Machine Learning Safety Scholar's Program"
          date="June 2022 - August 2022"
          org="Center for AI Safety"
          expanded={expanded}
          content={
            <ul className="list-disc list-inside">
              <li>
                Learned and implemented ML deep learning models for image
                classification and NLP applications
              </li>
              <li>
                Collaborated with scholars to conduct ML safety research in
                hazard analysis using PyTorch, NumPy, and Hugging Face
              </li>
              <li>
                Created a Convolutional Neural Network robust to adversarial
                attacks and trojans with Anomaly Detection for the MNIST dataset
              </li>
            </ul>
          }
        />
        {ExpandCollapseIcon}
      </div>
    </div>
  );
}

export default Research;
